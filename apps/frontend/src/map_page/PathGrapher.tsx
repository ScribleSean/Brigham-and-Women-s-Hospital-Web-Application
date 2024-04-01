import {
  FloorMap,
  BuildingMap,
} from "../../../backend/src/algorithms/BuildingClasses.ts";
import {
  FloorType,
  Graph,
} from "../../../backend/src/algorithms/DataStructures.ts";
import React, { useState, useEffect, CSSProperties } from "react";
import { FloorSelector } from "./FloorSelector.tsx";
import { FloorDisplay } from "./FloorDisplay.tsx";
import {
  FloorDisplayProps,
  PathGrapherState,
} from "../../../backend/src/types/map_page_types.ts";
import axios from "axios";

function preloadImages(urls: Array<string>): void {
  urls.forEach((url) => {
    const image: HTMLImageElement = new Image();
    image.src = url;
  });
}

export default function PathGrapher(): React.JSX.Element {
  const floorMaps: Array<FloorMap> = [
    new FloorMap("00_thelowerlevel1.png", FloorType.L2),
    new FloorMap("00_thelowerlevel2.png", FloorType.L1),
    new FloorMap("01_thefirstfloor.png", FloorType.first),
    new FloorMap("02_thesecondfloor.png", FloorType.second),
    new FloorMap("03_thethirdfloor.png", FloorType.third),
  ];

  const buildingMap: BuildingMap = new BuildingMap(floorMaps);

  const [graph, setGraph] = useState<Graph>(new Graph());

  useEffect(() => {
    async function getGraph(): Promise<void> {
      try {
        const response = await axios.get("/api/graph");
        const tempGraph: Graph = response.data as Graph;
        setGraph(tempGraph);
      } catch (error) {
        console.error("Failed to fetch graph data:", error);
      }
    }

    preloadImages(
      buildingMap.getFloorMaps().map((floorMap) => floorMap.getPngPath()),
    );

    getGraph();
  }); // Added dependencies here

  const getFloorState = (floorType: FloorType): PathGrapherState => {
    const floorMap: FloorMap = buildingMap.getFloorMap(floorType);
    return { floorMap };
  };

  const [floor, setFloor] = useState<PathGrapherState>(
    getFloorState(FloorType.first),
  );

  const updateFloor = (floorType: FloorType): void => {
    setFloor(getFloorState(floorType));
  };

  const divStyle: CSSProperties = {
    position: "absolute",
    display: "grid",
    gridTemplateRows: "15% 85%",
    gridTemplateColumns: "100%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightsteelblue",
  };

  const floorDisplayProps: FloorDisplayProps = {
    imageUrl: floor.floorMap.getPngPath(),
    graph: graph,
    nodes: graph.getNodesByFloor(floor.floorMap.getFloorType()),
  };

  return (
    <div style={divStyle}>
      <FloorSelector updateFloor={updateFloor}></FloorSelector>
      <FloorDisplay {...floorDisplayProps}></FloorDisplay>
    </div>
  );
}
