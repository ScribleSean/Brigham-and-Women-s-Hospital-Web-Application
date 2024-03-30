import { BuildingType, FloorType, NodeType } from "../DataStructures.ts";

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
