import { FloorMap } from "../algorithms/BuildingClasses.ts";
import { FloorType, Node, Graph, Path } from "../algorithms/DataStructures.ts";

export interface PathGrapherState {
  floorMap: FloorMap;
}

export interface FloorSelectorProps {
  updateFloor(floorType: FloorType): void;
}

export interface FloorDisplayProps {
  imageUrl: string;
  nodes: Array<Node>;
  graph: Graph;
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
