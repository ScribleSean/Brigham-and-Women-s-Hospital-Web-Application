import React from "react";
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
  const {
    setShowNodes,
    setShowEdges,
    editorMode,
    selectedOption,
    setSelectedOption,
  } = useMapContext();

  if (editorMode == EditorMode.disabled) {
    return null;
  }
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedOption(value);

    switch (value) {
      case "showBasicNodes":
        setShowNodes(false);
        setShowEdges(false);
        break;
      case "showAllNodes":
        setShowNodes(true);
        setShowEdges(false);
        break;
      case "showAllEdges":
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
        borderRadius: "5px",
        height: "5vh",
        marginTop: "12vh",
        marginLeft: "2vw",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
      }}
    >
      <Box
        sx={{
          marginTop: "0.25rem",
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
            // fontFamily: "inter",
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
          <MenuItem value="showBasicNodes">Show Basic Nodes</MenuItem>
          <MenuItem value="showAllNodes">Show All Nodes</MenuItem>
          <MenuItem value="showAllEdges">Show All Edges</MenuItem>
          <MenuItem value="showBoth">Show Both</MenuItem>
        </Select>
      </Box>
    </FormControl>
  );
}

export default ShowNodesEdgesDropDown;
