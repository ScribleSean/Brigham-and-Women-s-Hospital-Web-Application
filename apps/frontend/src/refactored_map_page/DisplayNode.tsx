import { NodeDisplayProps } from "../../../../packages/common/src/types/map_page_types.ts";
import React, { CSSProperties /*useState*/ } from "react";
import { Node } from "common/src/DataStructures.ts";
import Draggable from "react-draggable";
import { useMapContext } from "./MapContext.ts";

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
  } = useMapContext();

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
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "100%",
    padding: "0",
    borderColor: "black",
    zIndex: "3",
    backgroundColor: isStartNode ? "green" : isEndNode ? "red" : "white",
  };

  const handleStartDrag = () => {
    setDisableZoomPanning(true);
  };

  const handleStopDrag = () => {
    setDisableZoomPanning(false);
  };

  return (
    <Draggable
      scale={scale}
      onStart={handleStartDrag}
      onStop={handleStopDrag}
      disabled={!editorMode}
    >
      <button
        style={nodeStyle}
        //onMouseEnter={() => setHoverActive(true)}
        //onMouseLeave={() => setHoverActive(false)}
        onClick={() => handleNodeSelection(node)}
      ></button>
    </Draggable>
  );
}
