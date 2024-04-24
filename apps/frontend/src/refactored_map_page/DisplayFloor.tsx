import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import {
  BuildingType,
  Edge,
  FloorType,
  Node,
  NodeType,
} from "common/src/DataStructures.ts";
import GraphFrontend from "./GraphFrontend.ts";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  EdgeDisplayProps,
  EditorMode,
  NodeDisplayProps,
  PathDisplayProps,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import PathDisplay from "./DisplayPath.tsx";
import NodeDisplay from "./DisplayNode.tsx";
import EdgeDisplay from "./DisplayEdge.tsx";
import { displayToImageCoordinates, getScaling } from "./scalingUtils.ts";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export default FloorDisplay;

const buildingMap: BuildingMap = new BuildingMap([
  new FloorMap("00_thelowerlevel1.png", FloorType.L1),
  new FloorMap("00_thelowerlevel2.png", FloorType.L2),
  new FloorMap("01_thefirstfloor.png", FloorType.first),
  new FloorMap("02_thesecondfloor.png", FloorType.second),
  new FloorMap("03_thethirdfloor.png", FloorType.third),
]);

function FloorDisplay() {
  const {
    currentFloor,
    showNodes,
    setGraph,
    graph,
    scale,
    editorMode,
    translationX,
    translationY,
    setUnsavedChanges,
  } = useMapContext();

  useEffect(() => {
    async function getGraph(): Promise<void> {
      try {
        const edges: Array<Edge> = (await axios.get("/api/edges"))
          .data as Array<Edge>;
        const graph: GraphFrontend = new GraphFrontend();
        graph.populateGraph(edges);
        setGraph(graph);
      } catch (error) {
        console.error("Failed to fetch nodes data:", error);
      }
    }

    getGraph();
  }, [setGraph, showNodes]);

  const ref = useRef<HTMLImageElement | null>(null);
  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);
  const isImageLoaded = useRef(false);
  const loadImageOnce = useRef(0);

  const [isSaved, setIsSaved] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [newNode, setNewNode] = useState<Node>(
    new Node(
      "",
      0,
      0,
      currentFloor,
      BuildingType.Francis45,
      NodeType.HALL,
      "",
      "",
    ),
  );

  const resetNewNode = useCallback(() => {
    setNewNode(
      new Node(
        "",
        0,
        0,
        currentFloor,
        BuildingType.Francis45,
        NodeType.HALL,
        "",
        "",
      ),
    );
  }, [currentFloor]);

  useEffect(() => {
    resetNewNode();
  }, [resetNewNode]);

  const IMAGE_DIMENSIONS = useMemo(() => ({ width: 5000, height: 3400 }), []);
  const scaling = useMemo(
    () =>
      getScaling(
        divWidth,
        divHeight,
        IMAGE_DIMENSIONS.width,
        IMAGE_DIMENSIONS.height,
      ),
    [IMAGE_DIMENSIONS, divWidth, divHeight],
  );

  const updateDimensions = useCallback(() => {
    if (ref.current && !isImageLoaded.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
      isImageLoaded.current = true;
    }
  }, []);

  useEffect(() => {
    if (loadImageOnce.current === 0) {
      loadImageOnce.current++;
      updateDimensions();
      isImageLoaded.current = false;
    } else {
      //console.log("here");
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, [scale, updateDimensions]);

  // I optimized the image loading
  useEffect(() => {
    const imageUrls = buildingMap
      .getFloorMaps()
      .map((floorMap) => floorMap.getPngPath());
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  });

  const handleImageLoad = () => {
    if (!isImageLoaded.current) {
      updateDimensions();
    }
  };

  const handleAddNodeChange = (event: SelectChangeEvent<string>) => {
    const name = event.target.name;
    const value = event.target.value; // This will be the key of the enum

    setNewNode((prev) => {
      return new Node(
        prev.ID,
        prev.x,
        prev.y,
        prev.floor,
        name === "building" ? (value as BuildingType) : prev.building,
        name === "type" ? (value as NodeType) : prev.type,
        prev.longName,
        prev.shortName,
      );
    });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = event.target.name;
    const value = event.target.value; // This will be the key of the enum

    setNewNode((prev) => {
      return new Node(
        name === "ID" ? value : prev.ID,
        prev.x,
        prev.y,
        prev.floor,
        prev.building,
        prev.type,
        name === "longName" ? value : prev.longName,
        name === "shortName" ? value : prev.shortName,
      );
    });
  };

  const handleAddNodeSave = () => {
    setIsSaved(true);
    setShowModal(false);
    resetNewNode();
  };

  const handleAddNodeClose = () => {
    setShowModal(false);
    resetNewNode();
  };

  useEffect(() => {
    if (isSaved) {
      if (graph) {
        setGraph(graph.addNode(newNode));
      }
      setIsSaved(false);
    }
  }, [graph, setGraph, isSaved, newNode]);

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    return {
      node: node,
      key: node.ID,
      scaling: scaling,
    };
  }

  function edgeDisplayProps(edge: Edge): EdgeDisplayProps {
    return {
      edge: edge,
      key: edge.ID,
      scaling: scaling,
    };
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      scaling: scaling,
    };
  }

  const divStyleBig: CSSProperties = {
    width: "100vw",
  };

  const imgStyle: CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    zIndex: "1",
  };

  const svgStyle: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10,
    pointerEvents: "none",
  };

  const buildingOptions = [
    { label: "", value: "" },
    ...Object.entries(BuildingType).map(([key, value]) => ({
      label: value,
      value: key,
    })),
  ];

  const nodeTypeOptions = [
    { label: "", value: "" },
    ...Object.entries(NodeType).map(([key, value]) => ({
      label: value,
      value: key,
    })),
  ];

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!showModal) {
      const { imageX, imageY } = displayToImageCoordinates(
        event.clientX,
        event.clientY,
        translationX,
        translationY,
        scale,
        scaling.widthScaling,
        scaling.heightScaling,
      );

      const addedNode: Node = new Node(
        newNode.ID,
        imageX, //widthScaling,
        imageY, //heightScaling,
        newNode.floor,
        newNode.building,
        newNode.type,
        newNode.longName,
        newNode.shortName,
      );

      setNewNode(addedNode);

      if (graph) {
        setGraph(graph.addNode(addedNode));
      }
      setUnsavedChanges(true);
      //setNodesToBeAdded([...nodesToBeAdded, addedNode]);
      setIsSaved(false);
      setShowModal(true);
    }
  };

  if (editorMode === EditorMode.addNodes) {
    console.log(showModal);
    return (
      <div>
        <Dialog open={showModal} onClose={handleAddNodeClose}>
          <DialogTitle>Add New Node</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="ID"
              type="text"
              fullWidth
              name="ID"
              value={newNode.ID}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="X-Coordinate"
              type="text"
              fullWidth
              name="x"
              value={newNode.x}
            />
            <TextField
              margin="dense"
              label="Y-Coordinate"
              type="text"
              fullWidth
              name="y"
              value={newNode.y}
            />
            <TextField
              margin="dense"
              label="Floor"
              type="text"
              fullWidth
              name="floor"
              value={newNode.floor}
              onChange={handleInputChange}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="building-label">Building</InputLabel>
              <Select
                labelId="building-label"
                name="building"
                value={newNode.building || ""}
                label="Building"
                onChange={handleAddNodeChange}
              >
                {buildingOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                name="type"
                value={newNode.type || ""}
                label="Type"
                onChange={handleAddNodeChange}
              >
                {nodeTypeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Long Name"
              type="text"
              fullWidth
              name="longName"
              value={newNode.longName}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Short Name"
              type="text"
              fullWidth
              name="shortName"
              value={newNode.shortName || ""}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddNodeSave}>Save</Button>
          </DialogActions>
        </Dialog>
        <div style={divStyleBig} onClick={handleOnClick}>
          <img
            ref={ref}
            style={imgStyle}
            src={buildingMap.getFloorMap(currentFloor).getPngPath()}
            alt={"Error"}
            onLoad={handleImageLoad}
          ></img>
          {graph
            ? graph
                .getNodesByFloor(currentFloor)
                .map((node) => <NodeDisplay {...nodeDisplayProps(node)} />)
            : null}
          <svg
            style={svgStyle}
            onClick={() => {
              console.log("adios");
            }}
          >
            {graph
              ? graph
                  .getEdgesByFloorAll(currentFloor)
                  .map((edge) => <EdgeDisplay {...edgeDisplayProps(edge)} />)
              : null}
          </svg>
          <PathDisplay {...pathDisplayProps()} />
        </div>
      </div>
    );
  }

  return (
    <div style={divStyleBig}>
      <img
        ref={ref}
        style={imgStyle}
        src={buildingMap.getFloorMap(currentFloor).getPngPath()}
        alt={"Error"}
        onLoad={handleImageLoad}
      ></img>
      {graph
        ? graph
            .getNodesByFloor(currentFloor)
            .map((node) => <NodeDisplay {...nodeDisplayProps(node)} />)
        : null}
      <svg
        style={svgStyle}
        onClick={() => {
          console.log("adios");
        }}
      >
        {graph
          ? graph
              .getEdgesByFloorAll(currentFloor)
              .map((edge) => <EdgeDisplay {...edgeDisplayProps(edge)} />)
          : null}
      </svg>
      <PathDisplay {...pathDisplayProps()} />
    </div>
  );
}
