import express, { Request, Response, Router } from "express";
import { FloorType, Graph } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/request_functions/createGraph.ts";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const graph: Graph = await createGraph(res, false);

  const nodesByFloor = {
    L2: graph.getNodesByFloor(FloorType.L2, true),
    L1: graph.getNodesByFloor(FloorType.L1, true),
    firstFloor: graph.getNodesByFloor(FloorType.first, true),
    secondFloor: graph.getNodesByFloor(FloorType.second, true),
    thirdFloor: graph.getNodesByFloor(FloorType.third, true),
  };

  res.send(JSON.stringify(nodesByFloor));
});

export default router;
