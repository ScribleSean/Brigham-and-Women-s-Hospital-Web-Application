import { Node } from "./Node.ts";
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
