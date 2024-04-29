import "../map_page/MapWrapper.css";
import { useRef, useEffect } from "react";
import { useMapContext } from "./MapContext.ts";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import MapProvider from "./MapProvider.tsx";
import { CSSProperties } from "react";
import DirectionsSelector from "./SelectDirection.tsx";
import LocationSelector from "./SelectLocation.tsx";
import AlgorithmSelector from "./SelectAlgorithm.tsx";
import AccessibilitySelector from "./SelectAccessibility.tsx";
import DisplayEditingOptions from "./SelectEditor.tsx";
import FloorSelector from "./SelectFloor.tsx";
import FloorDisplay from "./DisplayFloor.tsx";
import ClearPathButton from "./ClearPathButton.tsx";
import TextDirections from "./TextDirections.tsx";
import ConfirmChanges from "./ConfirmChanges.tsx";
import ShowPathsButton from "./ShowAllPaths.tsx";
import ShowNodesEdgesDropDown from "./ShowNodesEdgesDropdown.tsx";
import MapLegend from "./MapLegend.tsx";
import ToggleFixEdges from "./ToggleFixEdges.tsx";
import { Box } from "@mui/material";
import { EditorMode } from "common/src/types/map_page_types.ts";

const mapDiv: CSSProperties = {
  height: "100vh",
  maxWidth: "calc(100% - 55px)",
  float: "right",
  overflow: "hidden",
};

export default AdminMap;

function AdminMap() {
  return (
    <MapProvider>
      <MapContents />
    </MapProvider>
  );
}

function MapContents() {
  const {
    setScale,
    disableZoomPanning,
    setResetZoomingFunction,
    currentFloor,
    setTranslationX,
    setTranslationY,
  } = useMapContext();

  const transformComponentRef = useRef<ReactZoomPanPinchRef>(null);

  const zoomWrapperProps = {
    disablePadding: true,
    centerOnInit: false,
    limitToBounds: true,
    doubleClick: { disabled: true },
    disabled: disableZoomPanning,
  };

  useEffect(() => {
    if (transformComponentRef.current && disableZoomPanning) {
      const currentState =
        transformComponentRef.current.instance.transformState;
      console.log("Current State:", currentState); // Check what currentState contains
      if (currentState) {
        setScale(currentState.scale);
        setTranslationX(currentState.positionX);
        setTranslationY(currentState.positionY);
      }
    }
  }, [
    setScale,
    setTranslationX,
    setTranslationY,
    disableZoomPanning,
    transformComponentRef,
  ]);

  const resetMapTransform = () => {
    if (transformComponentRef.current) {
      transformComponentRef.current.resetTransform();
    }
  };

  useEffect(() => {
    setResetZoomingFunction(resetMapTransform);
  }, [setResetZoomingFunction, transformComponentRef, currentFloor]);

  const { editorMode } = useMapContext();

  return (
    <div style={mapDiv}>
      <TextDirections />
      <ShowNodesEdgesDropDown />
      <DisplayEditingOptions />
      <MapLegend />
      <ToggleFixEdges />
      <Box
        sx={{
          right: 0,
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          marginTop: "80px",
          marginRight: "10px",
          justifyContent: "space-between",
        }}
      >
        <AlgorithmSelector />
        <AccessibilitySelector />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          display: "flex",
          flexDirection: "column",
          marginTop: "11vh",
          marginLeft: "5vw",
          backgroundColor: editorMode === EditorMode.disabled ? "white" : null,
          zIndex: 3,
          padding: "1rem",
          paddingLeft: "0.5rem",
          boxShadow: editorMode === EditorMode.disabled ? 7 : null,
          borderRadius: "5px",
        }}
      >
        <LocationSelector /> {/* start & end location text boxes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2vh",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ClearPathButton /> {/* clear path button */}
            <ShowPathsButton /> {/* show all paths button */}
          </Box>
          <DirectionsSelector /> {/* "next floor" button */}
        </Box>
        {/*<ClearPathButton /> /!* clear path button *!/*/}
      </Box>
      <FloorSelector /> {/* button cluster to change floor */}
      <ConfirmChanges />
      <TransformWrapper
        ref={transformComponentRef}
        {...zoomWrapperProps}
        disablePadding={true}
      >
        <TransformComponent
          wrapperStyle={{ height: screen.height, width: screen.width }}
        >
          <FloorDisplay></FloorDisplay>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
