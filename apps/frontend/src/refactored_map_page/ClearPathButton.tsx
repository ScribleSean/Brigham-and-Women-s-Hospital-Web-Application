import React from "react";

import { Button } from "@mui/material";
import { useMapContext } from "./MapContext";
import { EditorMode } from "common/src/types/map_page_types.ts";

const ClearPathButton: React.FC = () => {
  const { setStartNode, setEndNode, editorMode } = useMapContext();

  const handleClick = () => {
    setStartNode(null);
    setEndNode(null);
  };

  if (editorMode !== EditorMode.disabled) {
    return null;
  }

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
        marginLeft: "2vw",
        marginTop: "34vh",
        width: "6vw",
        zIndex: 3,
        fontSize: "0.8rem",
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
