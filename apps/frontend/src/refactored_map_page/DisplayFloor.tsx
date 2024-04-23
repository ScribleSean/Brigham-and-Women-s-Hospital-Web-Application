import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import { FloorType, Node, Edge } from "common/src/DataStructures.ts";
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
  NodeDisplayProps,
  PathDisplayProps,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import PathDisplay from "./DisplayPath.tsx";
import NodeDisplay from "./DisplayNode.tsx";
import EdgeDisplay from "./DisplayEdge.tsx";
import { getScaling } from "./scalingUtils.ts";

export default FloorDisplay;

const buildingMap: BuildingMap = new BuildingMap([
  new FloorMap("00_thelowerlevel1.png", FloorType.L1),
  new FloorMap("00_thelowerlevel2.png", FloorType.L2),
  new FloorMap("01_thefirstfloor.png", FloorType.first),
  new FloorMap("02_thesecondfloor.png", FloorType.second),
  new FloorMap("03_thethirdfloor.png", FloorType.third),
]);

function FloorDisplay() {
  const { currentFloor, showNodes, setGraph, graph, scale } = useMapContext();

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
    zIndex: 100,
    pointerEvents: "none",
  };

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
