import { Edge, Graph, Node, Path, Queue, Stack } from "../DataStructures.ts";
import { IPathFinder } from "../PathFinder.ts";

export class BFS implements IPathFinder {
  findPath(graph: Graph, startNode: Node, endNode: Node): Path | undefined {
    const queue = new Queue<Node>();
    const visited = new Set<Node>();
    const parentMap = new Map<Node, Node>();

    queue.enqueue(startNode);
    visited.add(startNode);

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();

      if (!currentNode) {
        continue;
      }

      if (currentNode === endNode) {
        break;
      }

      const edges: Array<Edge> =
        graph.getEdges(currentNode) || new Array<Edge>();

      for (const edge of edges) {
        const nextNode: Node = edge.getEndNode();
        if (!visited.has(nextNode)) {
          queue.enqueue(nextNode);
          visited.add(nextNode);
          parentMap.set(nextNode, currentNode);
        }
      }
    }

    if (!visited.has(endNode)) {
      console.error("Path not found");
      return undefined;
    }

    const path: Stack<Edge> = new Stack<Edge>();
    let currentNode: Node = endNode;

    while (currentNode !== startNode) {
      const parent: Node | undefined = parentMap.get(currentNode);
      if (!parent) break;

      const edge = graph.getEdge(parent, currentNode);

      if (!edge) break;
      path.push(edge);
      currentNode = parent;
    }

    path.reverse();

    return new Path(path.toArray());
  }
}
