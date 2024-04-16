import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SvgIcon,
  SvgIconProps,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMapContext } from "./MapContext.ts";
import { AlgorithmType } from "common/src/DataStructures.ts";
import { EditorMode } from "common/src/types/map_page_types.ts";
function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

function AlgorithmSelector() {
  const {
    selectedAlgorithm,
    setSelectedAlgorithm,
    setDirectionsCounter,
    editorMode,
  } = useMapContext();

  if (editorMode !== EditorMode.disabled) {
    return null;
  }

  const handleChange = (event: SelectChangeEvent<AlgorithmType>) => {
    setSelectedAlgorithm(event.target.value as AlgorithmType);
    setDirectionsCounter(0);
  };

  return (
    <Box>
      <FormControl
        sx={{
          backgroundColor: "white",
          boxShadow: 7,
          borderRadius: "0.5rem",
          position: "absolute",
          display: "flex",
          width: "12vw",
          height: "5vh",
          marginTop: "14vh",
          marginRight: "17vw",
          alignItems: "center",
          zIndex: 3,
          right: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "0.6rem",
            paddingTop: "0.3rem",
          }}
        >
          <img
            src="algorithm.png"
            alt=""
            style={{
              height: "1.7rem",
              width: "2.92rem",
              marginRight: "-0.5rem",
            }}
          />
          <Select
            variant="standard"
            value={selectedAlgorithm}
            onChange={handleChange}
            IconComponent={CustomArrowIcon}
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
            <MenuItem value={AlgorithmType._BFS}>BFS</MenuItem>
            <MenuItem value={AlgorithmType._DFS}>DFS</MenuItem>
            <MenuItem value={AlgorithmType._Dijkstra}>Dijkstra's</MenuItem>
            <MenuItem value={AlgorithmType._ASTAR}>ASTAR</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}

export default AlgorithmSelector;
