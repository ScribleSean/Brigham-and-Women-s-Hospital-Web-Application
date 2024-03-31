import React, { useReducer } from "react";
import {
  Edge,
  getMapNodesEdges,
  mapEdges,
  MapNode,
  mapNodes,
} from "../objects/mapNodes.ts";
import { postEdgesAxios, postNodesAxios } from "../objects/nodesAxios.ts";

const Nodes = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleExportNodes = () => {
    const rows: string[] = [];
    rows.push(
      "nodeID,xcoord,ycoord,floor,building,nodeType,longName,shortName",
    );
    mapNodes.forEach((row: MapNode) => {
      rows.push(Object.values(row).slice(0, 8).join(","));
    });
    const csvArray = rows.join("\r\n");
    const a = document.createElement("a");
    a.href = "data:attachment/csv," + encodeURIComponent(csvArray);
    a.target = "_blank";
    a.download = "nodes.csv";
    document.body.appendChild(a);
    a.click();
  };

  const handleImportNodes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const importedMapNodes: string[] = [];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const content = event.target.result;
        const lines = (content as string).replace("\r", "").split("\n");
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].split(",");
          if (line[0] === "") continue;
          const node = JSON.stringify({
            nodeID: line[0],
            xcoord: parseInt(line[1]),
            ycoord: parseInt(line[2]),
            floor: line[3],
            building: line[4],
            nodeType: line[5],
            longName: line[6],
            shortName: line[7],
          });
          importedMapNodes.push(node);
        }
      }

      postNodesAxios("true", importedMapNodes).then(() => {
        getMapNodesEdges().then(() => {
          forceUpdate();
        });
      });
    };
    reader.readAsText(file);

    // post all new nodes & replace all old ones
  };

  const rows: React.ReactElement[] = [];
  mapNodes.forEach((node: MapNode) => {
    rows.push(
      <tr key={node.nodeID}>
        <td>{node.nodeID}</td>
        <td>{node.xcoord}</td>
        <td>{node.ycoord}</td>
        <td>{node.floor}</td>
        <td>{node.building}</td>
        <td>{node.nodeType}</td>
        <td>{node.longName}</td>
        <td>{node.shortName}</td>
      </tr>,
    );
  });

  return (
    <>
      <div>
        <button onClick={handleExportNodes}>Export CSV</button>
        <label>
          <input
            onChange={handleImportNodes}
            type={"file"}
            accept={".csv"}
            hidden
          />
          Import CSV
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Node ID</th>
            <th>xcoords</th>
            <th>ycoords</th>
            <th>Floor</th>
            <th>Building</th>
            <th>Node Type</th>
            <th>Long Name</th>
            <th>Short Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

const Edges = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleExportEdges = () => {
    const rows: string[] = [];
    rows.push("edgeID,startNode,endNode");
    mapEdges.forEach((row: Edge) => {
      rows.push(Object.values(row).slice(0, 3).join(","));
    });
    const csvArray = rows.join("\r\n");
    const a = document.createElement("a");
    a.href = "data:attachment/csv," + encodeURIComponent(csvArray);
    a.target = "_blank";
    a.download = "edges.csv";
    document.body.appendChild(a);
    a.click();
  };

  const handleImportEdges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const importedMapEdges: string[] = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const content = event.target.result;
        const lines = (content as string).split("\n");
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].replace("\r", "").split(",");
          if (line[0] === "") continue;
          const edge: string = JSON.stringify({
            edgeID: line[0],
            startNode: line[1],
            endNode: line[2],
          });
          importedMapEdges.push(edge);
        }
      }
      postEdgesAxios("true", importedMapEdges)
        // update local store
        .then(() => {
          getMapNodesEdges().then(() => {
            forceUpdate();
          });
        });
    };
    reader.readAsText(file);

    // post all new nodes & replace all old ones
  };

  const rows: React.ReactElement[] = [];
  mapEdges.forEach((edge: Edge) => {
    rows.push(
      <tr key={edge.edgeID}>
        <td>{edge.edgeID}</td>
        <td>{edge.startNode}</td>
        <td>{edge.endNode}</td>
      </tr>,
    );
  });

  return (
    <>
      <div>
        <button onClick={handleExportEdges}>Export CSV</button>
        <label>
          <input
            onChange={handleImportEdges}
            type={"file"}
            accept={".csv"}
            hidden
          />
          Import CSV
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Edge ID</th>
            <th>Start Node</th>
            <th>End Node</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export const FileRoute = () => {
  return (
    <div>
      <Nodes />
      <Edges />
    </div>
  );
};
