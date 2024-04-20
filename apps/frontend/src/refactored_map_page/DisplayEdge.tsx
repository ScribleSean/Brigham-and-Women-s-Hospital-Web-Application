import React, { useState, useEffect } from "react";
import {
  EdgeDisplayProps,
  EditorMode,
  OldNewEdge,
} from "common/src/types/map_page_types.ts";
import { Edge } from "common/src/data_structures/Edge.ts";
import { Node } from "common/src/data_structures/Node.ts";
import { useMapContext } from "./MapContext.ts";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default EdgeDisplay;

function EdgeDisplay(props: EdgeDisplayProps) {
  const { edge, scaling } = props;
  const { widthScaling, heightScaling } = scaling;
  const {
    editorMode,
    showEdges,
    setEdgesToBeEdited,
    edgesToBeEdited,
    graph,
    setGraph,
    setEdgesToBeDeleted,
    edgesToBeDeleted,
    setUnsavedChanges,
  } = useMapContext();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const editShowModal = (value: boolean) => {
    setShowModal(value);
  };

  const [editedEdge, setEditedEdge] = useState<Edge>(
    new Edge(edge.ID, edge.startNode, edge.endNode),
  );
  const [tempEdge, setTempEdge] = useState<Edge>(
    new Edge(edge.ID, edge.startNode, edge.endNode),
  );

  function getEdgeCoordinates(edge: Edge): string {
    const nodes: [Node, Node] = [edge.startNode, edge.endNode];
    return nodes
      .map((node) => `${node.x * widthScaling},${node.y * heightScaling}`)
      .join(" ");
  }

  const red: string = "red";

  const handleDeleteEdge = (deletedEdge: Edge): void => {
    if (graph) {
      setGraph(graph.removeEdge(deletedEdge));
      setEdgesToBeDeleted([...edgesToBeDeleted, deletedEdge]);
      setUnsavedChanges(true);
    }
  };

  function makeEdge(edge: Edge) {
    return new Edge(edge.ID, edge.startNode, edge.endNode);
  }

  useEffect(() => {
    if (isSaved) {
      const newEdge: Edge = makeEdge(editedEdge);
      const newOldNewEdge: OldNewEdge = {
        oldEdge: edge,
        newEdge: newEdge,
      };

      if (graph) {
        setGraph(graph.editEdge(newEdge));
        setEdgesToBeEdited([...edgesToBeEdited, newOldNewEdge]);
        setUnsavedChanges(true);
      }
      setIsSaved(false);
    }
  }, [
    edge,
    edgesToBeEdited,
    setEdgesToBeEdited,
    editedEdge,
    setEditedEdge,
    isSaved,
    graph,
    setGraph,
    setUnsavedChanges,
  ]);

  const handleChange = (
    event: React.SyntheticEvent,
    nodeID: string | null,
    nodeType: "startNode" | "endNode",
  ) => {
    if (nodeID) {
      if (nodeType === "startNode" && graph) {
        const newNode = graph.getNodeByID(nodeID);
        if (newNode) {
          edge.startNode = newNode;
        }
      } else if (nodeType === "endNode" && graph) {
        const newNode = graph.getNodeByID(nodeID);
        if (newNode) {
          edge.endNode = newNode;
        }
      }
    }
  };

  const handleSave = () => {
    setIsSaved(true);
    setShowModal(false);
    setTempEdge(editedEdge);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditedEdge(tempEdge);
  };

  return (
    showEdges &&
    editorMode !== EditorMode.disabled && (
      <>
        <svg style={{ pointerEvents: "all" }}>
          {" "}
          {/* Ensure SVG allows pointer events */}
          <polyline
            style={{
              stroke: "blue",
              strokeWidth: 3,
              cursor: "pointer",
              pointerEvents: "visibleStroke",
            }}
            points={getEdgeCoordinates(edge)}
            stroke={red}
            strokeWidth="2"
            fill="none"
            strokeLinejoin="bevel"
            onClick={() => {
              console.log("Polyline clicked!"); // Debug: Console log to check click
              editShowModal(true);
            }}
          />
        </svg>
        <Dialog open={showModal} onClose={handleClose}>
          <DialogTitle>Edge Information</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="ID"
              type="text"
              fullWidth
              name="ID"
              value={edge.ID}
              InputProps={{
                readOnly: true,
              }}
            />
            <Autocomplete
              value={editedEdge.startNode.ID}
              onChange={(event, newValue) =>
                handleChange(event, newValue, "startNode")
              }
              options={graph ? graph.getNodesAll().map((node) => node.ID) : []}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Start Node ID" />
              )}
            />
            <Autocomplete
              value={editedEdge.endNode.ID}
              onChange={(event, newValue) =>
                handleChange(event, newValue, "endNode")
              }
              options={graph ? graph.getNodesAll().map((node) => node.ID) : []}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="End Node ID" />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSave}>Save</Button>
            <DeleteForeverIcon
              onClick={() => handleDeleteEdge(edge)}
              sx={{
                position: "absolute",
                left: 0,
                fontSize: "2rem",
                ":hover": { cursor: "pointer" },
              }}
            />
          </DialogActions>
        </Dialog>
      </>
    )
  );
}
