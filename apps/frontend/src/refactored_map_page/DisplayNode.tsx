import { NodeDisplayProps } from "common/src/types/map_page_types.ts";
import React, { CSSProperties, useEffect, useState } from "react";
import { Node, Path } from "common/src/DataStructures.ts";
import Draggable from "react-draggable";
import { useMapContext } from "./MapContext.ts";
import "../styles/DisplayNode.css";

export default NodeDisplay;

function imageToDisplayCoordinates(
  x: number,
  scalingX: number,
  y: number,
  scalingY: number,
): { displayX: number; displayY: number } {
  return {
    displayX: x * scalingX,
    displayY: y * scalingY,
  };
}

/*
function displayToImageCoordinates(x: number, scalingX: number, y: number, scalingY: number): { imageX: number; imageY: number } {
  return {
    imageX: x / scalingX,
    imageY: y / scalingY
  };
}
*/

function sameNode(node1: Node | null, node2: Node | null) {
  if (node1 && node2) {
    return node1.ID == node2.ID;
  } else {
    return false;
  }
}

function startBorderNode(node: Node, path: Path) {
  return path.edges[0].startNode.ID === node.ID;
}

function endBorderNode(node: Node, path: Path) {
  const len: number = path.edges.length;
  if (len === 1) return false;
  return path.edges[len - 2].endNode.ID === node.ID;
}

/**
 if (paths.length === 0) return false;

 paths.forEach((path: Path) => {
 const length: number = path.edges.length;
 const startNode: Node = path.edges[0].startNode;
 const lastNode: Node = path.edges[length - 1].startNode;
 if (node.ID === startNode.ID || node.ID === lastNode.ID) {console.log(node);return true;}
 });

 return false;
 **/

export function NodeDisplay(props: NodeDisplayProps): React.JSX.Element {
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const node: Node = props.node;
  const {
    startNode,
    endNode,
    setStartNode,
    setEndNode,
    editorMode,
    setDisableZoomPanning,
    scale,
    paths,
    directionsCounter,
    setDirectionsCounter,
  } = useMapContext();
  const [triggerRed, setTriggerRed] = useState(false);

  useEffect(() => {
    if (startNode) {
      // Schedule the red animation to start after 2 seconds (the duration of one green animation cycle)
      setTimeout(() => {
        setTriggerRed(true);
      }, 2000); // Duration of the green pulse
    }
  }, [startNode]);

  function nodeInPathChangingFloorStart(node: Node, paths: Array<Path>) {
    if (paths && paths.length > 0) {
      return paths.some((path) => {
        return path.edges.some((edge) => {
          return (
            startBorderNode(node, path) &&
            (edge.startNode.ID === node.ID || edge.endNode.ID === node.ID) &&
            (node.type === "ELEV" || node.type === "STAI") &&
            paths[directionsCounter].edges[0].startNode.ID === node.ID
          );
        });
      });
    }
    return false;
  }

  function nodeInPathChangingFloorEnd(node: Node, paths: Array<Path>) {
    if (paths && paths.length > 0) {
      return paths.some((path) => {
        return path.edges.some((edge) => {
          return (
            endBorderNode(node, path) &&
            (edge.startNode.ID === node.ID || edge.endNode.ID === node.ID) &&
            (node.type === "ELEV" || node.type === "STAI") &&
            paths[directionsCounter].edges[
              paths[directionsCounter].edges.length - 2
            ].endNode.ID === node.ID
          );
        });
      });
    }
    return false;
  }

  const handleNodeSelection = (node: Node): void => {
    if (editorMode) {
      return;
    }
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

  const isStartNode = sameNode(node, startNode);
  const isEndNode = sameNode(node, endNode);

  const { displayX, displayY } = imageToDisplayCoordinates(
    node.x,
    widthScaling,
    node.y,
    heightScaling,
  );

  const nodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderRadius: "100%",
    padding: "0",
    borderColor: "black",
    backgroundColor: isStartNode ? "green" : isEndNode ? "red" : "white",
  };

  const floorNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
  };

  /*
      const startNodeIconStyle: CSSProperties = {
          width: "0.5rem",
          height: "0.5rem",
          borderColor: "black",
      };

      const endNodeIconStyle: CSSProperties = {
          width: "0.5rem",
          height: "0.5rem",
          borderColor: "black",
      };*/

  const handleStartDrag = () => {
    setDisableZoomPanning(true);
  };

  const handleStopDrag = () => {
    setDisableZoomPanning(false);
  };

  const handleChangingFloorBackNodeClick = () => {
    setDirectionsCounter(directionsCounter - 1);
  };

  const handleChangingFloorNextNodeClick = () => {
    setDirectionsCounter(directionsCounter + 1);
  };

  return (
    <>
      {sameNode(startNode, node) ? ( // Check if it's the start node
        <button
          className="pulseGreen"
          style={nodeStyle}
          onClick={() => handleNodeSelection(node)}
        ></button>
      ) : sameNode(endNode, node) ? ( // Check if it's the end node
        <button
          className={triggerRed ? "pulseRed" : "none"}
          style={nodeStyle}
          onClick={() => handleNodeSelection(node)}
        ></button>
      ) : nodeInPathChangingFloorStart(node, paths) ? (
        // Placeholder for the changing floor sign. Add your JSX here.
        <button
          style={floorNodeStyle}
          onClick={() => handleChangingFloorBackNodeClick()}
        >
          From Floor{" "}
          {directionsCounter - 1 >= 0
            ? paths[directionsCounter - 1].edges[
                paths[directionsCounter - 1].edges.length - 1
              ].startNode.floor
            : ""}
        </button>
      ) : nodeInPathChangingFloorEnd(node, paths) ? (
        <button
          style={floorNodeStyle}
          onClick={() => handleChangingFloorNextNodeClick()}
        >
          To Floor{" "}
          {paths.length > directionsCounter + 1
            ? paths[directionsCounter + 1].edges[0].startNode.floor
            : ""}
        </button>
      ) : !startNode || !endNode ? ( // Render as a normal node only if either start or end node is undefined
        <Draggable
          scale={scale}
          onStart={handleStartDrag}
          onStop={handleStopDrag}
          disabled={!editorMode}
        >
          <button
            className="none"
            style={nodeStyle}
            onClick={() => handleNodeSelection(node)}
          ></button>
        </Draggable>
      ) : null}
    </>
  );
}
