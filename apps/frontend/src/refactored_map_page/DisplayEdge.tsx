import React, { useState, useEffect, CSSProperties } from "react";
import {
  EdgeDisplayProps,
  EditorMode,
  EdgesByFloor,
  NodesByFloor,
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

function nodesByFloorsToNodes(nodesByFloor: NodesByFloor | null): Array<Node> {
  const nodes: Array<Node> = new Array<Node>();
  if (!nodesByFloor) return nodes;
  nodesByFloor.L2.forEach((node) => nodes.push(node));
  nodesByFloor.L1.forEach((node) => nodes.push(node));
  nodesByFloor.firstFloor.forEach((node) => nodes.push(node));
  nodesByFloor.secondFloor.forEach((node) => nodes.push(node));
  nodesByFloor.thirdFloor.forEach((node) => nodes.push(node));
  return nodes;
}

function deleteEdge(
  edgesByFloor: EdgesByFloor,
  edgeToBeDeleted: Edge,
): EdgesByFloor {
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = edgesByFloor;
  const floors = [L2, L1, firstFloor, secondFloor, thirdFloor];

  const updatedFloors = floors.map((floor) =>
    floor.filter((edge) => {
      return !(
        edge.ID === edgeToBeDeleted.ID &&
        ((edge.startNode.ID === edgeToBeDeleted.startNode.ID &&
          edge.endNode.ID === edgeToBeDeleted.endNode.ID) ||
          (edge.startNode.ID === edgeToBeDeleted.endNode.ID &&
            edge.endNode.ID === edgeToBeDeleted.startNode.ID))
      );
    }),
  );

  return {
    L2: updatedFloors[0],
    L1: updatedFloors[1],
    firstFloor: updatedFloors[2],
    secondFloor: updatedFloors[3],
    thirdFloor: updatedFloors[4],
  };
}

function editEdges(
  edgesByFloor: EdgesByFloor,
  edgeToBeEdited: Edge,
): EdgesByFloor {
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = edgesByFloor;
  const floors = [L2, L1, firstFloor, secondFloor, thirdFloor];

  floors.forEach((edges) => {
    edges.forEach((edge) => {
      if (edge.ID === edgeToBeEdited.ID) {
        edge.startNode = edgeToBeEdited.startNode;
        edge.endNode = edgeToBeEdited.endNode;
      }
    });
  });

  return {
    L2: floors[0],
    L1: floors[1],
    firstFloor: floors[2],
    secondFloor: floors[3],
    thirdFloor: floors[4],
  };
}

function getNode(nodesByFloor: NodesByFloor, ID: string): Node | undefined {
  const { L2, L1, firstFloor, secondFloor, thirdFloor } = nodesByFloor;
  const floors = [L2, L1, firstFloor, secondFloor, thirdFloor];

  for (const floor of floors) {
    for (const node of floor) {
      if (node.ID === ID) {
        return node;
      }
    }
  }

  return undefined;
}

export default EdgeDisplay;

function EdgeDisplay(props: EdgeDisplayProps) {
  const { edge, scaling } = props;
  const { widthScaling, heightScaling } = scaling;
  const {
    editorMode,
    showEdges,
    setEdgesToBeEdited,
    edgesToBeEdited,
    nodesByFloor,
    edgesByFloor,
    setEdgesByFloor,
    setEdgesToBeDeleted,
    edgesToBeDeleted,
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
    if (edgesByFloor) {
      const newEdgesByFloor: EdgesByFloor = deleteEdge(
        edgesByFloor,
        deletedEdge,
      );
      setEdgesByFloor(newEdgesByFloor);
      setEdgesToBeDeleted([...edgesToBeDeleted, deletedEdge]);
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

      if (edgesByFloor) {
        const updatedEdgesByFloor: EdgesByFloor = editEdges(
          edgesByFloor,
          newEdge,
        );
        setEdgesByFloor(updatedEdgesByFloor);
        setEdgesToBeEdited([...edgesToBeEdited, newOldNewEdge]);
      }
      setIsSaved(false);
    }
  }, [
    edge,
    edgesToBeEdited,
    setEdgesToBeEdited,
    editedEdge,
    setEditedEdge,
    nodesByFloor,
    isSaved,
    edgesByFloor,
    setEdgesByFloor,
  ]);

  const handleChange = (
    event: React.SyntheticEvent,
    nodeID: string | null,
    nodeType: "startNode" | "endNode",
  ) => {
    if (nodeID) {
      if (nodeType === "startNode" && nodesByFloor) {
        const newNode = getNode(nodesByFloor, nodeID);
        if (newNode) {
          edge.startNode = newNode;
        }
      } else if (nodeType === "endNode" && nodesByFloor) {
        const newNode = getNode(nodesByFloor, nodeID);
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
                  options={nodesByFloorsToNodes(nodesByFloor).map(
                    (node: Node) => node.ID,
                  )}
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
                  options={nodesByFloorsToNodes(nodesByFloor).map(
                    (node: Node) => node.ID,
                  )}
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
