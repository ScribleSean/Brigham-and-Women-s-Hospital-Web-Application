import React, { ReactNode, useState } from "react";
import {
  AccessibilityType,
  NodesByFloor,
} from "common/src/types/map_page_types.ts";
import { FloorType, Node, AlgorithmType } from "common/src/DataStructures.ts";
import MapContext from "./MapContext.ts";

interface MapProviderProps {
  children: ReactNode;
}

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);

  const [nodesByFloor, setNodesByFloor] = useState<NodesByFloor | null>(null);

  const [currentFloor, setCurrentFloor] = useState<FloorType>(FloorType.first);
  const [directionsCounter, setDirectionsCounter] = useState<number>(0);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType>(
    AlgorithmType._ASTAR,
  );
  const [selectedAccessibility, setSelectedAccessibility] =
    useState<AccessibilityType>(AccessibilityType.all);

  const [editorMode, setEditorMode] = useState<boolean>(false);
  const [disableZoomPanning, setDisableZoomPanning] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);

  const value = {
    startNode,
    setStartNode,
    endNode,
    setEndNode,

    nodesByFloor,
    setNodesByFloor,

    currentFloor,
    setCurrentFloor,
    directionsCounter,
    setDirectionsCounter,

    selectedAlgorithm,
    setSelectedAlgorithm,
    selectedAccessibility,
    setSelectedAccessibility,

    editorMode,
    setEditorMode,
    disableZoomPanning,
    setDisableZoomPanning,
    scale,
    setScale,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export default MapProvider;
