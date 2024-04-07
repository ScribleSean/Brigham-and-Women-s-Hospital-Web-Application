import express, { Request, Response, Router } from "express";
import { Graph, Path } from "../algorithms/DataStructures";
import { createGraph } from "../algorithms/request_functions/createGraph";
import { PathOptionsRequest } from "../../../frontend/src/map_page/types/map_page_types";
import { createPath } from "../algorithms/request_functions/createPath.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  const { algorithm, includeStairs, nodes } = req.body as PathOptionsRequest;
  const graph: Graph = await createGraph(res, includeStairs);
  const paths: Array<Path> | undefined = await createPath(
    res,
    algorithm,
    graph,
    nodes,
  );
  res.send(JSON.stringify(paths));
});

export default router;
