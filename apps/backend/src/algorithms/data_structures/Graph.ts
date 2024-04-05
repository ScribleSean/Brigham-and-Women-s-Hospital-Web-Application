import { Edge, FloorType, Node } from "../DataStructures.ts";

export class Graph {
  private readonly adjList: Map<Node, Array<Edge>>;
  private readonly lookupTable: Map<string, Node>;

  public constructor() {
    this.adjList = new Map<Node, Array<Edge>>();
    this.lookupTable = new Map<string, Node>();
  }

  public getAdjList(): Map<Node, Array<Edge>> {
    return this.adjList;
  }
  public getLookupTable(): Map<string, Node> {
    return this.lookupTable;
  }

  public addEdge(startNode: Node, endNode: Node): void {
    const edge: Edge = new Edge(startNode, endNode);

    this.lookupTable.set(startNode.getID(), startNode);

    if (!this.adjList.has(startNode)) {
      this.adjList.set(startNode, []);
    }

    this.adjList.get(startNode)!.push(edge);
  }

  public addEdgeNoStairs(startNode: Node, endNode: Node): void {
    const edge: Edge = new Edge(startNode, endNode);
    if (edge.usesStairs()) {
      return;
    }

    this.lookupTable.set(startNode.getID(), startNode);

    if (!this.adjList.has(startNode)) {
      this.adjList.set(startNode, []);
    }

    this.adjList.get(startNode)!.push(edge);
  }

  public getEdges(node: Node): Array<Edge> | undefined {
    return this.adjList.get(node);
  }

  public getEdge(startNode: Node, endNode: Node): Edge | undefined {
    const edges: Array<Edge> | undefined = this.adjList.get(startNode);
    if (!edges) {
      console.error("Start node not found in the graph");
      return undefined;
    }
    for (const edge of edges) {
      if (edge.getEndNode() === endNode) {
        return edge;
      }
    }
    console.error("Edge not found between the specified nodes");
    return undefined;
  }

  public getNodeByID(id: string): Node | undefined {
    return this.lookupTable.get(id);
  }

  public getNodesByFloor(floorType: FloorType): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    const keys: Array<Node> = Array.from(this.adjList.keys());
    for (const node of keys) {
      if (node.getFloor() === floorType) {
        nodes.push(node);
      }
    }
    return nodes;
  }
}
