import express, { Request, Response, Router } from "express";
import { Graph, Path } from "../algorithms/DataStructures.ts";
import { createGraph } from "../algorithms/database_functions/createGraph.ts";
import { BFS } from "../algorithms/PathFinder.ts";
import { StartEndNodes } from "../../../frontend/src/map_page/types/map_page_types.ts";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  const graph: Graph = await createGraph(res);

  const { node1, node2 } = req.body as StartEndNodes;

  const bfs: BFS = new BFS(graph);

  const path: Path | undefined = bfs.findPath(node1, node2);

  if (!path) {
    res.sendStatus(404);
  }

  res.send(JSON.stringify(path));
});

export default router;
