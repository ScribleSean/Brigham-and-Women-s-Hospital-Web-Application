import { Path, Edge, NodeType } from "common/src/DataStructures.ts";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { useMapContext } from "./MapContext.ts";
import { List, ListItem, ListSubheader, Typography } from "@mui/material";
import { EditorMode } from "common/src/types/map_page_types.ts";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";

export default TextDirections;

function TextDirections() {
  const { paths, startNode, endNode, directionsCounter, editorMode } =
    useMapContext();

  const [directionsText, setDirectionsText] = useState<Array<string>>([]);
  const [currentPage, setCurrentPage] = useState(0);

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

            if (
              Math.abs(normalizedAngleDifference) < Math.PI / 20 &&
              prevDirectionRef.current !== "Continue straight"
            ) {
              direction = "Continue straight";
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

  const directionsPerPage = 3;
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
        <div>
          <List
            subheader={
              <ListSubheader
                sx={{
                  color: "#012D5A",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  fontFamily: "inter",
                  textAlign: "center",
                }}
              >
                Directions
              </ListSubheader>
            }
            sx={{
              position: "absolute",
              height: "28vh",
              width: "24.5vw",
              backgroundColor: "background.paper",
              borderRadius: "1rem",
              bottom: 0,
              right: 0,
              marginBottom: "3vh",
              marginRight: "9vw",
              zIndex: 1,
              boxShadow: 5,
              overflow: "hidden",
            }}
          >
            {pagedDirections.map((direction, i) => (
              <ListItem
                key={i}
                sx={{
                  color: "black",
                  backgroundColor: "#e0e0e0",
                  fontFamily: "inter",
                }}
              >
                <Typography
                  sx={{
                    marginRight: "1rem",
                    color: "#012D5A",
                    fontFamily: "inter",
                    fontWeight: "bold",
                  }}
                >
                  {i + 1 + currentPage * directionsPerPage}.
                </Typography>
                <Typography>{direction}</Typography>
              </ListItem>
            ))}
            <ListItem
              sx={{
                color: "black",
                fontSize: "0.8rem",
                textAlign: "right!important",
              }}
            >
              Page {currentPage + 1} of {numPages}
            </ListItem>
          </List>
          <ForwardRoundedIcon
            onClick={handleNext}
            sx={{
              position: "absolute",
              color: "#012D5A!important",
              fontSize: "3rem",
              bottom: 0,
              right: 0,
              marginBottom: "24.5vh",
              marginRight: "9vw",
              zIndex: 3,
              ":hover": {
                cursor: "pointer",
                color: "#2196F3!important",
              },
            }}
          />

          <ForwardRoundedIcon
            onClick={handlePrev}
            sx={{
              position: "absolute",
              color: "#012D5A!important",
              fontSize: "3rem",
              bottom: 0,
              right: 0,
              marginBottom: "24.5vh",
              marginRight: "11.5vw",
              zIndex: 3,
              transform: "rotate(180deg)",
              ":hover": {
                cursor: "pointer",
                color: "#2196F3!important",
              },
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
