import React from "react";
import { FloorType } from "../../../backend/src/algorithms/DataStructures.ts";
import { Button } from "@mui/material";
import "../styles/FloorSelector.css";
import { FloorSelectorProps } from "./types/map_page_types.ts";

export function FloorSelector(props: FloorSelectorProps): React.JSX.Element {
  const updateFloor = props.updateFloorFunction;
  const getButtonColor = props.getButtonColor;
  const getButtonWidth = props.getButtonWidth;

  return (
    <>
      <div className={"btn-container"}>
        <Button
          onClick={() => updateFloor(FloorType.L1)}
          variant={"contained"}
          sx={{
            backgroundColor: getButtonColor(FloorType.L1),
            height: "6vh",
            width: getButtonWidth(FloorType.L1),
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          L1
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.L2)}
          variant={"contained"}
          sx={{
            backgroundColor: getButtonColor(FloorType.L2),
            height: "6vh",
            width: getButtonWidth(FloorType.L2),
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          L2
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.first)}
          variant={"contained"}
          sx={{
            backgroundColor: getButtonColor(FloorType.first),
            height: "6vh",
            width: getButtonWidth(FloorType.first),
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          Floor 1
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.second)}
          variant={"contained"}
          sx={{
            backgroundColor: getButtonColor(FloorType.second),
            height: "6vh",
            width: getButtonWidth(FloorType.second),
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          Floor 2
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.third)}
          variant={"contained"}
          sx={{
            backgroundColor: getButtonColor(FloorType.third),
            height: "6vh",
            width: getButtonWidth(FloorType.third),
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          Floor 3
        </Button>
      </div>
    </>
  );
}
