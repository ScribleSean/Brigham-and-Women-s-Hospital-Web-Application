import { Response } from "express";
import { StartEndNodes } from "../../../../frontend/src/map_page/types/map_page_types.ts";
import { Graph } from "../data_structures/Graph.ts";
import { ASTAR } from "../path_finding/ASTAR.ts";
import { Path } from "../data_structures/Path.ts";
import { IPathFinder } from "../path_finding/IPathFinder.ts";
import { BFS } from "../path_finding/BFS.ts";
import { DFS } from "../path_finding/DFS.ts";
import { Dijkstra } from "../path_finding/Dijkstra.ts";
import { AlgorithmType } from "../data_structures/AlgorithmType.ts";

export { createPath };
async function createPath(
  res: Response,
  algorithm: AlgorithmType,
  graph: Graph,
  startEndNodes: StartEndNodes,
): Promise<Array<Path> | undefined> {
  const { node1, node2 } = startEndNodes;
  console.log(node1);
  console.log(node2);
  const node1ID: string = node1.ID;
  const node2ID: string = node2.ID;

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
    const paths: Array<Path> | undefined = path?.getSubPathsByFloor();

    if (!path) {
      console.log("Could not find the path");
      res.sendStatus(404);
      return undefined;
    }

    return paths;
  }

  return undefined;
}
