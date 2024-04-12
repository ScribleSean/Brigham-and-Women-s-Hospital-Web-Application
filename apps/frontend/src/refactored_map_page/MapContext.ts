import { createContext, useContext } from "react";
import { FloorType, Node, AlgorithmType } from "common/src/DataStructures.ts";
import {
  AccessibilityType,
  NodesByFloor,
} from "common/src/types/map_page_types.ts";

interface MapContextType {
  startNode: Node | null;
  endNode: Node | null;

  nodesByFloor: NodesByFloor | null;

  startFloor: FloorType;
  endFloor: FloorType;

  currentFloor: FloorType;
  directionsCounter: number;

  selectedAlgorithm: AlgorithmType;
  selectedAccessibility: AccessibilityType;

  editorMode: boolean;
  disableZoomPanning: boolean;
  scale: number;

  //---------------------------------------
  setStartNode: (node: Node | null) => void;
  setEndNode: (node: Node | null) => void;

  setNodesByFloor: (nodesByFloor: NodesByFloor | null) => void;

  setStartFloor: (floor: FloorType) => void;
  setEndFloor: (floor: FloorType) => void;

  setCurrentFloor: (floor: FloorType) => void;
  setDirectionsCounter: (counter: number) => void;

  setSelectedAlgorithm: (algorithm: AlgorithmType) => void;
  setSelectedAccessibility: (accessibility: AccessibilityType) => void;

  setEditorMode: (isEditing: boolean) => void;
  setDisableZoomPanning: (disableZoomPanning: boolean) => void;
  setScale: (scale: number) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);
function useMapContext() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
}
export default MapContext;
export type { MapContextType };
export { useMapContext };
