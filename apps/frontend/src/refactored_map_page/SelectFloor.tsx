import React from "react";
import { FloorType } from "common/src/DataStructures.ts";
import { Button } from "@mui/material";
import "../map_page/FloorSelector.css";
import { useMapContext } from "./MapContext.ts";

export function FloorSelector(): React.JSX.Element {
  const { setCurrentFloor } = useMapContext();

  return (
    <>
      <div className={"btn-container"}>
        <div>
          <Button
            onClick={() => setCurrentFloor(FloorType.L2)}
            variant={"contained"}
            sx={{
              backgroundColor: "blue",
              height: "6vh",
              width: "10%",
              color: "#012D5A",
              fontFamily: "inter",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textTransform: "capitalize",
              boxShadow: 3,
              borderRadius: 2,
              transition: "width 0.3s ease",
            }}
          >
            L2
          </Button>
        </div>

        <Button
          onClick={() => setCurrentFloor(FloorType.L1)}
          variant={"contained"}
          sx={{
            backgroundColor: "blue",
            height: "6vh",
            width: "10%",
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
            transition: "width 0.3s ease",
          }}
        >
          L1
        </Button>
        <Button
          onClick={() => setCurrentFloor(FloorType.first)}
          variant={"contained"}
          sx={{
            backgroundColor: "blue",
            height: "6vh",
            width: "10%",
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
            transition: "width 0.3s ease",
          }}
        >
          1
        </Button>
        <Button
          onClick={() => setCurrentFloor(FloorType.second)}
          variant={"contained"}
          sx={{
            backgroundColor: "blue",
            height: "6vh",
            width: "10%",
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
            transition: "width 0.3s ease",
          }}
        >
          2
        </Button>
        <Button
          onClick={() => setCurrentFloor(FloorType.third)}
          variant={"contained"}
          sx={{
            backgroundColor: "blue",
            height: "6vh",
            width: "10%",
            color: "#012D5A",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "capitalize",
            boxShadow: 3,
            borderRadius: 2,
            transition: "width 0.3s ease",
          }}
        >
          3
        </Button>
      </div>
    </>
  );
}

export default FloorSelector;
