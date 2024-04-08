import {
  FloorType,
  Node,
  Path,
} from "../../../../backend/src/algorithms/DataStructures.ts";
import { AlgorithmType } from "../../../../backend/src/algorithms/data_structures/AlgorithmType.ts";

export interface FloorSelectorProps {
  updateFloorFunction: (floorType: FloorType) => void;
  getButtonColor: (floorType: FloorType) => string;
  getButtonWidth: (floorType: FloorType) => string;
}

export interface AlgorithmSelectorProps {
  updateAlgorithmFunction: (algorithm: AlgorithmType) => void;
  currentAlgorithm: AlgorithmType;
}

export interface AccessibilitySelectorProps {
  updateAccessibility: (accessibilityType: AccessibilityType) => void;
  currentAccessibility: AccessibilityType;
}

export interface PathGrapherProps {
  floor: FloorType;
  draggingNodes: (isDragging: boolean) => void;
  scale: number;
  algorithm: AlgorithmType;
  accessibility: AccessibilityType;
}

export interface FloorDisplayProps {
  imageUrl: string;
  nodes: Array<Node>;
  draggingNodes: (isDragging: boolean) => void;
  scale: number;
  algorithm: AlgorithmType;
  accessibility: AccessibilityType;
}

export interface NodeDisplayProps {
  node: Node;
  key: string;
  scaling: NodeScaling;
  handleNodeSelection(node: Node): void;
  changesFloor: boolean;
  draggingNodes: (isDragging: boolean) => void;
  scale: number;
}
export interface NodeScaling {
  widthScaling: number;
  heightScaling: number;
}

export interface PathDisplayProps {
  path: Array<Path>;
  scaling: NodeScaling;
}

export interface NodesByFloor {
  L2: Array<Node>;
  L1: Array<Node>;
  firstFloor: Array<Node>;
  secondFloor: Array<Node>;
  thirdFloor: Array<Node>;
}

export interface StartEndNodes {
  node1: Node;
  node2: Node;
}

export interface PathOptionsRequest {
  algorithm: AlgorithmType;
  includeStairs: boolean;
  nodes: StartEndNodes;
}

export interface NodesOptionsRequest {
  includeHallways: boolean;
}

export enum AccessibilityType {
  all = "all",
  wheelchair = "wheelchair",
}
