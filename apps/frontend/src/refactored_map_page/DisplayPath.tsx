import { PathDisplayProps } from "../../../../packages/common/src/types/map_page_types.ts";
import { Node, Path } from "common/src/DataStructures.ts";
import React, { SVGProps, CSSProperties, useEffect } from "react";
import { useMapContext } from "./MapContext.ts";

export default PathDisplay;

function PathDisplay(props: PathDisplayProps): React.JSX.Element {
  const { path, directionsCounter, setDirectionsCounter } = useMapContext();
  const paths: Array<Path> = path ? path : new Array<Path>();
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;

  useEffect(() => {
    if (directionsCounter >= paths.length) {
      setDirectionsCounter(0);
    }
  }, [setDirectionsCounter, directionsCounter, paths.length, props]);

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
        const strokeColor = index === directionsCounter ? darkBlue : lightBlue;
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
