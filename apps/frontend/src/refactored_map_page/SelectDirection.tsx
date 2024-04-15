import React from "react";
import { Button } from "@mui/material";
import { useMapContext } from "./MapContext"; // Adjust the import path as needed
import { EditorMode } from "common/src/types/map_page_types"; // Adjust the import path as needed

function DirectionsSelector() {
  const { directionsCounter, setDirectionsCounter, paths, editorMode } =
    useMapContext();

  const handleOnClick = () => {
    if (paths.length - 1 < directionsCounter + 1) {
      setDirectionsCounter(0);
    } else {
      setDirectionsCounter(directionsCounter + 1);
    }
  };

  if (editorMode !== EditorMode.disabled) {
    return null;
  }

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        position: "absolute",
        width: "6vw",
        backgroundColor: "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "21vw",
        marginTop: "32vh",
        ":hover": {
          backgroundColor: "#F6BD39!important",
        },
      }}
    >
      Next Floor
    </Button>
  );
}

export default DirectionsSelector;
