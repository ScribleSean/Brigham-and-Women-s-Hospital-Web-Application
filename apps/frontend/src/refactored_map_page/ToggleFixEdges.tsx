import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useMapContext } from "./MapContext.ts";
import { EditorMode } from "common/src/types/map_page_types.ts";
import "../styles/ToggleFixEdges.css";
export default ToggleFixEdges;

function ToggleFixEdges() {
  const { editorMode, fixingEdges, setFixingEdges } = useMapContext();

  const handleToggle = () => {
    setFixingEdges(!fixingEdges);
  };

  if (editorMode === EditorMode.disabled) {
    return null;
  }

  return (
    <FormControlLabel
      label="Auto Repair Edges"
      labelPlacement="start"
      control={
        <Switch
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: fixingEdges ? "#1976d2" : "#012D5A",
            },
          }}
          checked={fixingEdges}
          onChange={handleToggle}
        />
      }
      sx={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        boxShadow: 7,
        justifyContent: "center",
        padding: "0.5rem",
      }}
    />
  );
}
