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
import { useMapContext } from "./MapContext";
import { AlgorithmType } from "../../../backend/src/algorithms/data_structures/AlgorithmType.ts";
function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

export function AlgorithmSelector() {
  const { selectedAlgorithm, setSelectedAlgorithm } = useMapContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedAlgorithm(event.target.value as AlgorithmType);
  };

  return (
    <Box>
      <FormControl
        sx={{
          backgroundColor: "white",
          boxShadow: 7,
          borderRadius: "4rem",
          position: "absolute",
          display: "flex",
          width: "12vw",
          height: "5vh",
          marginTop: "1.5rem",
          marginRight: "31.5vw",
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
            <MenuItem value={"_BFS"}>BFS</MenuItem>
            <MenuItem value={"_DFS"}>DFS</MenuItem>
            <MenuItem value={"_Dijkstra"}>Dijkstra's</MenuItem>
            <MenuItem value={"_ASTAR"}>ASTAR</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
