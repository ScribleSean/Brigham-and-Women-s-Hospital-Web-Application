import React, { useState } from "react";
import { Switch } from "@mui/material";
import { useMapContext } from "./MapContext.ts";
import { EditorMode } from "common/src/types/map_page_types.ts";
export default ToggleFixEdges;

function ToggleFixEdges() {
  const { editorMode } = useMapContext();

  const [fixEdges, setFixEdges] = useState(false);

  const handleToggle = () => {
    setFixEdges(!fixEdges);
  };

  if (editorMode === EditorMode.disabled) {
    return null;
  }

  return (
    <Switch
      sx={{
        position: "absolute",
        zIndex: 20,
        right: 30,
        top: 150,
      }}
      checked={fixEdges}
      onChange={handleToggle}
      color="primary"
    />
  );
}
