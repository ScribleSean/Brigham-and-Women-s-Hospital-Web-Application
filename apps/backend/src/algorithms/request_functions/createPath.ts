import { Response } from "express";
import { StartEndNodes } from "../../../../../packages/common/src/types/map_page_types.ts";
import { Graph } from "common/src/data_structures/Graph.ts";
import { ASTAR } from "common/src/path_finding/ASTAR.ts";
import { Path } from "common/src/data_structures/Path.ts";
import { IPathFinder } from "common/src/path_finding/IPathFinder.ts";
import { BFS } from "common/src/path_finding/BFS.ts";
import { DFS } from "common/src/path_finding/DFS.ts";
import { Dijkstra } from "common/src/path_finding/Dijkstra.ts";
import { AlgorithmType } from "common/src/data_structures/AlgorithmType.ts";

export { createPath };
async function createPath(
  res: Response,
  algorithm: AlgorithmType,
  graph: Graph,
  startEndNodes: StartEndNodes,
): Promise<Path | undefined> {
  const { node1ID, node2ID } = startEndNodes;

  const startNode = graph.getNodeByID(node1ID);
  const endNode = graph.getNodeByID(node2ID);

  let pathFinder: IPathFinder;

  switch (algorithm) {
    case AlgorithmType._BFS:
      pathFinder = new BFS(graph);
      break;
    case AlgorithmType._DFS:
      pathFinder = new DFS(graph);
      break;
    case AlgorithmType._Dijkstra:
      pathFinder = new Dijkstra(graph);
      break;
    case AlgorithmType._ASTAR:
      pathFinder = new ASTAR(graph);
      break;
    default:
      pathFinder = new ASTAR(graph);
      break;
  }

  if (startNode !== undefined && endNode !== undefined) {
    const path: Path | undefined = pathFinder.findPath(startNode, endNode);

    if (!path) {
      console.log("Could not find the path");
      res.sendStatus(404);
      return undefined;
    }

    return path;
  }

  return undefined;
}
