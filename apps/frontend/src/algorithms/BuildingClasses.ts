import { FloorType } from "./DataStructures";

export class FloorMap {
  private readonly pngPath: string;
  private readonly floorType: FloorType;
  private readonly pixelWidth: number = 5000;
  private readonly pixelHeight: number = 3400;

  public constructor(pngPath: string, floorType: FloorType) {
    this.floorType = floorType;
    this.pngPath = pngPath;
  }

  public getPngPath(): string {
    return this.pngPath;
  }

  public getFloorType(): FloorType {
    return this.floorType;
  }

  public getPixelWidth(): number {
    return this.pixelWidth;
  }

  public getPixelHeight(): number {
    return this.pixelHeight;
  }

  public getPixelDimensions(): [number, number] {
    return [this.pixelWidth, this.pixelHeight];
  }
}

export class BuildingMap {
  private readonly floorMaps: Array<FloorMap>;

  public constructor(floorMaps: Array<FloorMap>) {
    this.floorMaps = floorMaps;
  }

  public getFloorMaps(): Array<FloorMap> {
    return this.floorMaps;
  }

  public getFloorMap(floorType: FloorType): FloorMap {
    for (const floorMap of this.floorMaps) {
      if (floorType === floorMap.getFloorType()) return floorMap;
    }
    return this.floorMaps[0];
  }
}
