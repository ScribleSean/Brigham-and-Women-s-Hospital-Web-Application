import { Response } from "express";
import {
  BuildingType,
  FloorType,
  Graph,
  Node,
  NodeType,
} from "../DataStructures";
import PrismaClient from "../../bin/database-connection";

export { createGraph };

async function createGraph(res: Response): Promise<Graph> {
  const graph: Graph = new Graph();
  console.log("Before FindMany Edges");
  const edges = await PrismaClient.edges.findMany();
  console.log("After FindMany Edges");
  if (edges === null) {
    res.sendStatus(404);
    console.log("Could not get the edges");
  }
  console.log(edges);
  for (const edge of edges) {
    console.log(edge);
    const startNodeID: string = edge.startNodeID;
    const endNodeID: string = edge.endNodeID;
    console.log("Before findUnique Node");
    const node1 = await PrismaClient.nodes.findUnique({
      where: {
        nodeID: startNodeID,
      },
    });
    console.log("After FindUnique Node1");
    const node2 = await PrismaClient.nodes.findUnique({
      where: {
        nodeID: endNodeID,
      },
    });

    if (node1 === null || node2 === null) {
      res.sendStatus(404);
      console.log("could not find one of the nodes");
    }

    if (node1 !== null && node2 !== null) {
      const startNode: Node = new Node(
        node1.nodeID as string,
        node1.xcoord as number,
        node1.ycoord as number,
        node1.floor as FloorType,
        node1.building as BuildingType,
        node1.nodeType as NodeType,
        node1.longName as string,
        node1.shortName as string,
      );

      const endNode: Node = new Node(
        node2.nodeID as string,
        node2.xcoord as number,
        node2.ycoord as number,
        node2.floor as FloorType,
        node2.building as BuildingType,
        node2.nodeType as NodeType,
        node2.longName as string,
        node2.shortName as string,
      );

      console.log(startNode);
      console.log(endNode);

      graph.addEdge(startNode, endNode);
      graph.addEdge(endNode, startNode);

      console.log(graph);
    }
  }
  return graph;
}
