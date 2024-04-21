import React, { useEffect, useState, useRef } from "react";
import PlatformerBG from "./PlatformerBG.jsx";
// import PlatformerGround from './PlatformerGround.jsx';

const Canvas = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / -2 + 100,
    y: 0,
  });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const animationRef = useRef();

  //Sets velocity of circle upon key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the keydown event is a repeat event
      if (!event.repeat) {
        let newVelocity = { ...velocity };
        if (event.key) {
          switch (event.key) {
            case "ArrowUp":
              newVelocity.y = newVelocity.y - 400;
              break;
            case "ArrowDown":
              newVelocity.y = newVelocity.y + 400;
              break;
            case "ArrowLeft":
              newVelocity.x = newVelocity.x - 400;
              break;
            case "ArrowRight":
              newVelocity.x = newVelocity.x + 400;
              break;
            default:
              break;
          }
        } else {
          newVelocity.y = 0;
          newVelocity.x = 0;
        }

        setVelocity(newVelocity);
      }
    };

    //Stop the circle from moving when key is released
    const handleKeyUp = (event) => {
      let newVelocity = { ...velocity };
      switch (event.key) {
        case "ArrowUp":
          newVelocity.y = newVelocity.y + 400;
          break;
        case "ArrowDown":
          newVelocity.y = newVelocity.y - 400;
          break;
        case "ArrowLeft":
          newVelocity.x = newVelocity.x + 400;
          break;
        case "ArrowRight":
          newVelocity.x = newVelocity.x - 400;
          break;
        default:
          break;
      }
      setVelocity(newVelocity);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [velocity]);

  //Smoothly updates circle position during movement
  useEffect(() => {
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + velocity.x / 60, // Divide by FPS for smooth movement
        y: prevPosition.y + velocity.y / 60,
      }));
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [velocity]);

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
      {/*<PlatformerGround />*/}
      <circle cx={position.x} cy={position.y} r={50} />
    </svg>
  );
};

export default Canvas;
