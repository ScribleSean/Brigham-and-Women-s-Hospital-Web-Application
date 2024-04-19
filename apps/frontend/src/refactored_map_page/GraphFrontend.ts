import { Node } from "common/src/data_structures/Node.ts";
import { Edge } from "common/src/data_structures/Edge.ts";
import { FloorType } from "common/src/data_structures/FloorType.ts";
import { BuildingType } from "common/src/data_structures/BuildingType.ts";
import { NodeType } from "common/src/data_structures/NodeType.ts";

export default class GraphFrontend {
  private readonly adjList: Map<Node, Array<Edge>>;
  private readonly lookupTable: Map<string, Node>;

  public constructor() {
    this.adjList = new Map<Node, Array<Edge>>();
    this.lookupTable = new Map<string, Node>();
  }

  public populateGraph(edges: Array<Edge>) {
    for (const edge of edges) {
      const edgeID: string = edge.ID;

      const startNode = new Node(
        edge.startNode.ID as string,
        edge.startNode.x as number,
        edge.startNode.y as number,
        edge.startNode.floor as FloorType,
        edge.startNode.building as BuildingType,
        edge.startNode.type as NodeType,
        edge.startNode.longName as string,
        edge.startNode.shortName as string,
      );

      const endNode = new Node(
        edge.endNode.ID as string,
        edge.endNode.x as number,
        edge.endNode.y as number,
        edge.endNode.floor as FloorType,
        edge.endNode.building as BuildingType,
        edge.endNode.type as NodeType,
        edge.endNode.longName as string,
        edge.endNode.shortName as string,
      );
      this.addEdge(edgeID, startNode, endNode);
    }
  }

  public getAdjList(): Map<Node, Array<Edge>> {
    return this.adjList;
  }
  public getLookupTable(): Map<string, Node> {
    return this.lookupTable;
  }

  public addEdge(ID: string, startNode: Node, endNode: Node): void {
    const edge: Edge = new Edge(ID, startNode, endNode);

    if (!this.lookupTable.has(startNode.ID)) {
      this.lookupTable.set(startNode.ID, startNode);
    }
    if (!this.lookupTable.has(endNode.ID)) {
      this.lookupTable.set(endNode.ID, endNode);
    }

    if (!this.adjList.has(startNode)) {
      this.adjList.set(startNode, []);
    }

    if (!this.adjList.has(endNode)) {
      this.adjList.set(endNode, []);
    }

    const currentEdgesStartNode = this.adjList.get(startNode);
    if (currentEdgesStartNode) {
      if (!currentEdgesStartNode.some((edge) => edge.ID === ID)) {
        currentEdgesStartNode.push(edge);
      }
    }

    const currentEdgesEndNode = this.adjList.get(endNode);
    if (currentEdgesEndNode) {
      if (!currentEdgesEndNode.some((edge) => edge.ID === ID)) {
        currentEdgesEndNode.push(edge);
      }
    }
  }

  public addNode(node: Node): GraphFrontend {
    if (this.lookupTable.has(node.ID)) {
      console.error("It has that node ID");
    } else {
      this.adjList.set(node, []);
    }
    return this;
  }

  public deleteNode(node: Node): GraphFrontend {
    if (!this.lookupTable.has(node.ID)) {
      console.error("Could not find the node with that ID to be deleted");
    } else {
      const assuredNode: Node | undefined = this.lookupTable.get(node.ID);
      if (assuredNode) {
        this.adjList.delete(assuredNode);
      }
    }
    return this;
  }

  public editNode(editedNode: Node): GraphFrontend {
    if (!this.lookupTable.has(editedNode.ID)) {
      console.error("Could not find the node with that ID to be deleted");
    } else {
      const assuredNode: Node | undefined = this.lookupTable.get(editedNode.ID);
      if (assuredNode) {
        this.adjList.get(assuredNode)?.forEach((edge: Edge) => {
          if (edge.startNode.ID === editedNode.ID) {
            edge.startNode = editedNode;
          }
          if (edge.endNode.ID === editedNode.ID) {
            edge.endNode = editedNode;
          }
        });
      }
    }
    return this;
  }

