import React from "react";
import { bgAndGroundWidth } from "../game_utils/constants.js";

const PlatformerBG = () => {
  const platformerStyle = {
    fill: "#30abef",
  };
  const gameHeight = 1200;
  return (
    <rect
      style={platformerStyle}
      x={bgAndGroundWidth / -2}
      y={100 - gameHeight}
      width={bgAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default PlatformerBG;
