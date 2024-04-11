import {
  EdgesByFloor,
  EdgesDisplayProps,
} from "common/src/types/map_page_types.ts";
import { FloorType, Node, Edge } from "common/src/DataStructures.ts";
import React, { SVGProps, CSSProperties, useEffect, useState } from "react";
import { useMapContext } from "./MapContext.ts";
import axios from "axios";

export default EdgesDisplay;

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

function EdgesDisplay(props: EdgesDisplayProps): React.JSX.Element {
  const { currentFloor, editorMode } = useMapContext();
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;

  const [edgesByFloor, setEdgesByFloor] = useState<EdgesByFloor | null>(null);

  const currentEdges: Array<Edge> = getEdgesByFloor(edgesByFloor, currentFloor);

  useEffect(() => {
    async function getEdges(): Promise<void> {
      try {
        const edgesByfloor: EdgesByFloor = (await axios.get("/api/edges"))
          .data as EdgesByFloor;
        setEdgesByFloor(edgesByfloor);
      } catch (error) {
        console.error("Failed to fetch edges data:", error);
      }
    }
    getEdges();
  }, []);

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
      {editorMode &&
        currentEdges.map((edge, index) => (
          <polyline
            key={index}
            {...getPolylineProps(getEdgeCoordinates(edge), red)}
          />
        ))}
    </svg>
  );
}
