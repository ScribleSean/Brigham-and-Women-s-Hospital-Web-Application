import Papa, { ParseResult } from "papaparse";

export enum NodeType {
  HALL = "HALL",
  CONF = "CONF",
  DEPT = "DEPT",
  ELEV = "ELEV",
  EXIT = "EXIT",
  INFO = "INFO",
  REST = "REST",
  RETL = "RETL",
  STAI = "STAI",
  SERV = "SERV",
}

export enum FloorType {
  first = "1",
  second = "2",
  third = "3",
  L1 = "L1",
  L2 = "L2",
}

export enum BuildingType {
  BTM = "BTM",
  Francis15 = "15 Francis",
  Francis45 = "45 Francis",
  Tower = "Tower",
  Shapiro = "Shapiro",
}

export class Node {
  private readonly ID: string;
  private readonly x: number;
  private readonly y: number;
  private readonly floor: FloorType;
  private readonly building: BuildingType;
  private readonly type: NodeType;
  private readonly longName: string;
  private readonly shortName: string;

  constructor(
    ID: string,
    x: number,
    y: number,
    floor: FloorType,
    building: BuildingType,
    type: NodeType,
    longName: string,
    shortName: string,
  ) {
    this.ID = ID;
    this.x = x;
    this.y = y;
    this.floor = floor;
    this.building = building;
    this.type = type;
    this.longName = longName;
    this.shortName = shortName;
  }

  public getID(): string {
    return this.ID;
  }
  public getX(): number {
    return this.x;
  }
  public getY(): number {
    return this.y;
  }
  public getFloor(): FloorType {
    return this.floor;
  }
  public getBuilding(): BuildingType {
    return this.building;
  }
  public getType(): NodeType {
    return this.type;
  }
  public getLongName(): string {
    return this.longName;
  }
  public getShortName(): string {
    return this.shortName;
  }
  public getCoordinates(): [number, number] {
    return [this.x, this.y];
  }
}

export class Edge {
  private readonly ID: string;
  private readonly startNode: Node;
  private readonly endNode: Node;
  private readonly weight: number;

  public constructor(ID: string, startNode: Node, endNode: Node) {
    this.ID = ID;
    this.startNode = startNode;
    this.endNode = endNode;
    this.weight = this.setWeight();
  }

  private setWeight() {
    const [x1, y1] = this.startNode.getCoordinates();
    const [x2, y2] = this.endNode.getCoordinates();
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  public getID() {
    return this.ID;
  }
  public getStartNode() {
    return this.startNode;
  }
  public getEndNode() {
    return this.endNode;
  }
  public getWeight(): number {
    return this.weight;
  }
}

export class Graph {
  private readonly nodesCsv: string;
  private readonly edgesCsv: string;
  private readonly adjList: Map<Node, Array<Edge>>;
  private readonly lookupTable: Map<string, Node>;

  public constructor(nodesCsv: string, edgesCsv: string) {
    this.nodesCsv = nodesCsv;
    this.edgesCsv = edgesCsv;
    this.adjList = new Map<Node, Array<Edge>>();
    this.lookupTable = new Map<string, Node>();
  }

  public getNodesCsv(): string {
    return this.nodesCsv;
  }
  public getEdgesCsv(): string {
    return this.edgesCsv;
  }
  public getAdjList(): Map<Node, Array<Edge>> {
    return this.adjList;
  }
  public getLookupTable(): Map<string, Node> {
    return this.lookupTable;
  }

