import express, { Request, Response, Router } from "express";
import PrismaClient from "../bin/database-connection";
import { AddNodesOptionsRequest } from "common/src/types/map_page_types.ts";
import { Node } from "common/src/DataStructures.ts";
import { node } from "common/src/interfaces.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  try {
    const { nodes } = req.body as AddNodesOptionsRequest;

    // check that the new Nodes do not already exist
    const newNodeIds = nodes.map((newNode) => newNode.ID);
    const existingNodes = await PrismaClient.node.findMany({
      where: {
        nodeID: { in: newNodeIds },
      },
    });
    if (existingNodes.length > 0) {
      console.log(existingNodes);
      return res.status(400).json({
        message: "Duplicated Node Found",
        duplicatedNodes: existingNodes,
      });
    }

    await PrismaClient.node.createMany({
      data: nodes.map((newNode: Node) => {
        console.log(newNode);

        const newNodeBackend: node = {
          nodeID: newNode.ID as string,
          xcoord: Math.floor(newNode.x) as number,
          ycoord: Math.floor(newNode.y) as number,
          floor: newNode.floor as string,
          nodeType: newNode.type as string,
          building: newNode.building as string,
          longName: newNode.longName as string,
          shortName: newNode.shortName as string,
        };

        return newNodeBackend;
      }),
    });

    res.status(200).json({
      message: "Nodes added successfully",
    });
  } catch (error) {
    console.error("Failed to add nodes:", error);
    res.status(500).json({
      message: "Error adding nodes",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;
