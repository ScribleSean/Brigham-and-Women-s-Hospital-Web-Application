import React, { useState, useEffect } from "react";
import { edge } from "common/src/interfaces.ts";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "edgeID", headerName: "Edge ID", width: 300 },
  { field: "startNodeID", headerName: "Start Node ID", width: 300 },
  { field: "endNodeID", headerName: "End Node ID", width: 300 },
];

const DataGridEdges: React.FC<{ tableData: edge[] }> = ({ tableData }) => {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} />
    </div>
  );
};

interface GetDataEdgesProps {
  dataUpdated: boolean;
}
export const GetDataEdges: React.FC<GetDataEdgesProps> = ({ dataUpdated }) => {
  const [data, setData] = useState<edge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch("/api/edge-populate");

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(
            `Please load edge data and ensure that node data is already populated ${response.status}`,
          );
        }

        // Parse the JSON response
        const result = await response.json();

        const dataWithIDs = result.map((item: edge) => ({
          ...item,
          id: item.edgeID,
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
      <DataGridEdges tableData={data}></DataGridEdges>
    </div>
  );
};
