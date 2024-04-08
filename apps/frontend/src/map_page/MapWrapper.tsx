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
  AlgorithmSelectorProps,
  FloorSelectorProps,
  PathGrapherProps,
} from "./types/map_page_types.ts";
import { AlgorithmSelector } from "./AlgorithmSelector.tsx";
import { AlgorithmType } from "../../../backend/src/algorithms/data_structures/AlgorithmType.ts";

const mapDiv: CSSProperties = {
  height: "100%",
  maxWidth: "80vw",
};

function MapWrapper() {
  const [floor, setFloor] = useState<FloorType>(FloorType.first);
  const [selectedFloor, setSelectedFloor] = useState<FloorType>(
    FloorType.first,
  );
  const [isDraggingNode, setIsDraggingNode] = useState<boolean>(false);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    React.useState<AlgorithmType>(AlgorithmType._ASTAR);
  const [scale, setScale] = useState<number>(1);

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

  function handleScaleChange(event: ReactZoomPanPinchRef) {
    setScale(event.instance.transformState.scale);
  }

  const pathGrapherProps: PathGrapherProps = {
    floor: floor,
    draggingNodes: selectIsDraggingNodes,
    scale: scale,
    algorithm: selectedAlgorithm,
  };

  const updateAlgorithm = (algorithm: AlgorithmType) => {
    setSelectedAlgorithm(algorithm);
  };

  const algorithmSelectorProps: AlgorithmSelectorProps = {
    updateAlgorithmFunction: updateAlgorithm,
    currentAlgorithm: selectedAlgorithm,
  };

  return (
    <div className="col-10 map-wrapper">
      <TransformWrapper
        {...zoomWrapperProps}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <div style={mapDiv}>
          <AlgorithmSelector {...algorithmSelectorProps}></AlgorithmSelector>
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
