import React from "react";
import { FloorType, Path } from "common/src/DataStructures.ts";
import { Button } from "@mui/material";
import "../map_page/FloorSelector.css";
import { useMapContext } from "./MapContext.ts";

export function FloorSelector(): React.JSX.Element {
  const {
    currentFloor,
    setCurrentFloor,
    directionsCounter,
    setDirectionsCounter,
    paths,
  } = useMapContext();

  const handleOnClick = (floor: FloorType) => {
    setCurrentFloor(floor);
    const floorPaths = new Array<number>();
    let counter = 0;

    //console.log("Path Floor " + paths[directionsCounter].edges[0].startNode.floor);
    //console.log("Current Floor " + currentFloor);

    if (
      paths.length > 0 &&
      paths[directionsCounter].edges[0].startNode.floor !== currentFloor
    ) {
      paths.forEach((path: Path) => {
        console.log(path.edges[0].startNode.floor);
        console.log(currentFloor);
        if (path.edges[0].startNode.floor === currentFloor) {
          counter++;
          floorPaths.push(Math.abs(counter - directionsCounter + counter / 5));
        }
      });
      if (floorPaths.length > 0) {
        setDirectionsCounter(Math.round(Math.min(...floorPaths)));
      } else {
        setCurrentFloor(paths[directionsCounter].edges[0].startNode.floor);
      }
    }
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
