import React from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useMapContext } from "./MapContext.ts";
import { EditorMode } from "common/src/types/map_page_types.ts"; // Adjust the import path as needed
import HandymanIcon from "@mui/icons-material/Handyman";
import CommitIcon from "@mui/icons-material/Commit";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloseIcon from "@mui/icons-material/Close";

export default function EditorSelector() {
  const { setEditorMode } = useMapContext();
  // const [hoverActive, setHoverActive] = useState(false);
  //
  // const handleMouseEnter = () => {
  //   setHoverActive(true);
  // };
  //
  // const handleMouseLeave = () => {
  //   setHoverActive(false);
  // };
  //
  // const handleOnClick = () => {
  //   if (editorMode === EditorMode.disabled) {
  //     setEditorMode(EditorMode.editMode);
  //   } else {
  //     setEditorMode(EditorMode.disabled);
  //   }
  //   setHoverActive(false);
  // };

  const actions = [
    { icon: <EditIcon />, name: "Edit Mode", mode: EditorMode.editMode },
    { icon: <CommitIcon />, name: "Add Edges", mode: EditorMode.addEdges },
    {
      icon: <AddLocationAltIcon />,
      name: "Add Nodes",
      mode: EditorMode.addNodes,
    },
    { icon: <CloseIcon />, name: "Exit Edit Mode", mode: EditorMode.disabled },
  ];

  return (
    <SpeedDial
      ariaLabel="Edit Toolbox"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<HandymanIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => setEditorMode(action.mode)}
        />
      ))}
    </SpeedDial>

    // <IconButton
    //   onClick={handleOnClick}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   disableRipple
    //   sx={{
    //     position: "absolute",
    //     borderRadius: "50%", // Ensuring the button is circular
    //     width: "50px", // Adjust size as necessary
    //     height: "50px", // Adjust size as necessary
    //     backgroundColor:
    //       editorMode === EditorMode.disabled ? "#012D5A" : "#1665c0",
    //     color: "white",
    //     boxShadow: 8,
    //     zIndex: 4,
    //     marginLeft: "2vw",
    //     marginTop: "90vh",
    //     ":hover": {
    //       backgroundColor: hoverActive
    //         ? editorMode !== EditorMode.disabled
    //           ? "#012D5A!important"
    //           : "#1665c0!important"
    //         : editorMode !== EditorMode.disabled
    //           ? "#1665c0!important"
    //           : "#012D5A!important",
    //     },
    //   }}
    //   aria-label="Edit Map"
    // >
    //   <EditIcon />
    // </IconButton>
  );
}
