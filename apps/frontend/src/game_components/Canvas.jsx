import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { moveCharacter } from "../game_actions/game_actions.js";
import PlatformerBG from "./PlatformerBG.jsx";
import PlatformerGround from "./PlatformerGround.jsx";

const Canvas = ({ dispatch }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Apply styles when component mounts
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";

    const handleKeyPress = (event) => {
      // Define the movement based on key press
      let newX = position.x;
      let newY = position.y;
      switch (event.key) {
        case "ArrowUp":
          newY -= 10;
          break;
        case "ArrowDown":
          newY += 10;
          break;
        case "ArrowLeft":
          newX -= 10;
          break;
        case "ArrowRight":
          newX += 10;
          break;
        default:
          break;
      }
      setPosition({ x: newX, y: newY });
      dispatch(moveCharacter({ x: newX, y: newY }));
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      // Remove styles and event listener when component unmounts
      document.body.style.overflow = null;
      document.documentElement.style.height = null;
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch, position]);

  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ];

  return (
    <svg
      id="platformer-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <PlatformerBG />
      <PlatformerGround />
      <circle cx={position.x} cy={position.y} r={50} />
    </svg>
  );
};

export default connect()(Canvas);
