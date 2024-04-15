import express, { Request, Response, Router } from "express";
import PrismaClient from "../bin/database-connection";
import { AddNodesOptionsRequest } from "common/src/types/map_page_types.ts";
import { Node, Edge } from "common/src/DataStructures.ts";

const router: Router = express.Router();

router.post("/", async function (req: Request, res: Response) {
  try {
    const { nodesWithAssociatedEdges } = req.body as AddNodesOptionsRequest;

    const newNodes = nodesWithAssociatedEdges.map(
      (nodesWithAssociatedEdge) => nodesWithAssociatedEdge.node,
    );
    const newEdges = nodesWithAssociatedEdges
      .map((nodesWithAssociatedEdge) => nodesWithAssociatedEdge.associatedEdges)
      .flat();

    // check that the new Nodes do not already exist
    const newNodeIds = newNodes.map((newNode) => newNode.ID);
    const existingNodes = await PrismaClient.node.findMany({
      where: {
        nodeID: { in: newNodeIds },
      },
    });
    if (existingNodes.length > 0) {
      return res.status(400).json({
        message: "Duplicated Node Found",
        duplicatedNodes: existingNodes,
      });
    }

    // check that the added edges do not already exist:
    // not same ID, not same start and endNode, not same endNode startNode
    const existingEdges = await PrismaClient.edge.findMany({
      where: {
        OR: newEdges.map((edge) => ({
          OR: [
            {
              AND: [
                { startNodeID: edge.startNode.ID },
                { endNodeID: edge.endNode.ID },
              ],
            },
            {
              AND: [
                { startNodeID: edge.endNode.ID },
                { endNodeID: edge.startNode.ID },
              ],
            },
            { edgeID: edge.ID },
          ],
        })),
      },
    });
    if (existingEdges.length > 0) {
      return res.status(400).json({
        message: "Duplicated Edge Found",
        duplicatedNodes: existingNodes,
      });
    }

    // Check that the start node and endNode are not the same
    if (newEdges.some((edge: Edge) => (edge.startNode.ID = edge.endNode.ID))) {
      return res.status(400).json({
        message: "Edge with the same start and endNode",
      });
    }

    //Check that each edge references at least one node that is newly added
    const newEdgesContainNewNodes: boolean = newEdges.every((edge) =>
      newNodes.some(
        (node) => node.ID === edge.startNode.ID || node.ID === edge.endNode.ID,
      ),
    );
    if (!newEdgesContainNewNodes) {
      return res.status(400).json({
        message: "At least one of the edges didn't include any new node",
      });
    }

    // We also need to check that it references an already existing node

    // TODO: CHECK THAT THE START AND END NODE IN EACH EDGE EXISTS

    const transaction = await PrismaClient.$transaction([
      PrismaClient.node.createMany({
        data: newNodes.map((newNode: Node) => {
          return {
            nodeID: newNode.ID,
            xcoord: newNode.getX(),
            ycoord: newNode.getY(),
            floor: newNode.getFloor(),
            building: newNode.getBuilding(),
            nodeType: newNode.getType(),
            longName: newNode.getLongName(),
            shortName: newNode.getShortName(),
          };
        }),
      }),
      PrismaClient.edge.createMany({
        data: newEdges.map((edge: Edge) => {
          return {
            edgeID: edge.ID,
            startNodeID: edge.startNode.ID,
            endNodeID: edge.endNode.ID,
            startNode: edge.startNode,
            endNode: edge.endNode,
          };
        }),
      }),
    ]);

    res.status(200).json({
      message: "Nodes and edges added successfully",
      details: transaction,
    });
  } catch (error) {
    console.error("Failed to add nodes and edges:", error);
    res.status(500).json({
      message: "Error adding nodes and edges",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default router;
