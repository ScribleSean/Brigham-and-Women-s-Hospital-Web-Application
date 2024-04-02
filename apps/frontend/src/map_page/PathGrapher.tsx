import { BuildingMap, FloorMap } from "../../../backend/src/algorithms/BuildingClasses.ts";
import { FloorType, Node } from "../../../backend/src/algorithms/DataStructures.ts";
import React, { CSSProperties, useEffect, useState } from "react";
import { FloorSelector } from "./FloorSelector.tsx";
import { FloorDisplay } from "./FloorDisplay.tsx";
import { FloorDisplayProps, NodesByFloor, PathGrapherState } from "./types/map_page_types.ts";
import axios from "axios";

export default function PathGrapher() {
  const floorMaps: Array<FloorMap> = [
    new FloorMap("00_thelowerlevel1.png", FloorType.L2),
    new FloorMap("00_thelowerlevel2.png", FloorType.L1),
    new FloorMap("01_thefirstfloor.png", FloorType.first),
    new FloorMap("02_thesecondfloor.png", FloorType.second),
    new FloorMap("03_thethirdfloor.png", FloorType.third),
  ];

  const buildingMap: BuildingMap = new BuildingMap(floorMaps);

  const getFloorState = (floorType: FloorType): PathGrapherState => {
    const floorMap: FloorMap = buildingMap.getFloorMap(floorType);
    return { floorMap };
  };

  const updateFloor = (floorType: FloorType): void => {
    setFloor(getFloorState(floorType));
  };

  const [nodes, setNodes] = useState<NodesByFloor | null>(null);
  const [floor, setFloor] = useState<PathGrapherState>(getFloorState(FloorType.first));

  useEffect(() => {
    async function getNodes(): Promise<void> {
      try {
        const currentNodes: NodesByFloor = await axios.get("/api/nodes") as NodesByFloor;
        setNodes(currentNodes);
      } catch (error) {
        console.error("Failed to fetch nodes data:", error);
      }
    }
    getNodes();
  }, [floor]);

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

  function getNodesByFloor(allNodes: NodesByFloor, floor: FloorType): Array<Node> {
    if (!allNodes) return [];

    const { L2, L1, firstFloor, secondFloor, thirdFloor } = allNodes;
    switch (floor) {
      case FloorType.first:
        return firstFloor;
      case FloorType.second:
        return secondFloor;
      case FloorType.third:
        return thirdFloor;
      case FloorType.L1:
        return L1;
      default:
        return L2;
    }
  }

  const floorDisplayProps: FloorDisplayProps = {
    imageUrl: buildingMap.getFloorMap(floor.floorMap.getFloorType()).getPngPath(),
    nodes: nodes ? getNodesByFloor(nodes, floor.floorMap.getFloorType()) : [],
  };

  return (
      <div style={divStyle}>
        <FloorSelector updateFloor={updateFloor} />
        <FloorDisplay {...floorDisplayProps} />
      </div>
  );
}
