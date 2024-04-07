import React from "react";
import { FormControl, Select, Box, MenuItem, SvgIcon } from "@mui/material";
import { SvgIconProps } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

export function AlgorithmSelector() {
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedAlgorithm(event.target.value);
  };

  // Function to render the value of the select
  const renderValue = (value: string) => {
    if (value === "") {
      return "Algorithm";
    }
    return value;
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
          width: "8vw",
          height: "5vh",
          marginTop: "1.5rem",
          marginRight: "1.7rem",
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
            paddingTop: "0.6rem",
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
            displayEmpty
            renderValue={renderValue}
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
              value={"BFS"}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              BFS
            </MenuItem>
            <MenuItem
              value={"DFS"}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              DFS
            </MenuItem>
            <MenuItem
              value={"Dijkstra's"}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              Dijkstra's
            </MenuItem>
            <MenuItem
              value={"A*"}
              sx={{
                fontWeight: "bold",
                fontFamily: "inter",
              }}
            >
              A*
            </MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
