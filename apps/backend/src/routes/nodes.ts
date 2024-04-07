import express, { Request, Response, Router } from "express";
import { FloorType, Graph } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/request_functions/createGraph.ts";
import { NodesOptionsRequest } from "../../../frontend/src/map_page/types/map_page_types.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  const { includeHallways } = req.body as NodesOptionsRequest;
  const graph: Graph = await createGraph(res, false);

  const nodesByFloor = {
    L2: graph.getNodesByFloor(FloorType.L2, includeHallways),
    L1: graph.getNodesByFloor(FloorType.L1, includeHallways),
    firstFloor: graph.getNodesByFloor(FloorType.first, includeHallways),
    secondFloor: graph.getNodesByFloor(FloorType.second, includeHallways),
    thirdFloor: graph.getNodesByFloor(FloorType.third, includeHallways),
  };

  res.send(JSON.stringify(nodesByFloor));
});

export default router;
