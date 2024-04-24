import FileUpload from "../components/FileUpload.tsx";
import { GetDataNodes } from "../components/NodesDataBaseTableDisplay.tsx";
import ExportNodeDataButton from "../components/ExportNodeDataButton.tsx";
import ExportEdgeDataButton from "../components/ExportEdgeDataButton.tsx";
import ExportEmployeeDataButton from "../components/ExportEmployeeDataButton.tsx";
import { GetDataEdges } from "../components/EdgesDataBaseTableDisplay.tsx";
import { GetDataEmployee } from "../components/EmployeeDataBaseTableDisplay.tsx";
import ExportAllButton from "../components/ExportAllButton.tsx";
import "../styles/csvPage.css";
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import ClearDataButton from "../components/ClearDataButton.tsx";
import styles from "../styles/CSVPage.module.css";

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
      {value === index && <Box>{children}</Box>}
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

  const handleEmployeeFileDrop = async (file: File) => {
    // Create a FileReader
    const employeeReader = new FileReader();

    // Set up a callback for when the file is loaded
    employeeReader.onload = async (event) => {
      if (event.target) {
        // Extract the CSV content as a string
        const csvString = event.target.result as string;

        console.log(csvString);

        try {
          const res = await fetch("/api/employee-populate", {
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
    employeeReader.readAsText(file);
  };

  return (
    <div className={`${styles.pageContainer}`}>
      <div className={`${styles.header}`}>
        <h1 className={`${styles.pageTitle}`}>Database</h1>
        <div className={`${styles.buttonCluster}`}>
          <ExportAllButton />
          <ClearDataButton />
        </div>
      </div>
      <div className={`${styles.tabs}`}>
        <Box
          sx={{
            border: 1,
            borderRadius: "5px",
            borderColor: "divider",
          }}
        >
          <Tabs value={value} onChange={handleChange} variant={"fullWidth"}>
            <Tab label="Nodes" />
            <Tab label="Edges" />
            <Tab label="Employees" />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className={`${styles.tabPanel}`}>
          <div className={`${styles.subheader}`}>
            <h2 className={`${styles.pageSubheading}`}>Nodes</h2>
            <div className={`${styles.buttonCluster}`}>
              <FileUpload onFileDrop={handleNodeFileDrop} />
              <ExportNodeDataButton />
            </div>
          </div>
          <GetDataNodes />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={`${styles.tabPanel}`}>
          <div className={`${styles.subheader}`}>
            <h2 className={`${styles.pageSubheading}`}>Edges</h2>
            <div className={`${styles.buttonCluster}`}>
              <FileUpload onFileDrop={handleEdgeFileDrop} />
              <ExportEdgeDataButton />
            </div>
          </div>
          <GetDataEdges />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className={`${styles.tabPanel}`}>
          <div className={`${styles.subheader}`}>
            <h2 className={`${styles.pageSubheading}`}>Employees</h2>
            <div className={`${styles.buttonCluster}`}>
              <FileUpload onFileDrop={handleEmployeeFileDrop} />
              <ExportEmployeeDataButton />
            </div>
          </div>
          <GetDataEmployee />
        </div>
      </CustomTabPanel>
    </div>
  );
}
