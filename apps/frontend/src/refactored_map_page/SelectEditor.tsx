import React, { useState } from "react";
import { Button } from "@mui/material";
import { useMapContext } from "./MapContext.ts"; // Adjust the import path as needed

function EditorSelector() {
  const { editorMode, setEditorMode } = useMapContext();
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseEnter = () => {
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };

  const handleOnClick = () => {
    setEditorMode(!editorMode);
    setHoverActive(false);
  };

  return (
    <Button
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        width: "7vw",
        backgroundColor: editorMode ? "#F6BD39" : "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "10vw",
        marginTop: "22vh",
        ":hover": {
          backgroundColor: hoverActive
            ? editorMode
              ? "#012D5A!important"
              : "#F6BD39!important"
            : editorMode
              ? "#F6BD39!important"
              : "#012D5A!important",
        },
      }}
    >
      Edit Map
    </Button>
  );
}

export default EditorSelector;
