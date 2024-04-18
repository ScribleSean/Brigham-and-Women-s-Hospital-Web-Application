import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useMapContext } from "./MapContext.ts";
import { EditorMode } from "common/src/types/map_page_types.ts"; // Adjust the import path as needed

export default function EditorSelector() {
  const { editorMode, setEditorMode } = useMapContext();
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseEnter = () => {
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };

  const handleOnClick = () => {
    if (editorMode === EditorMode.disabled) {
      setEditorMode(EditorMode.addEdges);
    } else {
      setEditorMode(EditorMode.disabled);
    }
    setHoverActive(false);
  };

  return (
    <IconButton
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disableRipple
      sx={{
        position: "absolute",
        borderRadius: "50%", // Ensuring the button is circular
        width: "50px", // Adjust size as necessary
        height: "50px", // Adjust size as necessary
        backgroundColor:
          editorMode === EditorMode.disabled ? "#012D5A" : "#1665c0",
        color: "white",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "2vw",
        marginTop: "90vh",
        ":hover": {
          backgroundColor: hoverActive
            ? editorMode !== EditorMode.disabled
              ? "#012D5A!important"
              : "#1665c0!important"
            : editorMode !== EditorMode.disabled
              ? "#1665c0!important"
              : "#012D5A!important",
        },
      }}
      aria-label="Edit Map"
    >
      <EditIcon />
    </IconButton>
  );
}
