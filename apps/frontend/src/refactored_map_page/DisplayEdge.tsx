import {
  EdgeDisplayProps,
  EditorMode,
} from "common/src/types/map_page_types.ts";
import { Edge } from "common/src/data_structures/Edge.ts";
import { Node } from "common/src/data_structures/Node.ts";
import { SVGProps } from "react";
import { useMapContext } from "./MapContext.ts";

export default EdgeDisplay;

function EdgeDisplay(props: EdgeDisplayProps) {
  const { edge, scaling } = props;
  const { widthScaling, heightScaling } = scaling;
  const { editorMode, showEdges } = useMapContext();

  function getEdgeCoordinates(edge: Edge): string {
    const nodes: [Node, Node] = [edge.startNode, edge.endNode];
    return nodes
      .map((node) => `${node.x * widthScaling},${node.y * heightScaling}`)
      .join(" ");
  }

  const red: string = "red";

  function getPolylineProps(
    coordinates: string,
    strokeColor: string,
  ): SVGProps<SVGPolylineElement> {
    return {
      points: coordinates,
      stroke: strokeColor,
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "bevel",
    };
  }

  return (
    showEdges &&
    editorMode !== EditorMode.disabled && (
      <polyline {...getPolylineProps(getEdgeCoordinates(edge), red)} />
    )
  );
}
