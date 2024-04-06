import "./MapWrapper.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PathGrapher from "./PathGrapher.tsx";
import { FloorSelector } from "./FloorSelector.tsx";
import { FloorType } from "../../../backend/src/algorithms/data_structures/FloorType.ts";
import React, { CSSProperties, useState } from "react";
import {
  FloorSelectorProps,
  PathGrapherProps,
} from "./types/map_page_types.ts";

const mapDiv: CSSProperties = {
  height: "100%",
  maxWidth: "80vw",
  position: "relative",
};

const zoomWrapperProps = {
  disablePadding: true,
  minScale: 1,
  initialScale: 1,
  centerOnInit: false,
  limitToBounds: true,
};

function MapWrapper() {
  const [floor, setFloor] = useState<FloorType>(FloorType.first);

  const updateFloor = (floor: FloorType) => {
    setFloor(floor);
  };

  const floorSelectorProps: FloorSelectorProps = {
    updateFloorFunction: updateFloor,
  };

  const pathGrapherProps: PathGrapherProps = {
    floor: floor,
  };

  return (
    <div className="col-10 map-wrapper">
      <TransformWrapper {...zoomWrapperProps}>
        <div style={mapDiv}>
          <FloorSelector {...floorSelectorProps}></FloorSelector>
          <TransformComponent>
            <PathGrapher {...pathGrapherProps}></PathGrapher>
          </TransformComponent>
        </div>
      </TransformWrapper>
    </div>
  );
}

export default MapWrapper;
