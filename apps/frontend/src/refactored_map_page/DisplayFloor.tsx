import { BuildingMap, FloorMap } from "common/src/BuildingClasses.ts";
import { FloorType, Node, Edge } from "common/src/DataStructures.ts";
import GraphFrontend from "./GraphFrontend.ts";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  EdgeDisplayProps,
  NodeDisplayProps,
  PathDisplayProps,
  Scaling,
} from "common/src/types/map_page_types.ts";
import axios from "axios";
import { useMapContext } from "./MapContext.ts";
import PathDisplay from "./DisplayPath.tsx";
import NodeDisplay from "./DisplayNode.tsx";
import EdgeDisplay from "./DisplayEdge.tsx";

export default FloorDisplay;

const buildingMap: BuildingMap = new BuildingMap([
  new FloorMap("00_thelowerlevel1.png", FloorType.L1),
  new FloorMap("00_thelowerlevel2.png", FloorType.L2),
  new FloorMap("01_thefirstfloor.png", FloorType.first),
  new FloorMap("02_thesecondfloor.png", FloorType.second),
  new FloorMap("03_thethirdfloor.png", FloorType.third),
]);

function FloorDisplay() {
  const { currentFloor, showNodes, setGraph, graph } = useMapContext();

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

  const IMAGE_WIDTH: number = 5000;
  const IMAGE_HEIGHT: number = 3400;
  const ref = useRef<HTMLImageElement | null>(null);
  const [divWidth, setWidth] = useState(0);
  const [divHeight, setHeight] = useState(0);
  const isImageLoaded = useRef(false);
  const loadImageOnce = useRef(0);

  function getWidthScaling(): number {
    return divWidth / IMAGE_WIDTH;
  }

  function getHeightScaling(): number {
    return divHeight / IMAGE_HEIGHT;
  }

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
  });

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

  function getScaling(): Scaling {
    return {
      widthScaling: getWidthScaling(),
      heightScaling: getHeightScaling(),
    };
  }

  function nodeDisplayProps(node: Node): NodeDisplayProps {
    return {
      node: node,
      key: node.ID,
      scaling: getScaling(),
    };
  }

  function edgeDisplayProps(edge: Edge): EdgeDisplayProps {
    return {
      edge: edge,
      key: edge.ID,
      scaling: getScaling(),
    };
  }

  function pathDisplayProps(): PathDisplayProps {
    return {
      scaling: getScaling(),
    };
  }

  useEffect(() => {
    console.log("Updated graph state:", graph);
  }, [graph]);

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
            .getNodesByFloorNoHallways(currentFloor)
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
