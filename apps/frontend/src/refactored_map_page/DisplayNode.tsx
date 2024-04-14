import { NodeDisplayProps } from "common/src/types/map_page_types.ts";
import React, { CSSProperties, useEffect, useState } from "react";
import { Node, NodeType, Path } from "common/src/DataStructures.ts";
import Draggable from "react-draggable";
import { useMapContext } from "./MapContext.ts";
import "../styles/DisplayNode.css";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ElevatorIcon from "@mui/icons-material/Elevator";
import StairsIcon from "@mui/icons-material/Stairs";

export default NodeDisplay;

function imageToDisplayCoordinates(
  x: number,
  scalingX: number,
  y: number,
  scalingY: number,
): { displayX: number; displayY: number } {
  return {
    displayX: x * scalingX,
    displayY: y * scalingY,
  };
}

/*
function displayToImageCoordinates(x: number, scalingX: number, y: number, scalingY: number): { imageX: number; imageY: number } {
  return {
    imageX: x / scalingX,
    imageY: y / scalingY
  };
}
*/

function sameNode(node1: Node | null, node2: Node | null) {
  if (node1 && node2) {
    return node1.ID == node2.ID;
  } else {
    return false;
  }
}

function startBorderNode(node: Node, path: Path) {
  return path.edges[0].startNode.ID === node.ID;
}

function endBorderNode(node: Node, path: Path) {
  const len: number = path.edges.length;
  if (len === 1) return false;
  return path.edges[len - 2].endNode.ID === node.ID;
}

