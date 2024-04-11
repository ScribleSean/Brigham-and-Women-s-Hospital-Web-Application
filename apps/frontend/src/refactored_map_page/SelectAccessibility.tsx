import React from "react";
import { FormControl, Select, Box, MenuItem, SvgIcon } from "@mui/material";
import { SvgIconProps } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMapContext } from "./MapContext.ts";
import { AccessibilityType } from "../map_page/types/map_page_types.ts";

function CustomArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <image href="dropDownArrow.png" height="1.5rem" width="1.5rem" />
    </SvgIcon>
  );
}

export function AccessibilitySelector() {
  const { selectedAccessibility, setSelectedAccessibility } = useMapContext();

  const handleChange = (event: SelectChangeEvent<AccessibilityType>) => {
    setSelectedAccessibility(event.target.value as AccessibilityType);
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
          width: "15vw",
          height: "5vh",
          marginTop: "1.5rem",
          marginRight: "15vw",
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
            src="accessibility.png"
            alt=""
            style={{
              height: "1.7rem",
              width: "2rem",
              marginRight: "-0.1rem",
            }}
          />
          <Select
            variant="standard"
            value={selectedAccessibility}
            onChange={handleChange}
            displayEmpty
            IconComponent={CustomArrowIcon}
            sx={{
              fontWeight: "bold",
              fontFamily: "inter",
              fontSize: "14px",
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
            {/* You might need to adjust these values to match your `AccessibilityType` */}
            <MenuItem value="all">All Accessible</MenuItem>
            <MenuItem value="wheelchair">Wheelchair Accessible</MenuItem>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}
