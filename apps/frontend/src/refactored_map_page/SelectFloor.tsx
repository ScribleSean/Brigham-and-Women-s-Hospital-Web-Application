import React from "react";
import { FloorType } from "common/src/DataStructures.ts";
import { Button } from "@mui/material";
import "../map_page/FloorSelector.css";
import { useMapContext } from "./MapContext.ts";

export function FloorSelector(): React.JSX.Element {
  const { currentFloor, setCurrentFloor } = useMapContext();

  const handleOnClick = (floor: FloorType) => {
    setCurrentFloor(floor);
  };

  return (
    <>
      <div className={"btn-container"}>
        <div>
          <Button
            onClick={() => handleOnClick(FloorType.L2)}
            variant={"contained"}
            disableRipple
            sx={{
              backgroundColor:
                currentFloor === FloorType.L2 ? "#012D5A" : "white",
              ":hover": {
                backgroundColor:
                  currentFloor === FloorType.L2 ? "#012D5A" : "#e0e0e0",
              },
              height: currentFloor === FloorType.L2 ? "6.5vh" : "5vh",
              width: "10%",
              color: currentFloor === FloorType.L2 ? "white" : "#012D5A",
              fontFamily: "inter",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textTransform: "capitalize",
              boxShadow:
                currentFloor === FloorType.L2
                  ? "inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
                  : 3,
              borderRadius: 2,
              transition: "height 0.15s ease",
            }}
          >
            L2
          </Button>
        </div>

        <Button
          onClick={() => handleOnClick(FloorType.L1)}
          variant={"contained"}
          disableRipple
          sx={{
            backgroundColor:
              currentFloor === FloorType.L1 ? "#012D5A" : "white",
            ":hover": {
              backgroundColor:
                currentFloor === FloorType.L1 ? "#012D5A" : "#e0e0e0",
            },
            height: currentFloor === FloorType.L1 ? "6.5vh" : "5vh",
            width: "10%",
            color: currentFloor === FloorType.L1 ? "white" : "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow:
              currentFloor === FloorType.L1
                ? "inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
                : 3,
            borderRadius: 2,
            transition: "height 0.05s ease",
          }}
        >
          L1
        </Button>
        <Button
          onClick={() => handleOnClick(FloorType.first)}
          variant={"contained"}
          disableRipple
          sx={{
            backgroundColor:
              currentFloor === FloorType.first ? "#012D5A" : "white",
            ":hover": {
              backgroundColor:
                currentFloor === FloorType.first ? "#012D5A" : "#e0e0e0",
            },
            height: currentFloor === FloorType.first ? "6.5vh" : "5vh",
            width: "10%",
            color: currentFloor === FloorType.first ? "white" : "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow:
              currentFloor === FloorType.first
                ? "inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
                : 3,
            borderRadius: 2,
            transition: "height 0.05s ease",
          }}
        >
          1
        </Button>
        <Button
          onClick={() => handleOnClick(FloorType.second)}
          variant={"contained"}
          disableRipple
          sx={{
            backgroundColor:
              currentFloor === FloorType.second ? "#012D5A" : "white",
            ":hover": {
              backgroundColor:
                currentFloor === FloorType.second ? "#012D5A" : "#e0e0e0",
            },
            height: currentFloor === FloorType.second ? "6.5vh" : "5vh",
            width: "10%",
            color: currentFloor === FloorType.second ? "white" : "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow:
              currentFloor === FloorType.second
                ? "inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
                : 3,
            borderRadius: 2,
            transition: "height 0.05s ease",
          }}
        >
          2
        </Button>
        <Button
          onClick={() => handleOnClick(FloorType.third)}
          variant={"contained"}
          disableRipple
          sx={{
            backgroundColor:
              currentFloor === FloorType.third ? "#012D5A" : "white",
            ":hover": {
              backgroundColor:
                currentFloor === FloorType.third ? "#012D5A" : "#e0e0e0",
            },
            height: currentFloor === FloorType.third ? "6.5vh" : "5vh",
            width: "10%",
            color: currentFloor === FloorType.third ? "white" : "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow:
              currentFloor === FloorType.third
                ? "inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
                : 3,
            borderRadius: 2,
            transition: "height 0.05s ease",
          }}
        >
          3
        </Button>
      </div>
    </>
  );
}

export default FloorSelector;
