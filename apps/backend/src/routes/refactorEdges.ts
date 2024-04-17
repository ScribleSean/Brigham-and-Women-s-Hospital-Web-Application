import express, { Request, Response, Router } from "express";
import PrismaClient from "../bin/database-connection";
import { RefactorEdgesOptionsRequest } from "common/src/types/map_page_types.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  try {
    const { oldNewEdges } = req.body as RefactorEdgesOptionsRequest;
    console.log(oldNewEdges);

    // Check that the edge ID has not been changed
    const changesID = oldNewEdges.some(
      ({ oldEdge, newEdge }) => oldEdge.ID !== newEdge.ID,
    );
    if (changesID) {
      return res.status(400).json({
        message: "You are not allowed to change the ID of an edge",
      });
    }

    // Check existence of the edges (The IDS already exist)
    const edgeIDs = oldNewEdges.map(({ oldEdge }) => oldEdge.ID);
    const existingEdges = await PrismaClient.edge.findMany({
      where: { edgeID: { in: edgeIDs } },
    });
    if (existingEdges.length !== oldNewEdges.length) {
      return res.status(404).json({
        message: "One or more edges could not be found",
      });
    }

    // Check that the referenced nodes exist
    const nodeIDs = oldNewEdges.flatMap(({ newEdge }) => [
      newEdge.startNode.ID,
      newEdge.endNode.ID,
    ]);
    const nodes = await PrismaClient.node.findMany({
      where: { nodeID: { in: nodeIDs } },
      select: { nodeID: true },
    });
    if (nodes.length !== new Set(nodeIDs).size) {
      return res.status(404).json({
        message: "One or more nodes do not exist",
      });
    }

    // Check that the refactored edges do not have the same start and end node
    if (
      oldNewEdges.some(
        ({ newEdge }) => newEdge.startNode.ID === newEdge.endNode.ID,
      )
    ) {
      return res.status(400).json({
        message: "Edge with the same start and end node is not allowed",
      });
    }

    // Prepare update operations for edges
    const updateOperations = oldNewEdges.map(({ newEdge }) =>
      PrismaClient.edge.update({
        where: { edgeID: newEdge.ID },
        data: {
          startNodeID: newEdge.startNode.ID,
          endNodeID: newEdge.endNode.ID,
        },
      }),
    );

    // Execute all updates in a transaction
    await PrismaClient.$transaction(updateOperations);

    res.status(200).json({
      message: "Edges updated successfully",
    });
  } catch (error) {
    console.error("Failed to update edges:", error);
    res.status(500).json({
      message: "Error updating edges",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;
