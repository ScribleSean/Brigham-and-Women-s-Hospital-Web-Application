import { Edge, Node } from "common/src/DataStructures.ts";
import React, { CSSProperties } from "react";
import { useMapContext } from "./MapContext.ts";
import {
  DeleteEdgesOptionsRequest,
  DeleteNodesOptionsRequest,
  EditorMode,
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
  } = useMapContext();

  const divStyle: CSSProperties = {
    width: "10%",
    height: "10%",
    position: "absolute",
    zIndex: 5,
    left: "20%",
    top: "20%",
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

  /**
   * This will work sending a POST request of NodeWithAssociatedEdges[] to the server.
  const addNodes = async () => {
  };
   **/

  /** Not setup yet **/
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

  /** Not setup yet **/
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
