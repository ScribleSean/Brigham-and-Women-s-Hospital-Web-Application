import express, { Request, Response, Router } from "express";
import { FloorType, Graph, Node } from "common/src/DataStructures.ts";
import { createGraph } from "../algorithms/request_functions/createGraph.ts";
import {
  NodesByFloor,
  NodesOptionsRequest,
} from "common/src/types/map_page_types.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  const { includeHallways, byFloors, showAllNodes } =
    req.body as NodesOptionsRequest;
  const graph: Graph = await createGraph(res, false);

  let getIncludeHallways = includeHallways;

  if (showAllNodes) {
    getIncludeHallways = true;
  }

  if (byFloors) {
    const nodesByFloor: NodesByFloor = {
      L2: graph.getNodesByFloor(FloorType.L2, getIncludeHallways),
      L1: graph.getNodesByFloor(FloorType.L1, getIncludeHallways),
      firstFloor: graph.getNodesByFloor(FloorType.first, getIncludeHallways),
      secondFloor: graph.getNodesByFloor(FloorType.second, getIncludeHallways),
      thirdFloor: graph.getNodesByFloor(FloorType.third, getIncludeHallways),
    };
    res.send(JSON.stringify(nodesByFloor));
  }

  if (!byFloors) {
    const nodes: Array<Node> = graph.getNodes(getIncludeHallways);
    res.send(JSON.stringify(nodes));
  }
});

export default router;
