import React from "react";

import { Button } from "@mui/material";
import { useMapContext } from "./MapContext";

const ClearPathButton: React.FC = () => {
  const { setStartNode, setEndNode } = useMapContext();

  const handleClick = () => {
    setStartNode(null);
    setEndNode(null);
  };

  return (
    <Button
      color="primary"
      onClick={handleClick}
      sx={{
        position: "absolute",
        backgroundColor: "#C62828",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        marginLeft: "7vw",
        marginTop: "32vh",
        width: "6vw",
        zIndex: 3,
        ":hover": {
          backgroundColor: "#9B2626",
        },
      }}
    >
      Clear Path
    </Button>
  );
};

export default ClearPathButton;
