import React, { useState } from "react";
import {
  Select,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  SvgIcon,
  SvgIconProps,
  Box,
} from "@mui/material";
import { useMapContext } from "./MapContext";
import { EditorMode } from "common/src/types/map_page_types";

function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

function ShowNodesEdgesDropDown() {
  const { setShowNodes, setShowEdges, editorMode } = useMapContext();
  const [selectedOption, setSelectedOption] = useState("showNone");

  if (editorMode == EditorMode.disabled) {
    return null;
  }
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedOption(value);

    switch (value) {
      case "showNone":
        setShowNodes(false);
        setShowEdges(false);
        break;
      case "showNodes":
        setShowNodes(true);
        setShowEdges(false);
        break;
      case "showEdges":
        setShowNodes(false);
        setShowEdges(true);
        break;
      case "showBoth":
        setShowNodes(true);
        setShowEdges(true);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl
      sx={{
        backgroundColor: "white",
        boxShadow: 7,
        borderRadius: "0.5rem",
        position: "absolute",
        display: "flex",
        width: "8vw",
        height: "5vh",
        marginTop: "10vh",
        marginLeft: "5vw",
        alignItems: "center",
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          marginTop: "0.5rem",
        }}
      >
        <Select
          variant="standard"
          value={selectedOption}
          onChange={handleChange}
          IconComponent={CustomArrowIcon}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            fontWeight: "bold",
            fontFamily: "inter",
            "&:before, &:after": {
              display: "none", // Remove underline
            },
            "& .MuiSelect-select": {
              "&:focus": {
                backgroundColor: "transparent", // Remove focus background color
              },
            },
          }}
        >
          <MenuItem value="showNone">Show None</MenuItem>
          <MenuItem value="showNodes">Show Nodes</MenuItem>
          <MenuItem value="showEdges">Show Edges</MenuItem>
          <MenuItem value="showBoth">Show Both</MenuItem>
        </Select>
      </Box>
    </FormControl>
  );
}

export default ShowNodesEdgesDropDown;
