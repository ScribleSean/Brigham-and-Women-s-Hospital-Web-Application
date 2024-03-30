import { Graph, Node, Path } from "../DataStructures.ts";

export interface IPathFinder {
  findPath(graph: Graph, startNode: Node, endNode: Node): Path | undefined;
  //findAlgorithmSteps(graph: AdjacencyList, startNode: Node, endNode: Node): Array<Edge>;
}
