import { Path, Edge, NodeType } from "common/src/DataStructures.ts";
import React, { useCallback, useEffect, useState } from "react";
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

  const generateDirections = useCallback(
    (paths: Array<Path>) => {
      const directions: Array<string> = [];

      if (paths[directionsCounter] && paths[directionsCounter].edges) {
        paths[directionsCounter].edges.forEach((edge: Edge): void => {
          if (edge.startNode.type !== NodeType.HALL) {
            const dx: number = edge.endNode.x - edge.startNode.x;
            const dy: number = edge.endNode.y - edge.startNode.y;
            let direction: string;

            if (Math.abs(dx) > Math.abs(dy)) {
              direction = dx > 0 ? "Turn right" : "Turn left";
            } else {
              direction = dy > 0 ? "Go down" : "Go up";
            }

            const detail = edge.startNode.shortName
              ? ` on ${edge.startNode.shortName}`
              : "";
            directions.push(`${direction}${detail}`);
          }
        });
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
