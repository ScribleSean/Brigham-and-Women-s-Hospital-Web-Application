import { NodeDisplayProps } from "./types/map_page_types.ts";
import React, { CSSProperties, useState } from "react";
import { Node } from "../../../backend/src/algorithms/DataStructures.ts";
import Draggable from "react-draggable";

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

export function NodeDisplay(props: NodeDisplayProps): React.JSX.Element {
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const node: Node = props.node;
  const handleNodeSelection = props.handleNodeSelection;
  const [hoverActive, setHoverActive] = useState(false);
  //const changesFloor: boolean = props.changesFloor;

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
    backgroundColor: hoverActive ? "green" : "white",
  };

  const handleStartDrag = () => {
    props.draggingNodes(true);
  };

  const handleStopDrag = () => {
    props.draggingNodes(false);
  };

  return (
    <Draggable
      scale={props.scale}
      onStart={handleStartDrag}
      onStop={handleStopDrag}
      disabled={props.currentEditorMode}
    >
      <button
        style={nodeStyle}
        onMouseEnter={() => setHoverActive(true)}
        onMouseLeave={() => setHoverActive(false)}
        onClick={() => handleNodeSelection(node)}
      ></button>
    </Draggable>
  );
}
