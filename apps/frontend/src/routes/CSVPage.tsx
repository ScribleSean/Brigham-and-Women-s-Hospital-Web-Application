import { Outlet } from "react-router-dom";
import DragNDrop from "../components/FileUpload.tsx";
import { GetDataNodes } from "../components/NodesDataBaseTableDisplay.tsx";
import ExportNodeDataToCSVButton from "../components/ExportNodeDataButton.tsx";
import ExportEdgeDataButton from "../components/ExportEdgeDataButton.tsx";
import { GetDataEdges } from "../components/EdgesDataBaseTableDisplay.tsx";
import ExportAllDataToCSVButton from "../components/ExportAllButton.tsx";
import Navbar from "../components/SideNavbar.tsx";
import "../styles/csvPage.css";

export function CSVPage() {
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
    <div className={"sanitation-div"}>
      <div className={"navbar-container"}>
        <Navbar />
      </div>

      <Outlet></Outlet>

      <div className={"csv-page-container"}>
        <div className={"input-container"}>
          <div className={"node-data-input"}>
            <h1 className={"input-title-text"}>Node Data</h1>
            <DragNDrop onFileDrop={handleNodeFileDrop} />
            <div>
              <ExportNodeDataToCSVButton />
            </div>
            <br />
          </div>
          <div className={"edge-data-input"}>
            <h1 className={"input-title-text"}>Edge Data</h1>
            <DragNDrop onFileDrop={handleEdgeFileDrop}></DragNDrop>
            <div>
              <ExportEdgeDataButton></ExportEdgeDataButton>
            </div>
            <br />
          </div>
          <div className={"export-all-btn"}>
            <ExportAllDataToCSVButton />
          </div>
        </div>

        <div className={"tables-container"}>
          <hr />

          <h2 className={"table-title"}>Nodes</h2>
          <div className={"nodes-table-container"}>
            <GetDataNodes />
          </div>

          <hr />

          <h2 className={"table-title"}>Edges</h2>
          <div className={"edges-table-container"}>
            <GetDataEdges />
          </div>
        </div>
        <div>
          <p className={"footer"}>the end</p>
        </div>
      </div>
    </div>
  );
}
