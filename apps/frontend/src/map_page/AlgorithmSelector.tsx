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
import { AlgorithmType } from "../../../backend/src/algorithms/data_structures/AlgorithmType.ts";
import { AlgorithmSelectorProps } from "./types/map_page_types.ts";

function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

export function AlgorithmSelector(props: AlgorithmSelectorProps) {
  const handleChange = (event: SelectChangeEvent<AlgorithmType>) => {
    props.updateAlgorithmFunction(event.target.value as AlgorithmType);
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
          marginRight: "29rem",
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
            value={props.currentAlgorithm}
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
            <MenuItem
              value={AlgorithmType._BFS}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              BFS
            </MenuItem>
            <MenuItem
              value={AlgorithmType._DFS}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              DFS
            </MenuItem>
            <MenuItem
              value={AlgorithmType._Dijkstra}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              Dijkstra's
            </MenuItem>
            <MenuItem
              value={AlgorithmType._ASTAR}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              ASTAR
            </MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
