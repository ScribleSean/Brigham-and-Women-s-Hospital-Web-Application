import { Node, Edge, Path } from "../DataStructures.ts";
import { AlgorithmType } from "../data_structures/AlgorithmType.ts";

export interface EdgesDisplayProps {
  scaling: NodeScaling;
}

export interface NodeDisplayProps {
  node: Node;
  key: string;
  scaling: NodeScaling;
}
export interface NodeScaling {
  widthScaling: number;
  heightScaling: number;
}

export interface PathDisplayProps {
  scaling: NodeScaling;
}

export interface NodesByFloor {
  L2: Array<Node>;
  L1: Array<Node>;
  firstFloor: Array<Node>;
  secondFloor: Array<Node>;
  thirdFloor: Array<Node>;
}

export interface EdgesByFloor {
  L2: Array<Edge>;
  L1: Array<Edge>;
  firstFloor: Array<Edge>;
  secondFloor: Array<Edge>;
  thirdFloor: Array<Edge>;
}

export interface PathsByFloor {
  L2: Path;
  L1: Path;
  firstFloor: Path;
  secondFloor: Path;
  thirdFloor: Path;
}

export interface StartEndNodes {
  node1ID: string;
  node2ID: string;
}

export interface PathOptionsRequest {
  algorithm: AlgorithmType;
  includeStairs: boolean;
  nodes: StartEndNodes;
  byFloors: boolean;
}

export interface NodesOptionsRequest {
  includeHallways: boolean;
  byFloors: boolean;
}

export interface DeleteNodesOptionsRequest {
  nodes: Array<Node>;
}

export enum AccessibilityType {
  all = "all",
  wheelchair = "wheelchair",
}
