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
  AccessibilitySelectorProps,
  AccessibilityType,
  AlgorithmSelectorProps,
  DirectionsProps,
  EditorProps,
  FloorSelectorProps,
  LocationSelectorProps,
  PathGrapherProps,
} from "./types/map_page_types.ts";
import { AlgorithmSelector } from "./AlgorithmSelector.tsx";
import { AlgorithmType } from "../../../backend/src/algorithms/data_structures/AlgorithmType.ts";
import { AccessibilitySelector } from "./AccessibilitySelector.tsx";
import { LocationSelector } from "./LocationSelector.tsx";
import Directions from "./Directions.tsx";
import Editor from "./Editor.tsx";

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
  const [selectedAccessibility, setSelectedAccessibility] =
    useState<AccessibilityType>(AccessibilityType.all);
  const [scale, setScale] = useState<number>(1);
  const [directionsCounter, setDirectionsCounter] = useState<number>(0);
  const [startNodeIDSelector, setStartNodeIDSelector] = useState<string | null>(
    null,
  );
  const [endNodeIDSelector, setEndNodeIDSelector] = useState<string | null>(
    null,
  );

  const [editorMode, setEditorMode] = useState<boolean>(false);

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

  const changeEditorMode = (editing: boolean) => {
    setEditorMode(!editing);
  };

  const selectIsDraggingNodes = (isDragging: boolean) => {
    setIsDraggingNode(isDragging);
  };

  function handleScaleChange(event: ReactZoomPanPinchRef) {
    setScale(event.instance.transformState.scale);
  }

  const updateAlgorithm = (algorithm: AlgorithmType) => {
    setSelectedAlgorithm(algorithm);
  };

  const updateAccessibility = (accessibility: AccessibilityType) => {
    setSelectedAccessibility(accessibility);
  };

  const updateStartNodeIDSelector = (ID1: string) => {
    setStartNodeIDSelector(ID1);
  };

  const updateEndNodeIDSelector = (ID2: string) => {
    setEndNodeIDSelector(ID2);
  };

  const resetDirections = () => {
    setDirectionsCounter(0);
  };

  const triggerNextDirection = (currentDirectionNumber: number) => {
    setDirectionsCounter(currentDirectionNumber + 1);
  };

  const zoomWrapperProps = {
    disablePadding: true,
    minScale: 1,
    initialScale: 1,
    centerOnInit: false,
    limitToBounds: true,
    doubleClick: { disabled: false },
    disabled: isDraggingNode,
  };

  const pathGrapherProps: PathGrapherProps = {
    floor: floor,
    draggingNodes: selectIsDraggingNodes,
    scale: scale,
    algorithm: selectedAlgorithm,
    accessibility: selectedAccessibility,
    locationSelectorStartNodeID: startNodeIDSelector,
    locationSelectorEndNodeID: endNodeIDSelector,
    currentDirectionsCounter: directionsCounter,
    resetDirections: resetDirections,
  };

  const directionsProps: DirectionsProps = {
    triggerNextDirection: triggerNextDirection,
    currentDirectionsCounter: directionsCounter,
  };

  const locationSelectorProps: LocationSelectorProps = {
    updateStartNodeID: updateStartNodeIDSelector,
    updateEndNodeID: updateEndNodeIDSelector,
  };

  const accessibilitySelectorProps: AccessibilitySelectorProps = {
    updateAccessibility: updateAccessibility,
    currentAccessibility: selectedAccessibility,
  };

  const algorithmSelectorProps: AlgorithmSelectorProps = {
    updateAlgorithmFunction: updateAlgorithm,
    currentAlgorithm: selectedAlgorithm,
  };

  const floorSelectorProps: FloorSelectorProps = {
    updateFloorFunction: updateFloor,
    getButtonColor: getButtonColor,
    getButtonWidth: getButtonWidth,
  };

  const editorProps: EditorProps = {
    changeEditorMode: changeEditorMode,
    currentEditorMode: editorMode,
  };

  return (
    <div className="col-10 map-wrapper">
      <TransformWrapper
        {...zoomWrapperProps}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <div style={mapDiv}>
          <Directions {...directionsProps}></Directions>
          <Editor {...editorProps}></Editor>
          <AlgorithmSelector {...algorithmSelectorProps}></AlgorithmSelector>
          <AccessibilitySelector
            {...accessibilitySelectorProps}
          ></AccessibilitySelector>
          <LocationSelector {...locationSelectorProps}></LocationSelector>
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
