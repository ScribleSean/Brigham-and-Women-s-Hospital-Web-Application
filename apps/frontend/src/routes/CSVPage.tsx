import {Outlet} from "react-router-dom";
import DragNDrop from "../components/FileUpload.tsx";
import {GetDataNodes} from "../components/NodesDataBaseTableDisplay.tsx";
import ExportNodeDataToCSVButton from "../components/ExportNodeDataButton.tsx";
import ExportEdgeDataButton from "../components/ExportEdgeDataButton.tsx";
import {GetDataEdges} from "../components/EdgesDataBaseTableDisplay.tsx";
import ExportAllDataToCSVButton from "../components/ExportAllButton.tsx";

export function NodeEdgeData() {

    const handleNodeFileDrop = async(file: File) => {
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
                        body: JSON.stringify({csvString}), // Send the CSV string as JSON
                    });


                    console.log(res);
                } catch (error) {
                    console.error("Error:", error);
                }
            }

        };
        nodeReader.readAsText(file);
    };

    const handleEdgeFileDrop = async(file: File) => {
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
                        body: JSON.stringify({csvString}), // Send the CSV string as JSON
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
        <>
            <Outlet></Outlet>
            <div>
                <div>
                    <div>
                        <h1>Node Data</h1>
                        <div>
                            <ExportNodeDataToCSVButton></ExportNodeDataToCSVButton>
                            <ExportAllDataToCSVButton></ExportAllDataToCSVButton>
                        </div>
                        <br/>
                        <DragNDrop onFileDrop={handleNodeFileDrop}></DragNDrop>
                    </div>
                    <div>
                        <h1 >Edge Data</h1>
                        <div>
                            <ExportEdgeDataButton></ExportEdgeDataButton>
                        </div>
                        <br/>
                        <DragNDrop onFileDrop={handleEdgeFileDrop}></DragNDrop>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <GetDataNodes></GetDataNodes>
                </div>
                <div>
                    <GetDataEdges></GetDataEdges>
                </div>
            </div>
        </>
    );

}
