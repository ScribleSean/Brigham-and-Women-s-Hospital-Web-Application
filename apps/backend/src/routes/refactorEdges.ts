import express, { Request, Router } from "express";
import { RefactorEdgesOptionsRequest } from "common/src/types/map_page_types.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request) {
  const { oldNewEdges } = req.body as RefactorEdgesOptionsRequest;
  console.log(oldNewEdges);
});

export default router;
