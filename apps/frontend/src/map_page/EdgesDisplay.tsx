import { EdgesByFloor, EdgesDisplayProps } from "./types/map_page_types.ts";
import { FloorType, Node, Edge } from "common/src/DataStructures.ts";
import React, { SVGProps, CSSProperties } from "react";

function getEdgesByFloor(
  allEdges: EdgesByFloor | null,
  floor: FloorType,
): Array<Edge> {
  if (!allEdges) return [];
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = allEdges;
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

export function EdgesDisplay(props: EdgesDisplayProps): React.JSX.Element {
  const edges: EdgesByFloor | null = props.edges;
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const floor: FloorType = props.floor;

  const currentEdges: Array<Edge> = getEdgesByFloor(edges, floor);

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

  const svgStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  };

  return (
    <svg style={svgStyle}>
      {currentEdges.map((edge, index) => {
        return (
          <polyline
            key={index}
            {...getPolylineProps(getEdgeCoordinates(edge), red)}
          />
        );
      })}
    </svg>
  );
}
