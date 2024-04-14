import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import LocationOffIcon from "@mui/icons-material/LocationOff";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { useMapContext } from "./MapContext";
import { EditorMode } from "common/src/types/map_page_types";

const actions = [
  {
    icon: <AirlineStopsRoundedIcon />,
    name: "Add connections",
    mode: EditorMode.addEdges,
  },
  {
    icon: <AddLocationAltRoundedIcon />,
    name: "Add locations",
    mode: EditorMode.addNodes,
  },
  {
    icon: <LocationOffIcon />,
    name: "Delete locations",
    mode: EditorMode.deleteNodes,
  },
  {
    icon: <CommitRoundedIcon />,
    name: "Delete connections",
    mode: EditorMode.deleteEdges,
  },
  { icon: <CancelIcon />, name: "Exit edit mode", mode: EditorMode.disabled },
];

export default function SpeedDialTooltipOpen() {
  const { setEditorMode } = useMapContext();
  const [open, setOpen] = React.useState(false);
  const [currentIcon, setCurrentIcon] = React.useState(<ModeEditOutlineIcon />);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleIconChange = (icon: React.ReactElement, mode: EditorMode) => {
    setCurrentIcon(icon);
    setEditorMode(mode);
    handleClose();
  };

  const handleReset = () => {
    setCurrentIcon(<ModeEditOutlineIcon />);
    setEditorMode(EditorMode.disabled);
    handleClose();
  };

  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", bottom: 16, left: 16, zIndex: 10 }}
    >
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 0, left: 0 }}
        direction="up"
        icon={currentIcon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              if (action.mode === EditorMode.disabled) {
                handleReset();
              } else {
                handleIconChange(action.icon, action.mode);
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
