import { NodeType, Path, Edge } from "common/src/DataStructures.ts";
import React, { useCallback, useEffect, useState } from "react";
import { useMapContext } from "./MapContext.ts";
import { List, ListItem, ListSubheader, Typography } from "@mui/material";
import { EditorMode } from "common/src/types/map_page_types.ts";

export default TextDirections;

function TextDirections() {
  const { paths, startNode, endNode, directionsCounter, editorMode } =
    useMapContext();

  const [directionsText, setDirectionsText] = useState<Array<string>>([]);

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

            const detail = edge.startNode.longName
              ? ` on ${edge.startNode.longName}`
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
  }, [paths, generateDirections]);

  if (editorMode !== EditorMode.disabled) {
    return <></>;
  }

  return (
    <div>
      {startNode && endNode ? (
        <List
          subheader={
            <ListSubheader
              sx={{
                textAlign: "center",
                color: "#012D5A",
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "inter",
              }}
            >
              Directions
            </ListSubheader>
          }
          sx={{
            position: "absolute",
            height: "20vh",
            width: "20vw",
            backgroundColor: "background.paper",
            borderRadius: "1rem",
            bottom: 0,
            right: 0,
            marginBottom: "5vh",
            marginRight: "10vw",
            zIndex: 1,
            boxShadow: 5,
            overflow: "auto",
          }}
        >
          {directionsText.map((direction, i) => (
            <ListItem
              key={i}
              sx={{
                fontFamily: "inter",
                color: "black",
                backgroundColor: "lightgray",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontFamily: "inter",
                  marginRight: "1rem",
                  color: "#012D5A",
                }}
              >
                {i + 1}.
              </Typography>
              <Typography>{direction}</Typography>
            </ListItem>
          ))}
        </List>
      ) : null}
    </div>
  );
}
