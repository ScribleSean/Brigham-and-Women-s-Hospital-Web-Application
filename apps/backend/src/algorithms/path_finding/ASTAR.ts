import { Edge, Graph, Node, Path } from "../DataStructures.ts";
import { IPathFinder } from "../PathFinder.ts";

export class ASTAR implements IPathFinder {
  graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  findPath(startNode: Node, endNode: Node): Path | undefined {
    const openSet: Set<Node> = new Set();
    const closedSet: Set<Node> = new Set();
    const cameFrom: Map<Node, Edge | null> = new Map();
    const gScore: Map<Node, number> = new Map();
    const fScore: Map<Node, number> = new Map();

    openSet.add(startNode);
    gScore.set(startNode, 0);
    fScore.set(startNode, this.heuristicFunc(startNode, endNode));

    while (openSet.size > 0) {
      let currentNode: Node | undefined;
      let currentFScore: number | undefined;

      //Find the node with the lowest score in the openSet
      openSet.forEach((node) => {
        const score = fScore.get(node);
        if (
          score !== undefined &&
          (currentFScore === undefined || score < currentFScore)
        ) {
          currentNode = node;
          currentFScore = score;
        }
      });

      if (!currentNode) {
        console.error("No path could be found between the requested nodes.");
        return undefined;
      }

      //End node has been reached, recreate the path that was traversed and return as the path
      if (currentNode === endNode) {
        return this.reconstructPath(cameFrom, currentNode);
      }

      openSet.delete(currentNode);
      closedSet.add(currentNode);

      const neighbours = this.graph.getEdges(currentNode);

      if (!neighbours) continue;

      for (const neighbourEdge of neighbours) {
        const neighbour = neighbourEdge.getEndNode();
        if (closedSet.has(neighbour)) continue;

        const tentGScore = gScore.get(currentNode)! + neighbourEdge.getWeight();

        if (!tentGScore) continue;

        if (!openSet.has(neighbour)) {
          openSet.add(neighbour);
        } else if (tentGScore >= (gScore.get(neighbour) ?? Infinity)) {
          continue;
        }

        cameFrom.set(neighbour, neighbourEdge);
        gScore.set(neighbour, tentGScore);
        fScore.set(
          neighbour,
          tentGScore + this.heuristicFunc(neighbour, endNode),
        );
      }
    }
    console.error("No path found.");
    return undefined;
  }

  //Heuristic function in which our A* algorithm uses.
  private heuristicFunc(startNode: Node, endNode: Node): number {
    //Euclidian distance formula used for heuristic
    //sqrt((x2 - x1)^2 + (y2 - y1)^2)
    return Math.sqrt(
      Math.pow(endNode.getX() - startNode.getX(), 2) +
        Math.pow(endNode.getY() - startNode.getY(), 2),
    );
  }

  private reconstructPath(
    cameFrom: Map<Node, Edge | null>,
    currentNode: Node,
  ): Path {
    const edges: Edge[] = [];
    let node: Node = currentNode;
    while (cameFrom.has(node) && cameFrom.get(node) !== null) {
      const edge = cameFrom.get(node)!;
      if (edge) {
        edges.unshift(edge);
      }
      node = edge.getStartNode();
    }
    return new Path(edges);
  }
}
