import {
  FloorType,
  Node,
  Path,
} from "../../../../backend/src/algorithms/DataStructures.ts";

export interface FloorSelectorProps {
  updateFloor(floorType: FloorType): void;
}

export interface FloorDisplayProps {
  imageUrl: string;
  nodes: Array<Node>;
}

export interface NodeDisplayProps {
  node: Node;
  key: string;
  widthScaling: number;
  heightScaling: number;
  changesFloor: boolean;
  handleNodeSelection(node: Node): void;
}

export interface PathDisplayProps {
  path: Path;
  widthScaling: number;
  heightScaling: number;
  setMiddlePoint(middleX: number, middleY: number): void;
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
