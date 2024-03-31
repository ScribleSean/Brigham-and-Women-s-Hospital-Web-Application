import { Edge, Graph, Node, Path } from "../DataStructures.ts";
import { IPathFinder } from "../PathFinder.ts";

export class DFS implements IPathFinder {
  graph: Graph;
  visited: Set<Node>;

  constructor(graph: Graph) {
    this.graph = graph;
    this.visited = new Set<Node>();
  }

  findPath(startNode: Node, endNode: Node): Path | undefined {
    //Check if start node is valid.
    if (!startNode) {
      console.error("Start Node is not valid.");
      return undefined;
    }

    const result: Node[] = [];
    if (!this.dfsRecursive(startNode, result, endNode)) {
      console.error("End node not reached.");
      return undefined;
    }

    const pathEdges: Edge[] = [];
    for (let i = 0; i < result.length - 1; i++) {
      const startNode = result[i];
      const endNode = result[i + 1];
      const edge = this.graph.getEdge(startNode, endNode);

      if (!edge) {
        console.error("Edge not found between two nodes. Aborting.");
        return undefined;
      }
      pathEdges.push(edge);
    }
    return new Path(pathEdges);
  }

  private dfsRecursive(node: Node, result: Node[], endNode: Node): boolean {
    this.visited.add(node);
    result.push(node);

    if (endNode && node === endNode) {
      return true;
    }

    const neighbours = this.graph.getEdges(node);
    if (neighbours) {
      for (const edge of neighbours) {
        const neighbour = edge.getEndNode();
        if (!this.visited.has(neighbour)) {
          //Check if node was reached in this branch
          const reachEnd = this.dfsRecursive(neighbour, result, endNode);
          if (reachEnd) {
            return true;
          }
        }
      }
    }
    //If this statement is reached, the end node was never found.
    return false;
  }
}
