import { FloorSelectorProps } from "../../../backend/src/types/map_page_types.ts";
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

  const buttonStyle: CSSProperties = {
    padding: "2.5% 2.5%",
    fontSize: "20px",
    width: "20%",
    height: "70%",
    backgroundColor: "012D5A",
  };

  const formatButtonText = (text: string) => {
    console.log(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
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

      <input
        type="radio"
        className="btn-check"
        id="btn-check-second"
        name="floorSelection"
        onClick={() => updateFloor(FloorType.second)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-second"
        style={buttonStyle}
      >
        Floor 2
      </label>

      <input
        type="radio"
        className="btn-check"
        id="btn-check-third"
        name="floorSelection"
        onClick={() => updateFloor(FloorType.third)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-third"
        style={buttonStyle}
      >
        Floor 3
      </label>
    </form>
  );
}
