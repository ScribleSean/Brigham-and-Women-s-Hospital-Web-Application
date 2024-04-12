import {
  AccessibilityType,
  PathDisplayProps,
  PathOptionsRequest,
  StartEndNodes,
} from "common/src/types/map_page_types.ts";
import { Node, Path } from "common/src/DataStructures.ts";
import React, { SVGProps, CSSProperties, useEffect, useState } from "react";
import { useMapContext } from "./MapContext.ts";
import axios from "axios";

export default PathDisplay;

function PathDisplay(props: PathDisplayProps): React.JSX.Element {
  const {
    startNode,
    endNode,
    directionsCounter,
    setDirectionsCounter,
    selectedAlgorithm,
    selectedAccessibility,
    setCurrentFloor,
    setStartFloor,
    setEndFloor,
  } = useMapContext();
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;

  const [paths, setPaths] = useState<Array<Path>>(new Array<Path>());
  // avoid conflicts with floor selector
  const [alreadyRedirect, setAlreadyRedirected] = useState<boolean>(false);

  useEffect(() => {
    setAlreadyRedirected(false);
    if (directionsCounter >= paths.length) {
      setDirectionsCounter(0);
    }
  }, [paths, setDirectionsCounter, directionsCounter]);

  useEffect(() => {
    async function getPath(): Promise<void> {
      if (startNode !== null && endNode !== null) {
        try {
          const startEndNode: StartEndNodes = {
            node1ID: startNode.ID,
            node2ID: endNode.ID,
          };
          const pathOptionsRequest: PathOptionsRequest = {
            algorithm: selectedAlgorithm,
            includeStairs:
              selectedAccessibility !== AccessibilityType.wheelchair,
            nodes: startEndNode,
            byFloors: true,
          };
          const tempPath = (await axios.post("/api/path", pathOptionsRequest))
            .data as Array<Path>;
          setPaths(tempPath);
        } catch (error) {
          console.error("Failed to get the path:", error);
        }
      } else {
        setPaths(new Array<Path>());
      }
    }

    getPath();
  }, [
    selectedAlgorithm,
    selectedAccessibility,
    startNode,
    endNode,
    setStartFloor,
    setEndFloor,
    directionsCounter,
  ]);

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
        let strokeColor = lightBlue;
        if (paths[directionsCounter] === paths[index]) {
          strokeColor = darkBlue;
          if (!alreadyRedirect) {
            setCurrentFloor(paths[directionsCounter].edges[0].startNode.floor);
            setAlreadyRedirected(true);
          }
        }
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
