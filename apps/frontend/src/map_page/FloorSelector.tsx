import { FloorSelectorProps } from "./types/map_page_types.ts";
import React, { CSSProperties } from "react";
import { FloorType } from "../../../backend/src/algorithms/DataStructures.ts";
import { Button } from "@mui/material";

export function FloorSelector(props: FloorSelectorProps): React.JSX.Element {
  const { updateFloor } = props;

  const formStyle: CSSProperties = {
    paddingTop: "5%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    width: "100%",
  };

  const formatButtonText = (text: string) => {
    //console.log(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <form style={formStyle}>
      <Button
        sx={{
          borderColor: "black",
          backgroundColor: "white",
          font: "Inter",
          color: "black",
          boxShadow: 3,
          width: 200,
        }}
        type="button"
        className="btn-check"
        id="btn-check-l2"
        onClick={() => updateFloor(FloorType.L2)}
      >
        L2
      </Button>

      <Button
        sx={{
          borderColor: "black",
          backgroundColor: "white",
          font: "Inter",
          color: "black",
          boxShadow: 3,
          width: 200,
        }}
        type="button"
        className="btn-check"
        id="btn-check-l1"
        onClick={() => updateFloor(FloorType.L1)}
      >
        L1
      </Button>

      <Button
        sx={{
          borderColor: "black",
          backgroundColor: "white",
          font: "Inter",
          color: "black",
          boxShadow: 3,
          width: 200,
        }}
        type="button"
        className="btn-check"
        id="btn-check-first"
        onClick={() => updateFloor(FloorType.first)}
      >
        {formatButtonText("Floor 1")}
      </Button>

      <Button
        sx={{
          borderColor: "black",
          backgroundColor: "white",
          font: "Inter",
          color: "black",
          boxShadow: 3,
          width: 200,
        }}
        type="button"
        className="btn-check"
        id="btn-check-second"
        onClick={() => updateFloor(FloorType.second)}
      >
        {formatButtonText("Floor 2")}
      </Button>

      <Button
        sx={{
          borderColor: "black",
          backgroundColor: "white",
          font: "Inter",
          color: "black",
          boxShadow: 3,
          width: 200,
        }}
        type="button"
        className="btn-check"
        id="btn-check-third"
        onClick={() => updateFloor(FloorType.third)}
      >
        {formatButtonText("Floor 3")}
      </Button>
    </form>
  );
}
