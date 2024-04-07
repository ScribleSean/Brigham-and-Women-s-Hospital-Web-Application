import { NodeDisplayProps } from "./types/map_page_types.ts";
import React, { CSSProperties } from "react";
import { Node } from "../../../backend/src/algorithms/DataStructures.ts";

export function NodeDisplay(props: NodeDisplayProps): React.JSX.Element {
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const node: Node = props.node;
  const handleNodeSelection = props.handleNodeSelection;
  const changesFloor: boolean = props.changesFloor;

  const newX: number = node.x * widthScaling;
  const newY: number = node.y * heightScaling;

  const nodeStyle: CSSProperties = {
    position: "absolute",
    left: `${newX}px`,
    top: `${newY}px`,
    width: changesFloor ? "10px" : "10px",
    height: changesFloor ? "10px" : "10px",
    borderRadius: "100%",
    padding: "0",
    borderColor: changesFloor ? "red" : "blueviolet",
    color: "black",
    zIndex: "3",
  };

  return (
    <button
      style={nodeStyle}
      onClick={() => handleNodeSelection(node)}
    ></button>
  );
}
