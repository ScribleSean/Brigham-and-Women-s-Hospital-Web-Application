import { PathDisplayProps } from "./types/map_page_types.ts";
import { Node, Path } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { useEffect, useRef, SVGProps, CSSProperties } from "react";

export function PathDisplay(props: PathDisplayProps): React.JSX.Element {
  const path: Array<Path> = props.path;
  const widthScaling: number = props.widthScaling;
  const heightScaling: number = props.heightScaling;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getMiddlePoint = (): void => {
      if (ref.current) {
        const x_offset: number = ref.current.offsetLeft;
        const y_offset: number = ref.current.offsetTop;
        const width: number = ref.current.clientWidth;
        const height: number = ref.current.clientHeight;
        const middleXParent: number = x_offset + width / 2;
        const middleYParent: number = y_offset + height / 2;
        props.setMiddlePoint(middleXParent, middleYParent);
      }
    };

    getMiddlePoint();

    window.addEventListener("resize", getMiddlePoint);

    return () => window.removeEventListener("resize", getMiddlePoint);
  }, [props]);

  function getNodes(path: Path): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    for (const edge of path.edges) {
      nodes.push(edge.startNode);
    }
    const endEdge = path.edges[path.edges.length - 1];
    nodes.push(endEdge.endNode);
    return nodes;
  }

  function getPathCoordinates(path: Path): string {
    const nodes: Array<Node> = getNodes(path);
    return nodes
      .map((node) => {
        const x: number = node.x * widthScaling;
        const y: number = node.y * heightScaling;
        return `${x},${y}`;
      })
      .join(" ");
  }

  if (path.length === 0) {
    return <div>no path</div>;
  }

  function getSubPathsCoordinates(): Array<string> {
    return props.path.map((subPath) => getPathCoordinates(subPath));
  }

  const subPathsCoordinates: Array<string> = getSubPathsCoordinates();

  const colors: Array<string> = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#00ffff",
  ];
  const totalLength: number = 1000;
  const animationDuration: number = 3;

  function getPolylineProps(
    index: number,
    coordinates: string,
  ): SVGProps<SVGPolylineElement> {
    return {
      points: coordinates,
      stroke: colors[index % colors.length],
      strokeWidth: "3",
      fill: "none",
      strokeLinejoin: "bevel",
      strokeLinecap: "round",
      style: {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
        animation: `draw ${animationDuration}s ease-in-out forwards`,
        animationDelay: `${index * animationDuration}s`,
      },
    };
  }

  const svgStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <svg style={svgStyle}>
      <defs>
        <filter id="soften">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      {subPathsCoordinates.map((coordinates, index) => (
        <polyline key={index} {...getPolylineProps(index, coordinates)} />
      ))}
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
