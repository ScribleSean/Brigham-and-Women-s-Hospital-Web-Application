import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import {
  AddEdgesOptionsRequest,
  AddNodesOptionsRequest,
  DeleteEdgesOptionsRequest,
  DeleteNodesOptionsRequest,
  EditorMode,
  NodeWithAssociatedEdges,
  OldNewEdge,
  OldNewNode,
  RefactorEdgesOptionsRequest,
  RefactorNodesOptionsRequest,
} from "common/src/types/map_page_types.ts";
import { Node } from "common/src/data_structures/Node.ts";
import { Edge } from "common/src/data_structures/Edge.ts";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default ConfirmChanges;

function ConfirmChanges() {
  const {
    editorMode,
    nodesToBeDeleted,
    setNodesToBeDeleted,
    nodesToBeEdited,
    setNodesToBeEdited,
    edgesToBeDeleted,
    setEdgesToBeDeleted,
    edgesToBeEdited,
    setEdgesToBeEdited,
    nodesToBeAdded,
    setNodesToBeAdded,
    edgesToBeAdded,
    setEdgesToBeAdded,
    unsavedChanges,
    setUnsavedChanges,
  } = useMapContext();

  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const deleteNodes = async () => {
    try {
      const deleteNodesOptionsRequest: DeleteNodesOptionsRequest = {
        nodes: nodesToBeDeleted,
      };
      await axios.delete("/api/delete-nodes-and-associated-edges", {
        data: deleteNodesOptionsRequest,
      });
      setNodesToBeDeleted(new Array<Node>());
    } catch (error) {
      console.error("Failed to delete nodes data:", error);
    }
  };

  const editNodes = async () => {
    if (nodesToBeEdited.length > 0) {
      try {
        const refactorNodesOptionsRequest: RefactorNodesOptionsRequest = {
          oldNewNodes: nodesToBeEdited,
        };
        await axios.post("/api/refactor-nodes", refactorNodesOptionsRequest);
        setNodesToBeEdited(new Array<OldNewNode>());
      } catch (error) {
        console.error("Failed to refactor nodes data:", error);
      }
    }
  };

  const addNodes = async () => {
    if (nodesToBeAdded.length > 0) {
      try {
        const addNodesOptionsRequest: AddNodesOptionsRequest = {
          nodesWithAssociatedEdges: nodesToBeAdded,
        };
        await axios.post(
          "/api/add-nodes-and-associated-edges",
          addNodesOptionsRequest,
        );
        setNodesToBeAdded(new Array<NodeWithAssociatedEdges>());
      } catch (error) {
        console.error("Failed to add nodes data:", error);
      }
    }
  };

  const deleteEdges = async () => {
    try {
      const deleteEdgesOptionsRequest: DeleteEdgesOptionsRequest = {
        edges: edgesToBeDeleted,
      };
      // Not setup yet
      await axios.delete("/api/delete-edges", {
        data: deleteEdgesOptionsRequest,
      });
      setEdgesToBeDeleted(new Array<Edge>());
    } catch (error) {
      console.error("Failed to delete edges data:", error);
    }
  };

  const editEdges = async () => {
    if (edgesToBeEdited.length > 0) {
      try {
        const refactorEdgesOptionsRequest: RefactorEdgesOptionsRequest = {
          oldNewEdges: edgesToBeEdited,
        };
        await axios.post("/api/refactor-edges", refactorEdgesOptionsRequest);
        setEdgesToBeEdited(new Array<OldNewEdge>());
      } catch (error) {
        console.error("Failed to refactor edges data:", error);
      }
    }
  };

  const addEdges = async () => {
    if (edgesToBeAdded.length > 0) {
      try {
        const addEdgesOptionsRequest: AddEdgesOptionsRequest = {
          newEdges: edgesToBeAdded,
        };
        await axios.post("/api/add-edges", addEdgesOptionsRequest);
        setEdgesToBeAdded(new Array<Edge>());
      } catch (error) {
        console.log("Failed to add edges data:", error);
      }
    }
  };

  const handleConfirm = async () => {
    if (nodesToBeAdded.length > 0) {
      addNodes();
    }
    if (nodesToBeEdited.length > 0) {
      editNodes();
    }
    if (nodesToBeDeleted.length > 0) {
      deleteNodes();
    }
    if (edgesToBeAdded.length > 0) {
      addEdges();
    }
    if (edgesToBeEdited.length > 0) {
      editEdges();
    }
    if (edgesToBeDeleted.length > 0) {
      deleteEdges();
    }
    setUnsavedChanges(false);
    setDialogueOpen(false);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!unsavedChanges) return;
      event.preventDefault();
      event.returnValue =
        "You have unsaved changes. Are you sure you want to leave?";
    };

    if (unsavedChanges) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  if (editorMode === EditorMode.disabled) {
    return <></>;
  }

  return (
    <>
      <Button
        variant={"contained"}
        color={"error"}
        startIcon={<DeleteIcon />}
        sx={{
          height: "40px",
          zIndex: 40,
        }}
        onClick={() => setDialogueOpen(true)}
      >
        Delete Data
      </Button>
      <Dialog open={dialogueOpen} onClose={() => setDialogueOpen(false)}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete all map node and edge data from the database. This
            action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialogueOpen(false)}
            sx={{
              color: "black",
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="error" variant={"contained"}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        message={"Data deleted successfully."}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
}
