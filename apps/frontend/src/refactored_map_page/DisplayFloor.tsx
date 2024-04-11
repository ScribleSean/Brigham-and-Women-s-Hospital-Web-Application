import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import { FloorType, Node } from "common/src/DataStructures.ts";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  NodesByFloor,
  NodesOptionsRequest,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import {
  EdgesDisplayProps,
  NodeDisplayProps,
  PathDisplayProps,
} from "common/src/types/map_page_types.ts";
import EdgesDisplay from "./DisplayEdges.tsx";
import PathDisplay from "./DisplayPath.tsx";
import NodeDisplay from "./DisplayNode.tsx";

export default FloorDisplay;

function getNodesByFloor(
  allNodes: NodesByFloor | null,
  floor: FloorType,
): Array<Node> {
  if (!allNodes) return [];
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = allNodes;
  switch (floor) {
    case FloorType.first:
      return firstFloor;
    case FloorType.second:
      return secondFloor;
    case FloorType.third:
      return thirdFloor;
    case FloorType.L1:
      return L1;
    default:
      return L2;
  }
}

function FloorDisplay() {
  const { currentFloor, nodesByFloor, setNodesByFloor } = useMapContext();

  const buildingMap: BuildingMap = new BuildingMap([
    new FloorMap("00_thelowerlevel1.png", FloorType.L1),
    new FloorMap("00_thelowerlevel2.png", FloorType.L2),
    new FloorMap("01_thefirstfloor.png", FloorType.first),
    new FloorMap("02_thesecondfloor.png", FloorType.second),
    new FloorMap("03_thethirdfloor.png", FloorType.third),
  ]);

  useEffect(() => {
    async function getNodes(): Promise<void> {
      try {
        const nodesOptionsRequest: NodesOptionsRequest = {
          includeHallways: false,
          byFloors: true,
        };
        const currentNodes: NodesByFloor = (
          await axios.post("/api/nodes", nodesOptionsRequest)
        ).data as NodesByFloor;
        setNodesByFloor(currentNodes);
      } catch (error) {
        console.error("Failed to fetch nodes data:", error);
      }
    }

    getNodes();
  }, [setNodesByFloor]);

  const IMAGE_WIDTH: number = 5000;
  const IMAGE_HEIGHT: number = 3400;
  const ref = useRef<HTMLImageElement | null>(null);
  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);
  const isImageLoaded = useRef(false);
  const loadImageOnce = useRef(0);

  function getWidthScaling(): number {
    return divWidth / IMAGE_WIDTH;
  }

  function getHeightScaling(): number {
    return divHeight / IMAGE_HEIGHT;
  }
  const updateDimensions = useCallback(() => {
    if (ref.current && !isImageLoaded.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
      isImageLoaded.current = true;
    }
  }, []);

  useEffect(() => {
    if (loadImageOnce.current === 0) {
      loadImageOnce.current++;
      updateDimensions();
      isImageLoaded.current = false;
    } else {
      console.log("here");
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  });

  // I optimized the image loading
  useEffect(() => {
    const imageUrls = buildingMap
      .getFloorMaps()
      .map((floorMap) => floorMap.getPngPath());
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  });

  const handleImageLoad = () => {
    if (!isImageLoaded.current) {
      updateDimensions();
    }
  };

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    return {
      node: node,
      key: node.ID,
      scaling: {
        widthScaling: getWidthScaling(),
        heightScaling: getHeightScaling(),
      },
    };
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      scaling: {
        widthScaling: getWidthScaling(),
        heightScaling: getHeightScaling(),
      },
    };
  }

  const edgesDisplayProps: EdgesDisplayProps = {
    scaling: {
      widthScaling: getWidthScaling(),
      heightScaling: getHeightScaling(),
    },
  };

  const divStyleBig: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const divStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "fit",
    backgroundSize: "100%",
    backgroundPosition: "center",
    zIndex: "1",
  };

  return (
    <div style={divStyleBig}>
      <EdgesDisplay {...edgesDisplayProps}></EdgesDisplay>
      <PathDisplay {...pathDisplayProps()} />
      <img
        ref={ref}
        className="image div"
        style={divStyle}
        src={buildingMap.getFloorMap(currentFloor).getPngPath()}
        alt={"Error"}
        onLoad={handleImageLoad}
      ></img>
      {getNodesByFloor(nodesByFloor, currentFloor).map((node) => (
        <NodeDisplay {...nodeDisplayProps(node)} />
      ))}
    </div>
  );
}