export function NodeDisplay(props: NodeDisplayProps): React.JSX.Element {
  const widthScaling: number = props.scaling.widthScaling;
  const heightScaling: number = props.scaling.heightScaling;
  const node: Node = props.node;
  const {
    startNode,
    endNode,
    setStartNode,
    setEndNode,
    editorMode,
    setDisableZoomPanning,
    scale,
    paths,
    directionsCounter,
    setDirectionsCounter,
  } = useMapContext();

  const [triggerRed, setTriggerRed] = useState(false);

  useEffect(() => {
    if (startNode) {
      // Schedule the red animation to start after 2 seconds (the duration of one green animation cycle)
      setTimeout(() => {
        setTriggerRed(true);
      }, 2000); // Duration of the green pulse
    }
  }, [startNode]);

  function nodeInPathChangingFloorStart(node: Node, paths: Array<Path>) {
    if (paths && paths.length > 0) {
      return paths.some((path) => {
        return path.edges.some((edge) => {
          return (
            startBorderNode(node, path) &&
            (edge.startNode.ID === node.ID || edge.endNode.ID === node.ID) &&
            (node.type === "ELEV" || node.type === "STAI") &&
            paths[directionsCounter].edges[0].startNode.ID === node.ID
          );
        });
      });
    }
    return false;
  }

  function nodeInPathChangingFloorEnd(node: Node, paths: Array<Path>) {
    if (paths && paths.length > 0) {
      return paths.some((path) => {
        return path.edges.some((edge) => {
          return (
            endBorderNode(node, path) &&
            (edge.startNode.ID === node.ID || edge.endNode.ID === node.ID) &&
            (node.type === "ELEV" || node.type === "STAI") &&
            paths[directionsCounter].edges[
              paths[directionsCounter].edges.length - 2
            ].endNode.ID === node.ID
          );
        });
      });
    }
    return false;
  }

  const handleNodeSelection = (node: Node): void => {
    if (editorMode) {
      return;
    }
    if (!startNode) {
      setStartNode(node);
      //console.log("Start node: " + node + ", End node: " + null);
    } else if (!endNode) {
      setEndNode(node);
      //console.log("Start node: " + startNode + ", End node: " + node);
    } else {
      setStartNode(node);
      setEndNode(null);
      //console.log("Start node: " + node + ", End node: " + null);
    }
  };

  const { displayX, displayY } = imageToDisplayCoordinates(
    node.x,
    widthScaling,
    node.y,
    heightScaling,
  );

  const changingFloorNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
  };

  const normalNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderRadius: "100%",
    padding: "0",
    borderColor: "black",
    backgroundColor: "white",
  };

  const startNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderRadius: "100%",
    padding: "0",
    borderColor: "black",
    color: "darkgreen",
    //backgroundColor: "green",
  };

  const endNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderRadius: "100%",
    padding: "0",
    borderColor: "black",
    color: "darkred",
    //backgroundColor: "red",
  };

  const floorNodeStyle: CSSProperties = {
    position: "absolute",
    left: `${displayX}px`,
    top: `${displayY}px`,
    zIndex: 3,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
  };

  const hidden: CSSProperties = {
    opacity: 0,
  };

  const handleStartDrag = () => {
    setDisableZoomPanning(true);
  };

  const handleStopDrag = () => {
    setDisableZoomPanning(false);
  };

  const handleChangingFloorBackNodeClick = () => {
    setDirectionsCounter(directionsCounter - 1);
  };

  const handleChangingFloorNextNodeClick = () => {
    setDirectionsCounter(directionsCounter + 1);
  };

  return (
    <>
      {(node.type === NodeType.ELEV || node.type === NodeType.STAI) && (
        <>
          {nodeInPathChangingFloorStart(node, paths) && (
            <React.Fragment>
              {node.type === NodeType.ELEV ? (
                <div style={changingFloorNodeStyle}>
                  <ElevatorIcon
                    onClick={handleChangingFloorBackNodeClick}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="button"
                    onClick={handleChangingFloorBackNodeClick}
                    sx={{
                      color: "#012D5A",
                      fontWeight: "bold",
                      transition: "font-size 0.3s ease",
                      ":hover": {
                        backgroundColor: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Elevator Back to Floor
                    {directionsCounter - 1 >= 0
                      ? paths[directionsCounter - 1].edges[
                          paths[directionsCounter - 1].edges.length - 1
                        ].startNode.floor
                      : ""}
                  </Typography>
                </div>
              ) : (
                <div style={changingFloorNodeStyle}>
                  <StairsIcon
                    onClick={handleChangingFloorBackNodeClick}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="button"
                    onClick={handleChangingFloorBackNodeClick}
                    sx={{
                      color: "#012D5A",
                      fontWeight: "bold",
                      transition: "font-size 0.3s ease",
                      ":hover": {
                        backgroundColor: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Stairs Back to Floor
                    {directionsCounter - 1 >= 0
                      ? paths[directionsCounter - 1].edges[
                          paths[directionsCounter - 1].edges.length - 1
                        ].startNode.floor
                      : ""}
                  </Typography>
                </div>
              )}
            </React.Fragment>
          )}
          {nodeInPathChangingFloorEnd(node, paths) && (
            <React.Fragment>
              {node.type === NodeType.ELEV ? (
                <div style={changingFloorNodeStyle}>
                  <ElevatorIcon
                    onClick={handleChangingFloorNextNodeClick}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="button"
                    onClick={handleChangingFloorNextNodeClick}
                    sx={{
                      color: "#012D5A",
                      fontWeight: "bold",
                      transition: "font-size 0.3s ease",
                      ":hover": {
                        backgroundColor: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Elevator to Floor
                    {paths.length > directionsCounter + 1
                      ? paths[directionsCounter + 1].edges[0].startNode.floor
                      : ""}
                  </Typography>
                </div>
              ) : (
                <div style={changingFloorNodeStyle}>
                  <StairsIcon
                    onClick={handleChangingFloorNextNodeClick}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="button"
                    onClick={handleChangingFloorNextNodeClick}
                    sx={{
                      color: "#012D5A",
                      fontWeight: "bold",
                      transition: "font-size 0.3s ease",
                      ":hover": {
                        backgroundColor: "white",
                        fontSize: "1rem",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Stairs to Floor
                    {paths.length > directionsCounter + 1
                      ? paths[directionsCounter + 1].edges[0].startNode.floor
                      : ""}
                  </Typography>
                </div>
              )}
            </React.Fragment>
          )}
          {!nodeInPathChangingFloorStart(node, paths) &&
            !nodeInPathChangingFloorEnd(node, paths) && (
              <button style={hidden} />
            )}
        </>
      )}
      {node.type !== NodeType.ELEV && node.type !== NodeType.STAI && (
        <>
          {sameNode(startNode, node) ? (
            <PlaceIcon
              className="pulseGreen"
              style={startNodeStyle}
              onClick={() => handleNodeSelection(node)}
            />
          ) : sameNode(endNode, node) ? (
            <GpsFixedIcon
              className={triggerRed ? "pulseRed" : "none"}
              style={endNodeStyle}
              onClick={() => handleNodeSelection(node)}
            />
          ) : nodeInPathChangingFloorStart(node, paths) ? (
            <button
              style={floorNodeStyle}
              onClick={handleChangingFloorBackNodeClick}
            >
              From Floor{" "}
              {directionsCounter - 1 >= 0
                ? paths[directionsCounter - 1].edges[
                    paths[directionsCounter - 1].edges.length - 1
                  ].startNode.floor
                : ""}
            </button>
          ) : nodeInPathChangingFloorEnd(node, paths) ? (
            <button
              style={floorNodeStyle}
              onClick={handleChangingFloorNextNodeClick}
            >
              To Floor{" "}
              {paths.length > directionsCounter + 1
                ? paths[directionsCounter + 1].edges[0].startNode.floor
                : ""}
            </button>
          ) : !startNode || !endNode ? (
            <Draggable
              scale={scale}
              onStart={handleStartDrag}
              onStop={handleStopDrag}
              disabled={!editorMode}
            >
              <button
                className="none"
                style={normalNodeStyle}
                onClick={() => handleNodeSelection(node)}
              />
            </Draggable>
          ) : null}
        </>
      )}
    </>
  );
}
