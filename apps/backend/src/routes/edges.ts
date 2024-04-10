import express, { Request, Response, Router } from "express";
import { FloorType, Graph } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/request_functions/createGraph.ts";
import { EdgesByFloor } from "../../../frontend/src/map_page/types/map_page_types.ts";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const graph: Graph = await createGraph(res, false);

  const edgesByFloor: EdgesByFloor = {
    L2: graph.getEdgesByFloorAll(FloorType.L2),
    L1: graph.getEdgesByFloorAll(FloorType.L1),
    firstFloor: graph.getEdgesByFloorAll(FloorType.first),
    secondFloor: graph.getEdgesByFloorAll(FloorType.second),
    thirdFloor: graph.getEdgesByFloorAll(FloorType.third),
  };

  res.send(JSON.stringify(edgesByFloor));
});

export default router;
