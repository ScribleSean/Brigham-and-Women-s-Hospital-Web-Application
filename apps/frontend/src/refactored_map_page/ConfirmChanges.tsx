import { Node } from "common/src/DataStructures.ts";
import React, { CSSProperties } from "react";
import { useMapContext } from "./MapContext.ts";
import {
  DeleteNodesOptionsRequest,
  EditorMode,
} from "common/src/types/map_page_types.ts";
import axios from "axios";

export default ConfirmChanges;

function ConfirmChanges() {
  const { nodesToBeDeleted, setNodesToBeDeleted, editorMode } = useMapContext();

  const divStyle: CSSProperties = {
    width: "10%",
    height: "10%",
    position: "absolute",
    zIndex: 5,
    left: "20%",
    top: "20%",
  };

  if (editorMode !== EditorMode.deleteNodes) {
    return <></>;
  }

  const handleOnConfirm = () => {
    async function deleteNodes(): Promise<void> {
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
    }

    deleteNodes();
  };

  return (
    <button style={divStyle} onClick={handleOnConfirm}>
      Confirm Changes
    </button>
  );
}
