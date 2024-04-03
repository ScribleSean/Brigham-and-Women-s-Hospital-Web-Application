import {
  BuildingMap,
  FloorMap,
} from "../../../backend/src/algorithms/BuildingClasses.ts";
import {
  FloorType,
  Node,
} from "../../../backend/src/algorithms/DataStructures.ts";
import React, { CSSProperties, useEffect, useState } from "react";
import { FloorSelector } from "./FloorSelector.tsx";
import { FloorDisplay } from "./FloorDisplay.tsx";
import { FloorDisplayProps, NodesByFloor } from "./types/map_page_types.ts";
import axios from "axios";

export default function PathGrapher() {
  const divStyle: CSSProperties = {
    position: "relative",
    display: "grid",
    gridTemplateRows: "15% 85%",
    gridTemplateColumns: "100%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const buildingMap: BuildingMap = new BuildingMap([
    new FloorMap("00_thelowerlevel1.png", FloorType.L2),
    new FloorMap("00_thelowerlevel2.png", FloorType.L1),
    new FloorMap("01_thefirstfloor.png", FloorType.first),
    new FloorMap("02_thesecondfloor.png", FloorType.second),
    new FloorMap("03_thethirdfloor.png", FloorType.third),
  ]);

  const [nodes, setNodes] = useState<NodesByFloor | null>(null);
  const [floor, setFloor] = useState<FloorType>(FloorType.first);

  const updateFloor = (floorType: FloorType): void => {
    setFloor(floorType);
  };

  useEffect(() => {
    async function getNodes(): Promise<void> {
      try {
        const currentNodes: NodesByFloor = (await axios.get("/api/nodes"))
          .data as NodesByFloor;
        setNodes(currentNodes);
      } catch (error) {
        console.error("Failed to fetch nodes data:", error);
      }
    }
    getNodes();
  }, [floor]);

  function getNodesByFloor(
    allNodes: NodesByFloor,
    floor: FloorType,
  ): Array<Node> {
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
    imageUrl: buildingMap.getFloorMap(floor).getPngPath(),
    nodes: nodes ? getNodesByFloor(nodes, floor) : [],
  };

  return (
    <div style={divStyle}>
      <FloorSelector updateFloor={updateFloor} />
      <FloorDisplay {...floorDisplayProps} />
    </div>
  );
}
