import { Edge, Node } from "common/src/DataStructures.ts";
import React, { CSSProperties } from "react";
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
import axios from "axios";

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
  } = useMapContext();

  const divStyle: CSSProperties = {
    width: "10%",
    height: "10%",
    position: "absolute",
    zIndex: 5,
    bottom: 0,
    right: 0,
    marginRight: "30vw",
  };

  if (editorMode === EditorMode.disabled) {
    return <></>;
  }

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

  console.log(addNodes);

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

  console.log(addEdges);

  let handleOnConfirm;
  switch (editorMode) {
    case EditorMode.deleteNodes:
      handleOnConfirm = () => {
        deleteNodes();
      };
      break;
    case EditorMode.addNodes:
      handleOnConfirm = () => {
        editNodes();
      };
      break;
    case EditorMode.deleteEdges:
      handleOnConfirm = () => {
        deleteEdges();
      };
      break;
    case EditorMode.addEdges:
      handleOnConfirm = () => {
        editEdges();
      };
      break;
  }

  return (
    <button style={divStyle} onClick={handleOnConfirm}>
      Confirm Changes
    </button>
  );
}
