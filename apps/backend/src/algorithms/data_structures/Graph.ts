import {
  BuildingType,
  Edge,
  FloorType,
  Node,
  NodeType,
} from "../DataStructures.ts";
import Papa, { ParseResult } from "papaparse";
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
