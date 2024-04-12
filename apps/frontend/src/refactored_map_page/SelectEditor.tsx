import React, { useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useMapContext } from "./MapContext"; // Adjust the import path as needed

function EditorSelector() {
  const { editorMode, setEditorMode } = useMapContext();
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseEnter = () => setHoverActive(true);
  const handleMouseLeave = () => setHoverActive(false);
  const handleOnClick = () => {
    setEditorMode(!editorMode);
    setHoverActive(false);
  };

  return (
    <ModeEditOutlineIcon
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        backgroundColor: "#ffffff", // White background
        color: editorMode ? "#F6BD39" : "#012D5A", // Blue pen
        borderRadius: "50%", // Circular shape
        width: 55, // Fixed size
        height: 55, // Fixed size
        marginLeft: "2.5vw",
        marginTop: "89vh",
        padding: "13px",
        boxShadow: 8,
        zIndex: 4,
        "&:hover": {
          backgroundColor: hoverActive ? "#D3E3FC" : "#ffffff", // Light blue on hover
        },
      }}
    ></ModeEditOutlineIcon>
  );
}

export default EditorSelector;
