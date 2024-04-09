import { PathDisplayProps } from "./types/map_page_types.ts";
import { Node, Path } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { SVGProps, CSSProperties, useEffect } from "react";

export function PathDisplay(props: PathDisplayProps): React.JSX.Element {
  const paths: Array<Path> = props.path;
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const currentPathDisplayed: number = props.currentDirectionsNumber;

  useEffect(() => {
    if (currentPathDisplayed >= paths.length) {
      props.resetDirections();
    }
  }, [currentPathDisplayed, paths.length, props]);

  function getNodes(path: Path): Array<Node> {
    const nodes: Array<Node> = [];
    if (path.edges) {
      for (const edge of path.edges) {
        nodes.push(edge.startNode);
      }
      nodes.push(path.edges[path.edges.length - 1].endNode);
    }
    return nodes;
  }

  function getPathCoordinates(path: Path): string {
    if (!path.edges) {
      return "";
    }
    const nodes: Array<Node> = getNodes(path);
    return nodes
      .map((node) => `${node.x * widthScaling},${node.y * heightScaling}`)
      .join(" ");
  }

  const lightBlue: string = "lightBlue"; //Light blue color for all paths
  const darkBlue: string = "darkBlue"; // Dark blue color for the current path
  const strokeDasharray: number = 5;

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
      strokeLinecap: "round",
      style: {
        strokeDasharray,
        animation: `march 2s linear infinite`,
      },
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
      <defs>
        <style>
          {`
          @keyframes march {
            to {
              stroke-dashoffset: -${strokeDasharray * 2};
            }
          }
        `}
        </style>
      </defs>
      {paths.map((path, index) => {
        const strokeColor =
          index === currentPathDisplayed ? darkBlue : lightBlue;
        return (
          <polyline
            key={index}
            {...getPolylineProps(getPathCoordinates(path), strokeColor)}
          />
        );
      })}
    </svg>
  );
}
