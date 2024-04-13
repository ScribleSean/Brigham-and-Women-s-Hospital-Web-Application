import FileUpload from "../components/FileUpload.tsx";
import { GetDataNodes } from "../components/NodesDataBaseTableDisplay.tsx";
import ExportNodeDataButton from "../components/ExportNodeDataButton.tsx";
import ExportEdgeDataButton from "../components/ExportEdgeDataButton.tsx";
import { GetDataEdges } from "../components/EdgesDataBaseTableDisplay.tsx";
import ExportAllButton from "../components/ExportAllButton.tsx";
import "../styles/csvPage.css";
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import ClearDataButton from "../components/ClearDataButton.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function CSVPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNodeFileDrop = async (file: File) => {
    // Create a FileReader
    const nodeReader = new FileReader();

    // Set up a callback for when the file is loaded
    nodeReader.onload = async (event) => {
      if (event.target) {
        // Extract the CSV content as a string
        const csvString = event.target.result as string;

        console.log(csvString);

        try {
          const res = await fetch("/api/node-populate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the appropriate content type
            },
            body: JSON.stringify({ csvString }), // Send the CSV string as JSON
          });

          console.log(res);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    nodeReader.readAsText(file);
  };

  const handleEdgeFileDrop = async (file: File) => {
    // Create a FileReader
    const edgeReader = new FileReader();

    // Set up a callback for when the file is loaded
    edgeReader.onload = async (event) => {
      if (event.target) {
        // Extract the CSV content as a string
        const csvString = event.target.result as string;

        console.log(csvString);

        try {
          const res = await fetch("/api/edge-populate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the appropriate content type
            },
            body: JSON.stringify({ csvString }), // Send the CSV string as JSON
          });

          console.log(res);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    edgeReader.readAsText(file);
  };

  return (
    <div>
      <div className={"csv-page-container"}>
        <div className={"header-container"}>
          <h1 className={"page-title"}>Map Nodes and Edges</h1>
          <div className={"btn-cluster"}>
            <ExportAllButton />
            <ClearDataButton />
          </div>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={value} onChange={handleChange} variant={"fullWidth"}>
              <Tab label="Nodes" />
              <Tab label="Edges" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className={"input-container"}>
              <h1 className={"input-title-text"}>Node Data</h1>
              <div className={"btn-cluster"}>
                <FileUpload onFileDrop={handleNodeFileDrop} />
                <ExportNodeDataButton />
              </div>
            </div>
            <GetDataNodes />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className={"input-container"}>
              <h1 className={"input-title-text"}>Edge Data</h1>
              <div className={"btn-cluster"}>
                <FileUpload onFileDrop={handleEdgeFileDrop} />
                <ExportEdgeDataButton />
              </div>
            </div>
            <GetDataEdges />
          </CustomTabPanel>
        </Box>
        <div>
          <p className={"footer"}>the end</p>
        </div>
      </div>
    </div>
  );
}