  public deleteEdge(edgeToBeDeleted: Edge): GraphFrontend {
    Array.from(this.adjList.keys()).forEach((node: Node) => {
      this.adjList.get(node)?.filter((edge: Edge) => {
        return !(
          edge.ID === edgeToBeDeleted.ID &&
          ((edge.startNode.ID === edgeToBeDeleted.startNode.ID &&
            edge.endNode.ID === edgeToBeDeleted.endNode.ID) ||
            (edge.startNode.ID === edgeToBeDeleted.endNode.ID &&
              edge.endNode.ID === edgeToBeDeleted.startNode.ID))
        );
      });
    });
    return this;
  }

  public editEdge(editedEdge: Edge): GraphFrontend {
    this.editNode(editedEdge.startNode);
    this.editNode(editedEdge.endNode);
    return this;
  }

  public getEdgesFromNode(node: Node): Array<Edge> {
    const edges: Array<Edge> | undefined = this.adjList.get(node);
    if (edges !== undefined) {
      return edges;
    } else {
      console.log("No Edges");
      return new Array<Edge>();
    }
  }

  public getEdge(startNode: Node, endNode: Node): Edge | undefined {
    const edges: Array<Edge> | undefined = this.adjList.get(startNode);
    if (!edges) {
      console.error("Start node not found in the graph");
      return undefined;
    }
    for (const edge of edges) {
      if (edge.endNode === endNode) {
        return edge;
      }
    }
    console.error("Edge not found between the specified nodes");
    return undefined;
  }

  public getNodeByID(id: string): Node | undefined {
    return this.lookupTable.get(id);
  }

  public getNodes(includeHallways: boolean): Array<Node> {
    if (includeHallways) {
      return this.getNodesAll();
    } else return this.getNodesNoHallways();
  }

  private getNodesNoHallways(): Array<Node> {
    return this.getNodesAll().filter((node) => node.type !== NodeType.HALL);
  }

  public getNodesAll(): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    const keys: Array<Node> = Array.from(this.adjList.keys());
    for (const node of keys) {
      if (!nodes.map((node) => node.ID).includes(node.ID)) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  public getEdgesAll(): Array<Edge> {
    const edges: Array<Edge> = new Array<Edge>();
    const keys: Array<Node> = Array.from(this.adjList.keys());
    for (const node of keys) {
      const edgesFromNode: Array<Edge> = this.getEdgesFromNode(node);
      edgesFromNode.forEach((edge) => {
        if (!edges.map((edge) => edge.ID).includes(edge.ID)) {
          edges.push(edge);
        }
      });
    }
    return edges;
  }

  public getNodesByFloor(
    floorType: FloorType,
    includeHallways: boolean,
  ): Array<Node> {
    if (includeHallways) {
      return this.getNodesByFloorAll(floorType);
    } else return this.getNodesByFloorNoHallways(floorType);
  }

  private getNodesByFloorNoHallways(floorType: FloorType): Array<Node> {
    return this.getNodesByFloorAll(floorType).filter(
      (node) => node.type !== NodeType.HALL,
    );
  }

  private getNodesByFloorAll(floorType: FloorType): Array<Node> {
    const nodes: Array<Node> = new Array<Node>();
    const keys: Array<Node> = Array.from(this.adjList.keys());
    for (const node of keys) {
      if (
        node.floor === floorType &&
        !nodes.map((node) => node.ID).includes(node.ID)
      ) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  public getEdgesByFloorAll(floorType: FloorType): Array<Edge> {
    const edges: Array<Edge> = new Array<Edge>();
    const keys: Array<Node> = Array.from(this.adjList.keys());
    for (const node of keys) {
      if (node.floor === floorType) {
        const edgesFromNode: Array<Edge> = this.getEdgesFromNode(node);
        edgesFromNode.forEach((edge) => {
          if (!edges.map((edge) => edge.ID).includes(edge.ID)) {
            edges.push(edge);
          }
        });
      }
    }
    return edges;
  }
}
