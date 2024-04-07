import express, { Request, Response, Router } from "express";
import { FloorType, Graph } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/database_functions/createGraph.ts";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const graph: Graph = await createGraph(res);

  const nodesByFloor = {
    L2: graph.getNodesByFloor(FloorType.L2, false ),
    L1: graph.getNodesByFloor(FloorType.L1, false),
    firstFloor: graph.getNodesByFloor(FloorType.first, false),
    secondFloor: graph.getNodesByFloor(FloorType.second, false),
    thirdFloor: graph.getNodesByFloor(FloorType.third, false),
  };

  res.send(JSON.stringify(nodesByFloor));
});

export default router;
