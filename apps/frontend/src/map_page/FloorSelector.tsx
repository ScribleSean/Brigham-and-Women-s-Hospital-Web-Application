import { FloorSelectorProps } from "./types/map_page_types.ts";
import React from "react";
import { FloorType } from "../../../backend/src/algorithms/DataStructures.ts";
import { Button } from "@mui/material";
import "../styles/FloorSelector.css";

export function FloorSelector(props: FloorSelectorProps): React.JSX.Element {
  const { updateFloor } = props;

  return (
    <>
      <div className={"btn-container"}>
        <Button
          onClick={() => updateFloor(FloorType.L1)}
          variant={"contained"}
          className={"floor-btn"}
        >
          L1
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.L2)}
          variant={"contained"}
          className={"floor-btn"}
        >
          L2
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.first)}
          variant={"contained"}
          className={"floor-btn"}
        >
          Floor 1
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.second)}
          variant={"contained"}
          className={"floor-btn"}
        >
          Floor 2
        </Button>
        <Button
          onClick={() => updateFloor(FloorType.third)}
          variant={"contained"}
          className={"floor-btn"}
        >
          Floor 3
        </Button>
      </div>
    </>
  );
}