  async populate(): Promise<void> {
    const nodeCsvContents: string = await fetch(this.nodesCsv).then(
      (response) => response.text(),
    );
    const edgesCsvContents: string = await fetch(this.edgesCsv).then(
      (response) => response.text(),
    );

    interface NodeRecord {
      nodeID: string;
      xcoord: string;
      ycoord: string;
      floor: FloorType;
      building: BuildingType;
      nodeType: NodeType;
      longName: string;
      shortName: string;
    }

    interface EdgeRecord {
      edgeID: string;
      startNode: string;
      endNode: string;
    }

    const nodeResult: ParseResult<NodeRecord> = Papa.parse<NodeRecord>(
      nodeCsvContents,
      {
        header: true,
        skipEmptyLines: true,
      },
    );
    const edgeResult: ParseResult<EdgeRecord> = Papa.parse<EdgeRecord>(
      edgesCsvContents,
      {
        header: true,
        skipEmptyLines: true,
      },
    );

    const nodeRecords: NodeRecord[] = nodeResult.data;
    const edgeRecords: EdgeRecord[] = edgeResult.data;

    // Initialize nodes
    for (const record of nodeRecords) {
      const node = new Node(
        record.nodeID,
        Number(record.xcoord),
        Number(record.ycoord),
        record.floor,
        record.building,
        record.nodeType,
        record.longName,
        record.shortName,
      );
      this.lookupTable.set(record.nodeID, node);
    }

    // Initialize edges
    for (const record of edgeRecords) {
      const startNode = this.lookupTable.get(record.startNode);
      const endNode = this.lookupTable.get(record.endNode);

      // Assuming edges are directed
      /**
             if (startNode && endNode) {
            const edge = new Edge(record.edgeID, startNode, endNode);
            if (!this.adjList.has(startNode)) {
                this.adjList.set(startNode, []);
            }
            this.adjList.get(startNode)!.push(edge);
        }
             **/
      // Assuming edges are not directed
      if (startNode && endNode) {
        const edge1: Edge = new Edge(record.edgeID, startNode, endNode);
        const edge2: Edge = new Edge(record.edgeID, endNode, startNode);

        if (!this.adjList.has(startNode)) {
          this.adjList.set(startNode, []);
        }
        this.adjList.get(startNode)!.push(edge1);

        if (!this.adjList.has(endNode)) {
          this.adjList.set(endNode, []);
        }
        this.adjList.get(endNode)!.push(edge2);
      }
    }
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

export class Path {
  private readonly edges: Array<Edge>;

  public constructor(edges: Array<Edge>) {
    this.edges = edges;
  }

  public getEdges(): Array<Edge> {
    return this.edges;
  }

  public getNumNodes(): number {
    return this.edges.length + 1;
  }

  public getNumEdges(): number {
    return this.edges.length;
  }

  public getPathDistance(): number {
    let pathDistance: number = 0;
    this.edges.forEach((edge: Edge) => {
      pathDistance += edge.getWeight();
    });
    return pathDistance;
  }

  public getNodes(): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    for (const edge of this.edges) {
      nodes.push(edge.getStartNode());
    }
    nodes.push(this.getEndNode());
    return nodes;
  }

  public getStartEdge(): Edge {
    return this.edges[0];
  }

  public getEndEdge(): Edge {
    return this.edges[this.getNumEdges() - 1];
  }

  public getStartNode(): Node {
    return this.getStartEdge().getStartNode();
  }

  public getEndNode(): Node {
    return this.getEndEdge().getEndNode();
  }

  public getStartFloor(): FloorType {
    return this.getStartNode().getFloor();
  }

  public getEndFloor(): FloorType {
    return this.getEndNode().getFloor();
  }

  public getFloors(): Array<FloorType> {
    const floors: Array<FloorType> = new Array<FloorType>();
    const subPathsByFloor: Array<Path> = this.getSubPathsByFloor();
    for (const subPath of subPathsByFloor) {
      floors.push(subPath.getStartingFloor());
    }
    return floors;
  }

  public changesFloor(): boolean {
    const initialFloor: FloorType = this.getStartNode().getFloor();
    for (const edge of this.edges) {
      if (edge.getEndNode().getFloor() !== initialFloor) return true;
    }
    return false;
  }

  public getStartingFloor(): FloorType {
    return this.getStartNode().getFloor();
  }

  public getEdgesChangingFloor(): Array<Edge> {
    let currentFloor: FloorType = this.getStartingFloor();
    const edges: Array<Edge> = new Array<Edge>();

    for (const edge of this.edges) {
      const floor: FloorType = edge.getEndNode().getFloor();
      if (floor !== currentFloor) {
        edges.push(edge);
        currentFloor = floor;
      }
    }
    return edges;
  }

  public getNodesChangingFloor(): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    const edges: Array<Edge> = this.getEdgesChangingFloor();
    for (const edge of edges) {
      const startNode: Node = edge.getStartNode();
      const endNode: Node = edge.getEndNode();
      if (!nodes.includes(startNode)) {
        nodes.push(startNode);
      }
      if (!nodes.includes(endNode)) {
        nodes.push(endNode);
      }
    }
    return nodes;
  }

  public getEdgeByIndex(index: number) {
    return this.edges[index];
  }

  public getSubPathsByFloor(): Array<Path> {
    const paths: Array<Path> = new Array<Path>();

    let currentFloorPath: Array<Edge> = new Array(this.getStartEdge());
    let currentFloor: FloorType = this.getStartingFloor();

    for (let i = 1; i < this.getNumEdges(); i++) {
      const edge: Edge = this.getEdgeByIndex(i);
      const floor: FloorType = edge.getStartNode().getFloor();
      if (floor !== currentFloor) {
        paths.push(new Path(currentFloorPath));
        currentFloorPath = new Array(edge);
        currentFloor = floor;
      } else {
        currentFloorPath.push(edge);
      }
    }

    paths.push(new Path(currentFloorPath));

    return paths;
  }
}

export class Queue<T> {
  private elements: Array<T> = new Array<T>();

  public enqueue(element: T) {
    this.elements.push(element);
  }

  public dequeue(): T | undefined {
    return this.elements.shift();
  }

  public peek(): T | undefined {
    return this.elements[0];
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public size(): number {
    return this.elements.length;
  }
}

export class Stack<T> {
  private elements: Array<T> = new Array<T>();

  public push(element: T) {
    this.elements.push(element);
  }

  public pop(): T | undefined {
    return this.elements.pop();
  }

  public peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public size(): number {
    return this.elements.length;
  }

  public reverse(): void {
    this.elements.reverse();
  }

  public toArray(): Array<T> {
    return this.elements;
  }
}
