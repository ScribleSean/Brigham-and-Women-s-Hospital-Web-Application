import React, { useState, useEffect, CSSProperties } from "react";
import {
  EdgeDisplayProps,
  EditorMode,
  OldNewEdge,
} from "common/src/types/map_page_types.ts";
import { Edge } from "common/src/data_structures/Edge.ts";
import { Node } from "common/src/data_structures/Node.ts";
import { SVGProps } from "react";
import { useMapContext } from "./MapContext.ts";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Box,
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

  function getPolylineProps(
    coordinates: string,
    strokeColor: string,
  ): SVGProps<SVGPolylineElement> {
    return {
      points: coordinates,
      stroke: strokeColor,
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "bevel",
    };
  }

  const handleDeleteEdge = (deletedEdge: Edge): void => {
    if (graph) {
      setGraph(graph.deleteEdge(deletedEdge));
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

  const polylineStyle: CSSProperties = {
    zIndex: 10,
    pointerEvents: "auto",
    cursor: "pointer",
  };

  return (
    showEdges &&
    editorMode !== EditorMode.disabled && (
      <>
        <polyline
          style={polylineStyle}
          {...getPolylineProps(getEdgeCoordinates(edge), red)}
          onClick={() => {
            editShowModal(true);
          }}
        />
        <Dialog open={showModal} onClose={handleClose}>
          <DialogTitle>Node Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField
                margin="dense"
                label="ID"
                type="text"
                fullWidth
                name="ID"
                value={edge.ID}
              />
              <Box>
                <Autocomplete
                  value={editedEdge.startNode.ID}
                  onChange={(event, newValue: string | null) =>
                    handleChange(event, newValue, "startNode")
                  }
                  options={
                    graph
                      ? graph.getNodesAll().map((node: Node) => node.ID)
                      : new Array<string>()
                  }
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box>
                <Autocomplete
                  value={editedEdge.endNode.ID}
                  onChange={(event, newValue: string | null) =>
                    handleChange(event, newValue, "endNode")
                  }
                  options={
                    graph
                      ? graph.getNodesAll().map((node: Node) => node.ID)
                      : new Array<string>()
                  }
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            </DialogContentText>
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
