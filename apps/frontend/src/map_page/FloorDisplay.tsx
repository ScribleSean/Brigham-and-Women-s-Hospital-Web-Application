import { Node, Path } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import {
  PathDisplayProps,
  NodeDisplayProps,
  FloorDisplayProps,
  StartEndNodes,
} from "./types/map_page_types.ts";
import { NodeDisplay } from "./NodeDisplay.tsx";
import { PathDisplay } from "./PathDisplay.tsx";
import axios from "axios";

export function FloorDisplay(props: FloorDisplayProps): React.JSX.Element {
  const nodes: Array<Node> = props.nodes;

  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);
  const [path, setPath] = useState<Array<Path>>(new Array<Path>());

  const imageWidth: number = 5000;
  const imageHeight: number = 3400;

  const ref = useRef<HTMLImageElement | null>(null);

  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);

  function getWidthScaling(): number {
    return divWidth / imageWidth;
  }

  function getHeightScaling(): number {
    return divHeight / imageHeight;
  }

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    async function getPath(): Promise<void> {
      if (startNode !== null && endNode !== null) {
        try {
          const startEndNode: StartEndNodes = {
            node1: startNode,
            node2: endNode,
          };
          console.log(startEndNode);
          const tempPath = (await axios.post("/api/path", startEndNode))
            .data as Array<Path>;
          console.log(tempPath);
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

  const [changingNodes] = useState<Array<Node>>(new Array<Node>());

  const divStyle: CSSProperties = {
    position: "absolute",
    width: "fit",
    height: "100%",
    //backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    zIndex: "1",
  };

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    const changesFloor: boolean = changingNodes.includes(node);
    return {
      node: node,
      key: node.ID,
      scaling: {
        widthScaling: getWidthScaling(),
        heightScaling: getHeightScaling(),
      },
      handleNodeSelection: handleNodeSelection,
      changesFloor: changesFloor,
    };
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      path: path,
      scaling: {
        widthScaling: getWidthScaling(),
        heightScaling: getHeightScaling(),
      },
    };
  }

  return (
    <div>
      <PathDisplay {...pathDisplayProps()} />
      <img
        ref={ref}
        className="image div"
        style={divStyle}
        src={props.imageUrl}
        alt={"Error"}
      ></img>
      {nodes.map((node) => (
        <NodeDisplay {...nodeDisplayProps(node)} />
      ))}
    </div>
  );
}
