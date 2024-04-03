import { Edge, Graph, Node, Path } from "../DataStructures.ts";
import { IPathFinder } from "../PathFinder.ts";

export class Dijkstra implements IPathFinder {
  graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  //returns null/undefined if no path is found. Returns the shortest path found otherwise.
  findPath(startNode: Node, endNode: Node): Path | undefined {
    const startNodeID = startNode.getID();
    //const endNodeID = endNode.getID();

    //Check if nodes are present on the graph
    if (!startNode || !endNode) {
      console.error("Nodes not present on graph.");
      return undefined;
    }

    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: Node | null } = {};
    const visited: { [key: string]: boolean } = {};

    //Initialize the distances [all infinity in the beginning] and the previously visited nodes
    //arrays.
    this.graph.getAdjList().forEach((_value, node) => {
      distances[node.getID()] = Infinity;
      previous[node.getID()] = null;
    });

    //Start node distance always begins as 0.
    distances[startNodeID] = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let minDistance = Infinity;
      let closestNode: Node | undefined = undefined;

      //Finding the closest unvisited node
      for (const [nodeID, distance] of Object.entries(distances)) {
        if (!visited[nodeID] && distance < minDistance) {
          minDistance = distance;
          closestNode = this.graph.getNodeByID(nodeID);
        }
      }
      //No reachable nodes left on graph.
      if (!closestNode) {
        break;
      } else if (closestNode === endNode) {
        break;
      }

      visited[closestNode.getID()] = true;

      //Updating distances to the neighboring nodes.
      const edges = this.graph.getEdges(closestNode);
      if (edges) {
        for (const edge of edges) {
          const neighbour = edge.getEndNode();
          const distance = minDistance + edge.getWeight();
          if (distance < distances[neighbour.getID()]) {
            distances[neighbour.getID()] = distance;
            previous[neighbour.getID()] = closestNode;
          }
        }
      }
    }

    //Backtrack through the previous[] array. path.unshift adds the currentNode
    //to the front of the array, thus giving us the path in the correct order from which
    //traversed. Return the path object.
    const edges: Edge[] = [];
    let currentNode: Node | null = endNode;

    while (currentNode !== null && previous[currentNode.getID()] !== null) {
      const prevNode: Node = previous[currentNode.getID()]!;
      if (prevNode) {
        const edge = this.graph.getEdge(prevNode, currentNode);
        if (edge) {
          edges.unshift(edge);
        } else {
          console.error("Edge not found between nodes.");
          return undefined;
        }
        currentNode = prevNode;
      }
    }

    if (edges.length === 0 || currentNode !== startNode) {
      console.error("No path found between the specified nodes.");
      return undefined;
    }
  }
}
