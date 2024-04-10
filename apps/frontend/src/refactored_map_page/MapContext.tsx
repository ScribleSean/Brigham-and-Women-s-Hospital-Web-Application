// MapContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";
import { FloorType } from "../../../backend/src/algorithms/data_structures/FloorType";
import { AlgorithmType } from "../../../backend/src/algorithms/data_structures/AlgorithmType";
import {
  AccessibilityType,
  NodesByFloor,
} from "../map_page/types/map_page_types.ts";
import { Path } from "../../../backend/src/algorithms/DataStructures.ts";

interface MapContextType {
  startNode: Node | null;
  endNode: Node | null;

  path: Path | null;
  nodesByFloor: NodesByFloor | null;

  currentFloor: FloorType;
  directionsCounter: number;

  selectedAlgorithm: AlgorithmType;
  selectedAccessibility: AccessibilityType;

  editorMode: boolean;
  disableZoomPanning: boolean;
  scale: number;

  //---------------------------------------
  setStartNode: (node: Node) => void;
  setEndNode: (node: Node) => void;

  setPath: (path: Path) => void;
  setNodesByFloor: (nodesByFloor: NodesByFloor) => void;

  setCurrentFloor: (floor: FloorType) => void;
  setDirectionsCounter: (counter: number) => void;

  setSelectedAlgorithm: (algorithm: AlgorithmType) => void;
  setSelectedAccessibility: (accessibility: AccessibilityType) => void;

  setEditorMode: (isEditing: boolean) => void;
  setDisableZoomPanning: (disableZoomPanning: boolean) => void;
  setScale: (scale: number) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
}

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);

  const [path, setPath] = useState<Path | null>(null);
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

    path,
    setPath,
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

function useMapContext() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
}

export { MapProvider, useMapContext };
