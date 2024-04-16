import { createContext, useContext } from "react";
import {
  FloorType,
  Node,
  Edge,
  AlgorithmType,
  Path,
} from "common/src/DataStructures.ts";
import {
  AccessibilityType,
  EdgesByFloor,
  EditorMode,
  NodesByFloor,
  NodeWithAssociatedEdges,
  OldNewEdge,
} from "common/src/types/map_page_types.ts";
import { OldNewNode } from "common/src/types/map_page_types.ts";

interface MapContextType {
  startNode: Node | null;
  endNode: Node | null;

  nodesByFloor: NodesByFloor | null;
  edgesByFloor: EdgesByFloor | null;
  paths: Array<Path>;

  startFloor: FloorType;
  endFloor: FloorType;

  currentFloor: FloorType;
  directionsCounter: number;

  selectedAlgorithm: AlgorithmType;
  selectedAccessibility: AccessibilityType;

  editorMode: EditorMode;
  showPaths: boolean;

  showNodes: boolean;
  showEdges: boolean;

  disableZoomPanning: boolean;
  scale: number;

  nodesToBeDeleted: Array<Node>;
  edgesToBeDeleted: Array<Edge>;
  nodesToBeEdited: Array<OldNewNode>;
  edgesToBeEdited: Array<OldNewEdge>;
  nodesToBeAdded: Array<NodeWithAssociatedEdges>;
  edgesToBeAdded: Array<Edge>;

  unsavedChanges: boolean;

  //---------------------------------------
  setStartNode: (node: Node | null) => void;
  setEndNode: (node: Node | null) => void;

  setNodesByFloor: (nodesByFloor: NodesByFloor | null) => void;
  setEdgesByFloor: (edgesByFloor: EdgesByFloor | null) => void;
  setPaths: (paths: Array<Path>) => void;

  setStartFloor: (floor: FloorType) => void;
  setEndFloor: (floor: FloorType) => void;

  setCurrentFloor: (floor: FloorType) => void;
  setDirectionsCounter: (counter: number) => void;

  setSelectedAlgorithm: (algorithm: AlgorithmType) => void;
  setSelectedAccessibility: (accessibility: AccessibilityType) => void;

  setEditorMode: (editorMode: EditorMode) => void;
  setShowPaths: (showPaths: boolean) => void;

  setShowNodes: (showNodes: boolean) => void;
  setShowEdges: (showEdges: boolean) => void;

  setDisableZoomPanning: (disableZoomPanning: boolean) => void;
  setScale: (scale: number) => void;

  setNodesToBeDeleted: (nodes: Array<Node>) => void;
  setEdgesToBeDeleted: (edges: Array<Edge>) => void;
  setNodesToBeEdited: (nodes: Array<OldNewNode>) => void;
  setEdgesToBeEdited: (edges: Array<OldNewEdge>) => void;
  setNodesToBeAdded: (nodes: Array<NodeWithAssociatedEdges>) => void;
  setEdgesToBeAdded: (edges: Array<Edge>) => void;

  setUnsavedChanges: (hasChanged: boolean) => void;
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
