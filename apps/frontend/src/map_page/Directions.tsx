import { CSSProperties } from "react";
import { DirectionsProps } from "./types/map_page_types.ts";

export default Directions;

function Directions(props: DirectionsProps) {
  const handleOnClick = () => {
    props.triggerNextDirection(props.currentDirectionsCounter);
  };

  const buttomStyle: CSSProperties = {
    position: "absolute",
    color: "orangered",
    width: "20%",
    height: "20%",
    zIndex: 3,
    marginLeft: "20%",
  };

  return <button style={buttomStyle} onClick={handleOnClick}></button>;
}
