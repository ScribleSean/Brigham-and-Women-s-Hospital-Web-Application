import "../map_page/MapWrapper.css";
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
import FloorSelector from "./SelectFloor.tsx";
import FloorDisplay from "./DisplayFloor.tsx";
import ClearPathButton from "./ClearPathButton.tsx";
import TextDirections from "./TextDirections.tsx";
import ShowPathsButton from "./ShowAllPaths.tsx";
import ShowNodesEdgesDropDown from "./ShowNodesEdgesDropdown.tsx";

const mapDiv: CSSProperties = {
  height: "100%",
  maxWidth: "100%",
  overflowY: "hidden",
};

export default PublicMap;

function PublicMap() {
  return (
    <MapProvider>
      <MapContents />
    </MapProvider>
  );
}

function MapContents() {
  const { setScale, disableZoomPanning } = useMapContext();

  const zoomWrapperProps = {
    disablePadding: true,
    minScale: 1,
    initialScale: 1,
    centerOnInit: false,
    limitToBounds: true,
    doubleClick: { disabled: false },
    disabled: disableZoomPanning,
    overflowY: "hidden",
  };

  function handleScaleChange(event: ReactZoomPanPinchRef) {
    setScale(event.instance.transformState.scale);
  }

  return (
    <div className={"overflow-hidden"}>
      <TransformWrapper
        {...zoomWrapperProps}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <div style={mapDiv}>
          <ClearPathButton></ClearPathButton>
          <TextDirections></TextDirections>
          <DirectionsSelector></DirectionsSelector>
          <ShowPathsButton></ShowPathsButton>
          <ShowNodesEdgesDropDown></ShowNodesEdgesDropDown>
          <AlgorithmSelector></AlgorithmSelector>
          <AccessibilitySelector></AccessibilitySelector>
          <LocationSelector></LocationSelector>
          <FloorSelector></FloorSelector>
          <TransformComponent>
            <FloorDisplay></FloorDisplay>;
          </TransformComponent>
        </div>
      </TransformWrapper>
    </div>
  );
}
