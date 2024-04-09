import React, { useState } from "react";
import { EditorProps } from "./types/map_page_types.ts";
import { Button } from "@mui/material";

export default Editor;

function Editor(props: EditorProps) {
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseEnter = () => {
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };
  const handleOnClick = () => {
    props.changeEditorMode(props.currentEditorMode);
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
        backgroundColor: props.currentEditorMode ? "#F6BD39" : "#012D5A",
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
            ? props.currentEditorMode
              ? "#012D5A!important"
              : "#F6BD39!important"
            : props.currentEditorMode
              ? "#F6BD39!important"
              : "#012D5A!important",
        },
      }}
    >
      Edit Map
    </Button>
  );
}
