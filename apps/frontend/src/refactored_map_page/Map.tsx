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
import EditorSelector from "./SelectEditor.tsx";
import FloorSelector from "./SelectFloor.tsx";
import FloorDisplay from "./DisplayFloor.tsx";

const mapDiv: CSSProperties = {
  height: "100%",
  maxWidth: "100%",
};

export default Map;

function Map() {
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
  };

  function handleScaleChange(event: ReactZoomPanPinchRef) {
    setScale(event.instance.transformState.scale);
  }

  return (
    <div className="col-10 map-wrapper">
      <TransformWrapper
        {...zoomWrapperProps}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <div style={mapDiv}>
          <DirectionsSelector></DirectionsSelector>
          <EditorSelector></EditorSelector>
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
