import { Graph, Node, Path } from "../DataStructures.ts";
    export abstract class ShortestPathAlgorithm {
    protected graph: Graph;

    constructor(graph: Graph) {
        this.graph = graph;
    }

    abstract findPath(start: Node, goal: Node): Path;
}

export interface HeuristicFunction {
    heuristic(node: Node, goal: Node): number;
}
