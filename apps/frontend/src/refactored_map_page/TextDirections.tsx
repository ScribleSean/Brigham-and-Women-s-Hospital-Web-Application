import { Path } from "common/src/DataStructures.ts";
import React, { useEffect, useState } from "react";
import { useMapContext } from "./MapContext.ts";
import { List, ListItem } from "@mui/material";

export default TextDirections;

function TextDirections() {
  const { paths } = useMapContext();

  const [directionsText, setDirectionsText] = useState<Array<string>>([]);

  useEffect(() => {
    const newDirections = generateDirections(paths);
    setDirectionsText(newDirections);
  }, [paths]);

  function generateDirections(paths: Array<Path>) {
    const directions: Array<string> = [];

    paths.forEach((path) => {
      if (path.edges) {
        path.edges.forEach((edge) => {
          const dx: number = edge.endNode.x - edge.startNode.x;
          const dy: number = edge.endNode.y - edge.startNode.y;
          let direction: string = "Continue";

          if (Math.abs(dx) > Math.abs(dy)) {
            direction = dx > 0 ? "Turn right" : "Turn left";
          } else {
            direction = dy > 0 ? "Go down" : "Go up";
          }

          const detail = edge.startNode.longName
            ? ` on ${edge.startNode.longName}`
            : "";
          directions.push(`${direction}${detail}`);
        });

        directions.push("End of this path");
        directions.push("");
      }
    });

    return directions;
  }

  return (
    <List
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
        overflow: "auto",
      }}
    >
      {directionsText.map((direction, i) => (
        <ListItem key={i}>{direction}</ListItem>
      ))}
    </List>
  );
}
