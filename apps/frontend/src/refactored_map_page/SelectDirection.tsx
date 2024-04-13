import React from "react";
import { Button } from "@mui/material";
import { useMapContext } from "./MapContext.ts"; // Adjust the import path as needed

function DirectionsSelector() {
  const { directionsCounter, setDirectionsCounter } = useMapContext();

  const handleOnClick = () => {
    setDirectionsCounter(directionsCounter + 1);
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        position: "absolute",
        width: "7vw",
        backgroundColor: "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "7vw",
        marginTop: "32vh",
        ":hover": { backgroundColor: "#F6BD39!important" },
      }}
    >
      Next Floor
    </Button>
  );
}

export default DirectionsSelector;
