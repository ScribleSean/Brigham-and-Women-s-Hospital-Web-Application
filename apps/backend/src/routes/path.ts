import express, { Request, Response, Router } from "express";
import { Graph, Path } from "../algorithms/DataStructures";
import { createGraph } from "../algorithms/database_functions/createGraph";
import { BFS } from "../algorithms/PathFinder";
import { StartEndNodes } from "../../../frontend/src/map_page/types/map_page_types";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  const graph: Graph = await createGraph(res);

  console.log(req);

  const { node1, node2 } = req.body as StartEndNodes;
  console.log(node1);
  console.log(node2);
  const node1ID: string = node1.ID;
  const node2ID: string = node2.ID;

  const startNode = graph.getNodeByID(node1ID);
  const endNode = graph.getNodeByID(node2ID);

  const bfs: BFS = new BFS(graph);

  if (startNode !== undefined && endNode !== undefined) {
    const path: Path | undefined = bfs.findPath(startNode, endNode);
    const paths: Array<Path> | undefined = path?.getSubPathsByFloor();

    console.log(path);

    if (!path) {
      console.log("Could not find the path");
      res.sendStatus(404);
    }
    res.send(JSON.stringify(paths));
  }
});

export default router;
