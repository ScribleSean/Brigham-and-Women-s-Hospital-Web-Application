import React from "react";
import { bgAndGroundWidth } from "../game_utils/constants.js";

const Ground = () => {
  const groundStyle = {
    fill: "#59a941",
  };
  const division = {
    stroke: "#458232",
    strokeWidth: "3px",
  };

  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={bgAndGroundWidth / -2}
        y={0}
        width={bgAndGroundWidth}
        height={100}
      />
      <line
        x1={bgAndGroundWidth / -2}
        y1={0}
        x2={bgAndGroundWidth / 2}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default Ground;
