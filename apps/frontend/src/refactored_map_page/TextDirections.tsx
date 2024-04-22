import { Path, Edge, NodeType } from "common/src/DataStructures.ts";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useMapContext } from "./MapContext.ts";
import { IconButton } from "@mui/material";
import { EditorMode } from "common/src/types/map_page_types.ts";
import styles from "../styles/TextDirections.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default TextDirections;

function TextDirections() {
  const { paths, startNode, endNode, directionsCounter, editorMode } =
    useMapContext();

  const [directionsText, setDirectionsText] = useState<Array<string>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [expanded, setExpanded] = useState(true);

  const prevDirectionRef = useRef("");

  const generateDirections = useCallback(
    (paths: Array<Path>) => {
      const directions: Array<string> = [];

      if (paths[directionsCounter] && paths[directionsCounter].edges) {
        const currentPathEdges: Array<Edge> = paths[directionsCounter].edges;
        for (let i = 0; i < currentPathEdges.length - 1; i++) {
          const currentEdge = currentPathEdges[i];
          const nextEdge = currentPathEdges[i + 1];

          if (currentEdge.startNode.type) {
            const dx1 = currentEdge.endNode.x - currentEdge.startNode.x;
            const dy1 = currentEdge.endNode.y - currentEdge.startNode.y;
            const dx2 = nextEdge.endNode.x - nextEdge.startNode.x;
            const dy2 = nextEdge.endNode.y - nextEdge.startNode.y;

            const angle1 = Math.atan2(dy1, dx1);
            const angle2 = Math.atan2(dy2, dx2);
            const angleDifference = angle2 - angle1;

            // Normalize angleDifference to the range of -π to π
            const normalizedAngleDifference = Math.atan2(
              Math.sin(angleDifference),
              Math.cos(angleDifference),
            );

            let direction: string;

            if (Math.abs(normalizedAngleDifference) < Math.PI / 10) {
              if (prevDirectionRef.current !== "Continue straight") {
                direction = "Continue straight";
              } else {
                continue;
              }
            } else if (
              normalizedAngleDifference > 0 &&
              Math.abs(normalizedAngleDifference) < Math.PI / 5
            ) {
              direction = "Bear right";
            } else if (
              normalizedAngleDifference < 0 &&
              Math.abs(normalizedAngleDifference) < Math.PI / 5
            ) {
              direction = "Bear left";
            } else if (normalizedAngleDifference > 0) {
              direction = "Turn right";
            } else if (normalizedAngleDifference < 0) {
              direction = "Turn left";
            } else {
              continue;
            }

            // Update the ref with the new direction
            prevDirectionRef.current = direction;

            let detail: string;

            if (direction === "Continue straight") {
              detail = "";
            } else {
              if (currentEdge.startNode.type === NodeType.HALL) {
                if (nextEdge.endNode.type === NodeType.HALL) {
                  detail = "";
                } else {
                  detail = ` towards ${nextEdge.endNode.shortName}`;
                }
              } else {
                if (nextEdge.endNode.type === NodeType.HALL) {
                  detail = ` at ${currentEdge.startNode.shortName}`;
                } else {
                  detail = "";
                }
              }
            }

            /*if (currentPathEdges[i + 2]) {
                                   const nextNextEdge = currentPathEdges[i + 2];
                                   const dx3 = nextNextEdge.endNode.x - nextNextEdge.startNode.x;
                                   const dy3 = nextNextEdge.endNode.y - nextNextEdge.startNode.y;
                                   const angle3 = Math.atan2(dy3, dx3);
                                   const angleDifferenceStraightCheck = angle3 - angle1;
                                   const normalizedAngleDifferenceStraightCheck = Math.atan2(Math.sin(angleDifferenceStraightCheck), Math.cos(angleDifferenceStraightCheck));
                                   if (nextNextEdge) {
                                       if(Math.abs(normalizedAngleDifferenceStraightCheck) < Math.PI / 20 ) {
                                           continue;
                                       }
                                   }
                               }*/

            directions.push(`${direction}${detail}`);
          }
        }
      }

      return directions;
    },
    [directionsCounter],
  );

  useEffect(() => {
    const newDirections: Array<string> = generateDirections(paths);
    setDirectionsText(newDirections);

    const currentNumPages = Math.ceil(newDirections.length / directionsPerPage);

    if (currentPage >= currentNumPages) {
      setCurrentPage(currentNumPages > 0 ? currentNumPages - 1 : 0);
    }
  }, [paths, generateDirections, currentPage]);

  if (editorMode !== EditorMode.disabled) {
    return <></>;
  }

  const directionsPerPage = 5;
  const numPages = Math.ceil(directionsText.length / directionsPerPage);
  const pagedDirections = directionsText.slice(
    currentPage * directionsPerPage,
    (currentPage + 1) * directionsPerPage,
  );

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      {startNode && endNode ? (
        <div className={`${styles.directionsContainer}`}>
          <div className={`${styles.directionsHeader}`}>
            <h5>Text Directions</h5>
            <IconButton onClick={() => setExpanded(!expanded)}>
              {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          </div>
          {expanded ? (
            <div>
              <div className={`${styles.directionsContent}`}>
                {pagedDirections.map((direction, i) => (
                  <div key={i} className={`${styles.directionsText}`}>
                    <p className={`${styles.stepNumber}`}>
                      <b>{i + 1 + currentPage * directionsPerPage}.</b>
                    </p>
                    <p>{direction}</p>
                  </div>
                ))}
              </div>
              <div className={`${styles.directionsFooter}`}>
                <p>
                  Page {currentPage + 1} of {numPages}
                </p>
                <div>
                  <IconButton onClick={handlePrev} disabled={currentPage == 0}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    disabled={currentPage + 1 == numPages}
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
