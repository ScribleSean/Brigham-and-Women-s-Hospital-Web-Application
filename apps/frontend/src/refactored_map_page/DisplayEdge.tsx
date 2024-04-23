import React, { useState, useEffect, useCallback } from "react";
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
import { displayToImageCoordinates } from "./scalingUtils.ts";

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
    scale,
    setDisableZoomPanning,
    translationX,
    translationY,
  } = useMapContext();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [dragging, setDragging] = useState(false);

  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
  const [initialStartPos, setInitialStartPos] = useState({ x: 0, y: 0 });
  const [initialEndPos, setInitialEndPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    setDisableZoomPanning(true);
    setDragging(true);
    const { imageX, imageY } = displayToImageCoordinates(
      event.clientX,
      event.clientY,
      translationX,
      translationY,
      scale,
      widthScaling,
      heightScaling,
    );
    setInitialMousePos({ x: imageX, y: imageY });
    setInitialStartPos({ x: edge.startNode.x, y: edge.startNode.y });
    setInitialEndPos({ x: edge.endNode.x, y: edge.endNode.y });
    event.preventDefault();
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging) return;
      console.log("Mouse Position:", event.clientX, event.clientY);
      console.log("Translations:", translationX, translationY);
      console.log("Scale:", scale);
      console.log("Width & Height Scaling:", widthScaling, heightScaling);

      // Calculate the new position of the node based on mouse movement
      const { imageX, imageY } = displayToImageCoordinates(
        event.clientX,
        event.clientY,
        translationX,
        translationY,
        scale,
        widthScaling,
        heightScaling,
      );

      const dx = imageX - initialMousePos.x;
      const dy = imageY - initialMousePos.y;

      const newStartNode = new Node(
        edge.startNode.ID,
        initialStartPos.x + dx,
        initialStartPos.y + dy,
        edge.startNode.floor,
        edge.startNode.building,
        edge.startNode.type,
        edge.startNode.longName,
        edge.startNode.shortName,
      );

      const newEndNode = new Node(
        edge.endNode.ID,
        initialEndPos.x + dx,
        initialEndPos.y + dy,
        edge.endNode.floor,
        edge.endNode.building,
        edge.endNode.type,
        edge.endNode.longName,
        edge.endNode.shortName,
      );

      const newEdge = new Edge(edge.ID, newStartNode, newEndNode);

      setEditedEdge(newEdge);
      if (graph) {
        setGraph(graph.editNode(newStartNode));
        setGraph(graph.editNode(newEndNode));
      }
      setUnsavedChanges(true);
      setEdgesToBeEdited([
        ...edgesToBeEdited,
        { oldEdge: edge, newEdge: newEdge },
      ]);
      setIsSaved(false);
    },
    [
      initialEndPos,
      initialMousePos,
      initialStartPos,
      edge,
      edgesToBeEdited,
      setEdgesToBeEdited,
      dragging,
      translationX,
      translationY,
      scale,
      widthScaling,
      heightScaling,
      graph,
      setGraph,
      setUnsavedChanges,
      setIsSaved,
    ],
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
    setDisableZoomPanning(false);
    // Possibly finalize position here, or send updates to a server
  }, [setDragging, setDisableZoomPanning]);

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

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
        <svg
          style={{
            pointerEvents: "all",
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        >
          <polyline
            style={{
              stroke: "darkblue",
              strokeWidth: 0.5,
              cursor: "pointer",
              pointerEvents: "visibleStroke",
            }}
            points={getEdgeCoordinates(edge)}
            stroke={red}
            strokeWidth="2"
            fill="none"
            strokeLinejoin="bevel"
            onClick={() => {
              console.log("Polyline clicked!");
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
            />
            <Autocomplete
              value={editedEdge.startNode.ID}
              onChange={(event, newValue) =>
                handleChange(event, newValue, "startNode")
              }
              options={graph ? graph.getNodesAll().map((node) => node.ID) : []}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Start Node ID" fullWidth />
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
                <TextField {...params} label="End Node ID" fullWidth />
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
