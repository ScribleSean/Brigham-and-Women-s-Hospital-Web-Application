import {
  FloorType,
  Node,
  Path,
} from "../../../../backend/src/algorithms/DataStructures.ts";

export interface FloorSelectorProps {
  updateFloorFunction: (floorType: FloorType) => void;
}

export interface PathGrapherProps {
  floor: FloorType;
}

export interface FloorDisplayProps {
  imageUrl: string;
  nodes: Array<Node>;
}

export interface NodeDisplayProps {
  node: Node;
  key: string;
  scaling: NodeScaling;
  handleNodeSelection(node: Node): void;
  changesFloor: boolean;
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
