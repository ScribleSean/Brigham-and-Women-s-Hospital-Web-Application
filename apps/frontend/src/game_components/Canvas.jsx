import React, { useEffect, useState, useRef, useMemo } from "react";
import PlatformerBG from "./PlatformerBG.jsx";
import Melanoma from "./Melanoma.jsx";
import Lymphoma from "./Lymphoma.jsx";
import Leukemia from "./Leukemia.jsx";
import Sarcoma from "./Sarcoma.jsx";
import Carcinoma from "./Carcinoma.jsx";
import Lyme from "./Lyme.jsx";
// import PlatformerGround from './PlatformerGround.jsx';

const Canvas = () => {
  const viewBox = useMemo(
    () => [
      window.innerWidth / -2,
      100 - window.innerHeight,
      window.innerWidth,
      window.innerHeight,
    ],
    [],
  );

  const [position, setPosition] = useState({
    x: 0,
    y: 600 - window.innerHeight,
  });

  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const animationRef = useRef();
  const speed = 300;

  // Timer state
  const [elapsedTime, setElapsedTime] = useState(0);

  // Start the timer when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  //Sets velocity of circle upon key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the keydown event is a repeat event
      if (!event.repeat) {
        const newVelocity = { ...velocity };
        if (event.key) {
          switch (event.key) {
            case "ArrowUp":
              newVelocity.y = newVelocity.y - speed;
              break;
            case "ArrowDown":
              newVelocity.y = newVelocity.y + speed;
              break;
            case "ArrowLeft":
              newVelocity.x = newVelocity.x - speed;
              break;
            case "ArrowRight":
              newVelocity.x = newVelocity.x + speed;
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
          newVelocity.y = newVelocity.y + speed;
          break;
        case "ArrowDown":
          newVelocity.y = newVelocity.y - speed;
          break;
        case "ArrowLeft":
          newVelocity.x = newVelocity.x + speed;
          break;
        case "ArrowRight":
          newVelocity.x = newVelocity.x - speed;
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

  const [diseases, setDiseases] = useState([]);

  // Spawn disease components at random intervals
  useEffect(() => {
    const spawnDisease = () => {
      const diseaseComponents = [
        Melanoma,
        Lymphoma,
        Leukemia,
        Sarcoma,
        Carcinoma,
        Lyme,
      ];
      const randomDiseaseIndex = Math.floor(
        Math.random() * diseaseComponents.length,
      );
      const DiseaseComponent = diseaseComponents[randomDiseaseIndex];
      // const maxSpeedPerSecond = 100; // Maximum speed in pixels per second
      // const framesPerSecond = 60; // Frame rate
      // const maxSpeedPerFrame = maxSpeedPerSecond / framesPerSecond;
      const angle = Math.random() * 2 * Math.PI; // Random angle
      const speed = 3; // Consistent speed
      const margin = 50; // Margin to keep the lyme disease fully visible within the viewBox

      const newDisease = {
        x:
          Math.random() * Math.random() * (viewBox[2] - margin * 2) +
          viewBox[0] +
          margin, // Random X position
        y:
          Math.random() * Math.random() * (viewBox[3] - margin * 2) +
          viewBox[1] +
          margin, // Random Y position
        velocityX: Math.cos(angle) * speed, // X velocity based on the angle
        velocityY: Math.sin(angle) * speed, // Y velocity based on the angle

        Component: DiseaseComponent,
      };

      setDiseases((prevDiseases) => [...prevDiseases, newDisease]);

      // Schedule the next spawn
      const timeoutId = setTimeout(spawnDisease, Math.random() * 2000 + 1000); // Random spawn interval between 1 and 3 seconds

      // Store the timeout ID for cleanup
      return () => clearTimeout(timeoutId);
    };

    // Start spawning diseases
    spawnDisease();

    // Clean up timer when component unmounts
    return () => {
      setDiseases([]);
    };
  }, [viewBox]);

  // Move disease components
  useEffect(() => {
    const moveDiseases = () => {
      setDiseases((prevDiseases) =>
        prevDiseases.map((disease) => ({
          ...disease,
          x: disease.x + disease.velocityX,
          y: disease.y + disease.velocityY,
        })),
      );
    };

    // Start moving diseases
    const interval = setInterval(moveDiseases, 1000 / 60); // Move diseases 60 times per second

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Add diseases as a dependency

  return (
    <svg
      id="platformer-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <PlatformerBG />
      <circle cx={position.x} cy={position.y} r={50} />
      {diseases.map((disease, index) => {
        const DiseaseComponent = disease.Component;
        return (
          <DiseaseComponent
            key={index}
            x={disease.x}
            y={disease.y}
            viewBox={viewBox}
          />
        );
      })}
      {/*<PlatformerGround />*/}
      {/* Timer display */}
      <text x={10} y={30} fill="#FFFFFF">
        Time: {elapsedTime} seconds
      </text>
    </svg>
  );
};

export default Canvas;
