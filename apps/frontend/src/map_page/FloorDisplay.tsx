import {
  Node,
  Edge,
  Path,
} from "../../../backend/src/algorithms/DataStructures.ts";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import {
  PathDisplayProps,
  NodeDisplayProps,
  FloorDisplayProps, StartEndNodes,
} from "./types/map_page_types.ts";
import { NodeDisplay } from "./NodeDisplay.tsx";
import { PathDisplay } from "./PathDisplay.tsx";
import axios from "axios";

export function FloorDisplay(props: FloorDisplayProps): React.JSX.Element {
  const nodes: Array<Node> = props.nodes;

  const imageWidth: number = 5000;
  const imageHeight: number = 3400;

  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
        setMiddleX(width / 2);
        setMiddleY(height / 2);
        console.log(middleY);
        console.log(middleX);
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  });

  function getWidthScaling(): number {
    return divWidth / imageWidth;
  }

  function getHeightScaling(): number {
    return divHeight / imageHeight;
  }

  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);

  const [path, setPath] = useState<Path>(new Path(new Array<Edge>));

  useEffect(() => {
    async function getPath(): Promise<void> {
      if (startNode !== null && endNode !== null) {
        try {
          const startEndNode: StartEndNodes = {
            node1: startNode,
            node2: endNode,
          };
          const tempPath = await axios.post("/api/path",startEndNode) as Path;
          setPath(tempPath);
        } catch (error) {
          console.error("Failed to get the path:", error);
        }
      }
    }
    getPath();
  }, [setPath, startNode, endNode]);

  const handleNodeSelection = (node: Node): void => {
    if (!startNode) {
      setStartNode(node);
      //console.log("Start node: " + node + ", End node: " + null);
    } else if (!endNode) {
      setEndNode(node);
      //console.log("Start node: " + startNode + ", End node: " + node);
    } else {
      setStartNode(node);
      setEndNode(null);
      //console.log("Start node: " + node + ", End node: " + null);
    }
  };

  const [changingNodes] = useState<Array<Node>>(
    new Array<Node>(),
  );

  const divStyle: CSSProperties = {
    position: "relative",
    aspectRatio: "5000 / 3400",
    minHeight: "90%",
    maxHeight: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    zIndex: "1",
  };

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    const changesFloor: boolean = changingNodes.includes(node);
    return {
      node: node,
      key: node.getID(),
      widthScaling: getWidthScaling(),
      heightScaling: getHeightScaling(),
      handleNodeSelection: handleNodeSelection,
      changesFloor: changesFloor,
    };
  }

  function setMiddlePoint(middleX: number, middleY: number): void {
    setMiddleX(middleX);
    setMiddleY(middleY);
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      path: path,
      widthScaling: getWidthScaling(),
      heightScaling: getHeightScaling(),
      setMiddlePoint: setMiddlePoint,
    };
  }

  return (
    <div ref={ref} style={divStyle}>
      {nodes.map((node) => (
        <NodeDisplay {...nodeDisplayProps(node)} />
      ))}
      <PathDisplay {...pathDisplayProps()} />
    </div>
  );
}
