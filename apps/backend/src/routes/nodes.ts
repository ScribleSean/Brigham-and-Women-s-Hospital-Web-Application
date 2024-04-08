import express, { Request, Response, Router } from "express";
import { FloorType, Graph, Node } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/request_functions/createGraph.ts";
import {
  NodesByFloor,
  NodesOptionsRequest,
} from "../../../frontend/src/map_page/types/map_page_types.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  const { includeHallways, byFloors } = req.body as NodesOptionsRequest;
  const graph: Graph = await createGraph(res, false);

  if (byFloors) {
    const nodesByFloor: NodesByFloor = {
      L2: graph.getNodesByFloor(FloorType.L2, includeHallways),
      L1: graph.getNodesByFloor(FloorType.L1, includeHallways),
      firstFloor: graph.getNodesByFloor(FloorType.first, includeHallways),
      secondFloor: graph.getNodesByFloor(FloorType.second, includeHallways),
      thirdFloor: graph.getNodesByFloor(FloorType.third, includeHallways),
    };
    res.send(JSON.stringify(nodesByFloor));
  }

  if (!byFloors) {
    const nodes: Array<Node> = graph.getNodes(includeHallways);
    res.send(JSON.stringify(nodes));
  }
});

export default router;
