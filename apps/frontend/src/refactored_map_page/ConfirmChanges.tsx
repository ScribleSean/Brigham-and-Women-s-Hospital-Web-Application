import { Node } from "common/src/DataStructures.ts";
import React, { CSSProperties } from "react";
import { useMapContext } from "./MapContext.ts";
import {
  DeleteNodesOptionsRequest,
  EditorMode,
  OldNewNode,
  RefactorNodesOptionsRequest,
} from "common/src/types/map_page_types.ts";
import axios from "axios";

export default ConfirmChanges;

function ConfirmChanges() {
  const {
    nodesToBeDeleted,
    setNodesToBeDeleted,
    editorMode,
    nodesToBeEdited,
    setNodesToBeEdited,
  } = useMapContext();

  const divStyle: CSSProperties = {
    width: "10%",
    height: "10%",
    position: "absolute",
    zIndex: 5,
    left: "20%",
    top: "20%",
  };

  if (
    editorMode !== EditorMode.deleteNodes &&
    editorMode !== EditorMode.addNodes
  ) {
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
        console.error("Failed to delete nodes data:", error);
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
  }

  return (
    <button style={divStyle} onClick={handleOnConfirm}>
      Confirm Changes
    </button>
  );
}
