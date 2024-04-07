import "./MapWrapper.css";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
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

function MapWrapper() {
  const [floor, setFloor] = useState<FloorType>(FloorType.first);
  const [selectedFloor, setSelectedFloor] = useState<FloorType>(
    FloorType.first,
  );
  const [isDraggingNode, setIsDraggingNode] = useState<boolean>(false);

  const zoomWrapperProps = {
    disablePadding: true,
    minScale: 1,
    initialScale: 1,
    centerOnInit: false,
    limitToBounds: true,
    doubleClick: { disabled: false },
    disabled: isDraggingNode,
  };

  const updateFloor = (floor: FloorType) => {
    setSelectedFloor(floor);
    setFloor(floor);
  };

  const getButtonColor = (floor: FloorType): string => {
    if (selectedFloor === floor) {
      return "#F6BD39";
    } else {
      return "white";
    }
  };

  const getButtonWidth = (floor: FloorType): string => {
    if (selectedFloor === floor) {
      return "14vw";
    } else {
      return "10vw";
    }
  };

  const floorSelectorProps: FloorSelectorProps = {
    updateFloorFunction: updateFloor,
    getButtonColor: getButtonColor,
    getButtonWidth: getButtonWidth,
  };

  const selectIsDraggingNodes = (isDragging: boolean) => {
    setIsDraggingNode(isDragging);
  };

  const [scale, setScale] = useState<number>(1);

  function handleScaleChange(event: ReactZoomPanPinchRef) {
    setScale(event.instance.transformState.scale);
  }

  const pathGrapherProps: PathGrapherProps = {
    floor: floor,
    draggingNodes: selectIsDraggingNodes,
    scale: scale,
  };

  return (
    <div className="col-10 map-wrapper">
      <TransformWrapper
        {...zoomWrapperProps}
        onTransformed={(e) => handleScaleChange(e)}
      >
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
