// Sarcoma.jsx
import React, { useEffect, useRef, useState } from "react";

const Sarcoma = ({ x, y, viewBox }) => {
  const margin = 50; // Margin to keep the sarcoma fully visible within the viewBox
  const position = useRef({ x: 0, y: 0 });
  const randomX = useRef(
    Math.random() * (viewBox[2] - margin * 2) + viewBox[0] + margin,
  );
  const randomY = useRef(
    Math.random() * (viewBox[3] - margin * 2) + viewBox[1] + margin,
  );
  const [scale, setScale] = useState(1); // Add a new state for the scale

  useEffect(() => {
    position.current = { x: x || randomX.current, y: y || randomY.current };
  }, [x, y, viewBox]);

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    // Shrink the component after 10 seconds
    if (elapsedTime >= 10) {
      setScale(0);
    }

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [elapsedTime]);

  // Don't render the component if it's shrunk
  if (scale === 0) {
    return null;
  }

  return (
    <g transform={`scale(${scale})`} style={{ transition: "transform 1s" }}>
      <circle
        cx={position.current.x}
        cy={position.current.y}
        r={40}
        fill="#800080"
      />
    </g>
  );
};

export default Sarcoma;
