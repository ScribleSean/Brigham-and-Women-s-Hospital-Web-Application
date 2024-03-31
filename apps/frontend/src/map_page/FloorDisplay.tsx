import {
  Node,
  Edge,
  Graph,
  Path,
} from "../../../backend/src/algorithms/DataStructures.ts";
import { BFS } from "../../../backend/src/algorithms/PathFinder.ts";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import {
  PathDisplayProps,
  NodeDisplayProps,
  FloorDisplayProps,
} from "../../../backend/src/types/map_page_types.ts";
import { NodeDisplay } from "./NodeDisplay.tsx";
import { PathDisplay } from "./PathDisplay.tsx";

export function FloorDisplay(props: FloorDisplayProps): React.JSX.Element {
  const nodes: Array<Node> = props.nodes;
  const graph: Graph = props.graph;

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

  const [path, setPath] = useState<Path>(new Path(new Array<Edge>()));
  const [changingNodes, setChangingNodes] = useState<Array<Node>>(
    new Array<Node>(),
  );

  const pathFinderRef = useRef<BFS | null>(null);

  if (!pathFinderRef.current) {
    pathFinderRef.current = new BFS(graph);
  }

  useEffect(() => {
    if (!startNode || !endNode) {
      setPath(new Path(new Array<Edge>()));
      return;
    }

    const currentPath = pathFinderRef.current?.findPath(startNode, endNode);
    if (currentPath === undefined) {
      return;
    }

    if (currentPath.getNumEdges() > 0 && currentPath.changesFloor()) {
      const nodes = currentPath.getNodesChangingFloor();
      setChangingNodes(nodes);
    }

    setPath(currentPath);
  }, [startNode, endNode]);

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
