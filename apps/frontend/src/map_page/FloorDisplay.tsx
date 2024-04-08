import { Node, Path } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import {
  AccessibilityType,
  FloorDisplayProps,
  NodeDisplayProps,
  PathDisplayProps,
  PathOptionsRequest,
  StartEndNodes,
} from "./types/map_page_types.ts";
import { NodeDisplay } from "./NodeDisplay.tsx";
import { PathDisplay } from "./PathDisplay.tsx";
import axios from "axios";

export function FloorDisplay(props: FloorDisplayProps): React.JSX.Element {
  const nodes: Array<Node> = props.nodes;

  const [startNode, setStartNode] = useState<string | null>(null);
  const [endNode, setEndNode] = useState<string | null>(null);
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
  const updateDimensions = () => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    async function getPath(): Promise<void> {
      if (startNode !== null && endNode !== null) {
        try {
          const startEndNode: StartEndNodes = {
            node1ID: startNode,
            node2ID: endNode,
          };
          const pathOptionsRequest: PathOptionsRequest = {
            algorithm: props.algorithm,
            includeStairs: props.accessibility !== AccessibilityType.wheelchair,
            nodes: startEndNode,
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
  }, [props.accessibility, props.algorithm, setPath, startNode, endNode]);

  const handleNodeSelection = (node: Node): void => {
    if (!startNode) {
      setStartNode(node.ID);
      //console.log("Start node: " + node + ", End node: " + null);
    } else if (!endNode) {
      setEndNode(node.ID);
      //console.log("Start node: " + startNode + ", End node: " + node);
    } else {
      setStartNode(node.ID);
      setEndNode(null);
      //console.log("Start node: " + node + ", End node: " + null);
    }
  };

  useEffect(() => {
    if (props.locationSelectorStartNodeID) {
      setStartNode(props.locationSelectorStartNodeID);
    }
  }, [props.locationSelectorStartNodeID]);

  useEffect(() => {
    if (props.locationSelectorEndNodeID) {
      setEndNode(props.locationSelectorEndNodeID);
    }
  }, [props.locationSelectorEndNodeID]);

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
      draggingNodes: props.draggingNodes,
      scale: props.scale,
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
        onLoad={updateDimensions}
      ></img>
      {nodes.map((node) => (
        <NodeDisplay {...nodeDisplayProps(node)} />
      ))}
    </div>
  );
}
