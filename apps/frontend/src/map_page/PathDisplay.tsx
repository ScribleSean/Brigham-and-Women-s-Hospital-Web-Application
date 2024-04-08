import { PathDisplayProps } from "./types/map_page_types.ts";
import { Node, Path } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { SVGProps, CSSProperties, useEffect } from "react";

export function PathDisplay(props: PathDisplayProps): React.JSX.Element {
  const paths: Array<Path> = props.path;
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const currentPathDisplayed: number = props.currentDirectionsNumber;

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
      return ""; // Return an empty string if edges are undefined
    }
    const nodes: Array<Node> = getNodes(path);
    return nodes
      .map((node) => `${node.x * widthScaling},${node.y * heightScaling}`)
      .join(" ");
  }

  const colors: Array<string> = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#00ffff",
  ];
  const totalLength: number = 1000;
  const animationDuration: number = 3;

  function getPolylineProps(coordinates: string): SVGProps<SVGPolylineElement> {
    return {
      points: coordinates,
      stroke: colors[currentPathDisplayed % colors.length],
      strokeWidth: "3",
      fill: "none",
      strokeLinejoin: "bevel",
      strokeLinecap: "round",
      style: {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
        animation: `draw ${animationDuration}s ease-in-out forwards`,
      },
    };
  }

  const svgStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  };

  useEffect(() => {
    if (currentPathDisplayed >= paths.length) {
      props.resetDirections();
    }
  }, [currentPathDisplayed, paths.length, props]);

  const currentPathCoordinates =
    currentPathDisplayed < paths.length
      ? getPathCoordinates(paths[currentPathDisplayed])
      : "";

  return (
    <svg style={svgStyle}>
      <defs>
        <filter id="soften">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      {currentPathCoordinates && (
        <polyline {...getPolylineProps(currentPathCoordinates)} />
      )}
      <style>
        {`
          @keyframes draw {
            from { stroke-dashoffset: ${totalLength}; }
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>
    </svg>
  );
}
