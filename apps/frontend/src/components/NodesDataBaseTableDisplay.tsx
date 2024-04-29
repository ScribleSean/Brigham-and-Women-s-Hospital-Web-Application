import React, { useState, useEffect } from "react";
import { node } from "common/src/interfaces.ts";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "nodeID", headerName: "Node ID", width: 130 },
  { field: "xcoord", headerName: "X-Coordinate", width: 130 },
  { field: "ycoord", headerName: "Y-Coordinate", width: 130 },
  { field: "floor", headerName: "Floor", width: 130 },
  { field: "building", headerName: "Building", width: 130 },
  { field: "nodeType", headerName: "Node Type", width: 130 },
  { field: "longName", headerName: "Long Name", width: 300 },
  { field: "shortName", headerName: "Short Name", width: 250 },
];

const DataGridNodes: React.FC<{ tableData: node[] }> = ({ tableData }) => {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} />
    </div>
  );
};

interface GetDataNodesProps {
  dataUpdated: boolean;
}

export const GetDataNodes: React.FC<GetDataNodesProps> = ({ dataUpdated }) => {
  const [data, setData] = useState<node[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch("/api/node-populate");

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`Please load node data ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();

        const dataWithIDs = result.map((item: node) => ({
          ...item,
          id: item.nodeID,
        }));

        // Set the data in the state
        setData(dataWithIDs);
      } catch (err) {
        // Handle errors
        console.log(err);
      } finally {
        // Set loading to false, indicating that the request has completed
        setLoading(false);
      }
    };

    fetchData().then();
  }, [dataUpdated]); //

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/*<TableNodes tableData={data}></TableNodes>*/}
      <DataGridNodes tableData={data}></DataGridNodes>
    </div>
  );
};
