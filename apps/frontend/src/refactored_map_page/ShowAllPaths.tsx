import React, { useState } from "react";
import { Button } from "@mui/material";
import { useMapContext } from "./MapContext";
import { EditorMode } from "common/src/types/map_page_types";

function ShowPathsButton() {
  const { showPaths, setShowPaths, editorMode } = useMapContext();

  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseEnter = () => {
    setHoverActive(true);
  };

  const handleMouseLeave = () => {
    setHoverActive(false);
  };

  const handleOnClick = () => {
    setShowPaths(!showPaths);
    setHoverActive(false);
  };

  if (editorMode !== EditorMode.disabled) {
    return null;
  }

  return (
    <Button
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        width: "6vw",
        backgroundColor: showPaths ? "#F6BD39" : "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "14vw",
        marginTop: "32vh",
        ":hover": {
          backgroundColor: hoverActive
            ? showPaths
              ? "#012D5A!important"
              : "#F6BD39!important"
            : showPaths
              ? "#F6BD39!important"
              : "#012D5A!important",
        },
      }}
    >
      Show Paths
    </Button>
  );
}

export default ShowPathsButton;
