// fetch room location from Node table
import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const roomFetch = await PrismaClient.node.findMany({
    where: {
      nodeType: {
        in: ["CONF", "DEPT", "ELEV", "INFO", "LABS", "REST", "STAI", "RETL"],
      },
    },
    select: {
      nodeID: true,
    },
    orderBy: {
      nodeID: "asc",
    },
  });
  res.json(roomFetch);
});

export default router;
