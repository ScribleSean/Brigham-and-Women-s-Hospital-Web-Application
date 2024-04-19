import React, { ReactNode, useState } from "react";
import {
  AccessibilityType,
  EditorMode,
  NodeWithAssociatedEdges,
  OldNewEdge,
  OldNewNode,
} from "common/src/types/map_page_types.ts";
import {
  AlgorithmType,
  FloorType,
  Node,
  Edge,
  Path,
} from "common/src/DataStructures.ts";
import MapContext from "./MapContext.ts";
import GraphFrontend from "./GraphFrontend.ts";

interface MapProviderProps {
  children: ReactNode;
}

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [startNode, setStartNode] = useState<Node | null>(null);
  const [endNode, setEndNode] = useState<Node | null>(null);

  const [paths, setPaths] = useState<Array<Path>>(new Array<Path>());

  const [currentFloor, setCurrentFloor] = useState<FloorType>(FloorType.first);
  const [directionsCounter, setDirectionsCounter] = useState<number>(0);

  const [startFloor, setStartFloor] = useState<FloorType>(FloorType.first);
  const [endFloor, setEndFloor] = useState<FloorType>(FloorType.first);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType>(
    AlgorithmType._ASTAR,
  );
  const [selectedAccessibility, setSelectedAccessibility] =
    useState<AccessibilityType>(AccessibilityType.all);

  const [editorMode, setEditorMode] = useState<EditorMode>(EditorMode.disabled);
  const [showPaths, setShowPaths] = useState<boolean>(false);

  const [showNodes, setShowNodes] = useState<boolean>(false);
  const [showEdges, setShowEdges] = useState<boolean>(false);

  const [disableZoomPanning, setDisableZoomPanning] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);

  const [nodesToBeDeleted, setNodesToBeDeleted] = useState<Array<Node>>(
    new Array<Node>(),
  );
  const [edgesToBeDeleted, setEdgesToBeDeleted] = useState<Array<Edge>>(
    new Array<Edge>(),
  );
  const [nodesToBeEdited, setNodesToBeEdited] = useState<Array<OldNewNode>>(
    new Array<OldNewNode>(),
  );
  const [edgesToBeEdited, setEdgesToBeEdited] = useState<Array<OldNewEdge>>(
    new Array<OldNewEdge>(),
  );
  const [nodesToBeAdded, setNodesToBeAdded] = useState<
    Array<NodeWithAssociatedEdges>
  >(new Array<NodeWithAssociatedEdges>());
  const [edgesToBeAdded, setEdgesToBeAdded] = useState<Array<Edge>>(
    new Array<Edge>(),
  );

  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [graph, setGraph] = useState<GraphFrontend | null>(null);

  const value = {
    startNode,
    setStartNode,
    endNode,
    setEndNode,

    paths,
    setPaths,

    startFloor,
    setStartFloor,
    endFloor,
    setEndFloor,

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
    showPaths,
    setShowPaths,

    showNodes,
    setShowNodes,
    showEdges,
    setShowEdges,

    disableZoomPanning,
    setDisableZoomPanning,
    scale,
    setScale,

    nodesToBeDeleted,
    setNodesToBeDeleted,
    edgesToBeDeleted,
    setEdgesToBeDeleted,
    nodesToBeEdited,
    setNodesToBeEdited,
    edgesToBeEdited,
    setEdgesToBeEdited,
    nodesToBeAdded,
    setNodesToBeAdded,
    edgesToBeAdded,
    setEdgesToBeAdded,

    unsavedChanges,
    setUnsavedChanges,

    graph,
    setGraph,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export default MapProvider;
