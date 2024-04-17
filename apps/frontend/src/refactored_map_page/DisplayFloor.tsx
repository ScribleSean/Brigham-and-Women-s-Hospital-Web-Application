import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import { FloorType, Node, Edge } from "common/src/DataStructures.ts";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  EdgeDisplayProps,
  EdgesByFloor,
  NodeDisplayProps,
  NodesByFloor,
  NodesOptionsRequest,
  PathDisplayProps,
  Scaling,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import PathDisplay from "./DisplayPath.tsx";
import NodeDisplay from "./DisplayNode.tsx";
import EdgeDisplay from "./DisplayEdge.tsx";

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

function getEdgesByFloor(
  allEdges: EdgesByFloor | null,
  floor: FloorType,
): Array<Edge> {
  if (!allEdges) return [];
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = allEdges;
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

const buildingMap: BuildingMap = new BuildingMap([
  new FloorMap("00_thelowerlevel1.png", FloorType.L1),
  new FloorMap("00_thelowerlevel2.png", FloorType.L2),
  new FloorMap("01_thefirstfloor.png", FloorType.first),
  new FloorMap("02_thesecondfloor.png", FloorType.second),
  new FloorMap("03_thethirdfloor.png", FloorType.third),
]);

function FloorDisplay() {
  const {
    currentFloor,
    nodesByFloor,
    setNodesByFloor,
    edgesByFloor,
    setEdgesByFloor,
    showNodes,
  } = useMapContext();

  useEffect(() => {
    async function getNodes(): Promise<void> {
      try {
        const nodesOptionsRequest: NodesOptionsRequest = {
          includeHallways: false,
          byFloors: true,
          showAllNodes: showNodes,
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
  }, [setNodesByFloor, showNodes]);

  useEffect(() => {
    async function getEdges(): Promise<void> {
      try {
        const edgesByfloor: EdgesByFloor = (await axios.get("/api/edges"))
          .data as EdgesByFloor;
        setEdgesByFloor(edgesByfloor);
      } catch (error) {
        console.error("Failed to fetch edges data:", error);
      }
    }

    getEdges();
  }, [setEdgesByFloor]);

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
      //console.log("here");
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

  function getScaling(): Scaling {
    return {
      widthScaling: getWidthScaling(),
      heightScaling: getHeightScaling(),
    };
  }

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    return {
      node: node,
      key: node.ID,
      scaling: getScaling(),
    };
  }

  function edgeDisplayProps(edge: Edge): EdgeDisplayProps {
    return {
      edge: edge,
      key: edge.ID,
      scaling: getScaling(),
    };
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      scaling: getScaling(),
    };
  }

  const divStyleBig: CSSProperties = {
    width: "100vw",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    zIndex: "1",
  };

  const svgStyle: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 2,
  };

  return (
    <div style={divStyleBig}>
      <img
        ref={ref}
        style={imgStyle}
        src={buildingMap.getFloorMap(currentFloor).getPngPath()}
        alt={"Error"}
        onLoad={handleImageLoad}
      ></img>
      {getNodesByFloor(nodesByFloor, currentFloor).map((node) => (
        <NodeDisplay {...nodeDisplayProps(node)} />
      ))}
      <svg style={svgStyle}>
        {getEdgesByFloor(edgesByFloor, currentFloor).map((edge) => (
          <EdgeDisplay {...edgeDisplayProps(edge)} />
        ))}
      </svg>
      <PathDisplay {...pathDisplayProps()} />
    </div>
  );
}
