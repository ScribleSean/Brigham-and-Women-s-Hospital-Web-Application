import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import { FloorType, Node, Path } from "common/src/DataStructures.ts";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  EdgesByFloor,
  NodesByFloor,
  NodesOptionsRequest,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import {
  AccessibilityType,
  EdgesDisplayProps,
  NodeDisplayProps,
  PathDisplayProps,
  PathOptionsRequest,
  StartEndNodes,
} from "../../../../packages/common/src/types/map_page_types.ts";
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
  const {
    currentFloor,
    nodesByFloor,
    setNodesByFloor,
    setEdgesByFloor,
    editorMode,
    selectedAccessibility,
    selectedAlgorithm,
    path,
    setPath,
    setDirectionsCounter,
    startNode,
    endNode,
  } = useMapContext();

  const buildingMap: BuildingMap = new BuildingMap([
    new FloorMap("00_thelowerlevel1.png", FloorType.L1),
    new FloorMap("00_thelowerlevel2.png", FloorType.L2),
    new FloorMap("01_thefirstfloor.png", FloorType.first),
    new FloorMap("02_thesecondfloor.png", FloorType.second),
    new FloorMap("03_thethirdfloor.png", FloorType.third),
  ]);

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

  async function getEdges(): Promise<void> {
    try {
      if (!editorMode) {
        const edgesByfloor: EdgesByFloor = (await axios.get("/api/edges"))
          .data as EdgesByFloor;
        setEdgesByFloor(edgesByfloor);
      } else {
        setEdgesByFloor(null);
      }
    } catch (error) {
      console.error("Failed to fetch edges data:", error);
    }
  }

  getNodes();
  getEdges();
  useEffect(() => {
    async function getPath(): Promise<void> {
      if (startNode !== null && endNode !== null) {
        try {
          const startEndNode: StartEndNodes = {
            node1ID: startNode.ID,
            node2ID: endNode.ID,
          };
          const pathOptionsRequest: PathOptionsRequest = {
            algorithm: selectedAlgorithm,
            includeStairs:
              selectedAccessibility !== AccessibilityType.wheelchair,
            nodes: startEndNode,
            byFloors: true,
          };
          const tempPath = (await axios.post("/api/path", pathOptionsRequest))
            .data as Array<Path>;
          setPath(tempPath);
        } catch (error) {
          console.error("Failed to get the path:", error);
        }
      }
    }

    getPath();
  }, [setPath, selectedAlgorithm, selectedAccessibility, startNode, endNode]);

  const imageWidth: number = 5000;
  const imageHeight: number = 3400;
  const ref = useRef<HTMLImageElement | null>(null);
  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);
  const isImageLoaded = useRef(false);
  const loadImageOnce = useRef(0);

  function getWidthScaling(): number {
    return divWidth / imageWidth;
  }

  function getHeightScaling(): number {
    return divHeight / imageHeight;
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

  const handleImageLoad = () => {
    if (!isImageLoaded.current) {
      updateDimensions();
    }
  };

  useEffect(() => {
    setDirectionsCounter(0);
  }, [setDirectionsCounter, path]);

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
    width: "fit",
    height: "100%",
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
