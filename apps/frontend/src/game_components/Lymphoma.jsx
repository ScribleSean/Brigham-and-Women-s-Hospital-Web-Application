// Lymphoma.jsx
import React, { useEffect, useRef } from "react";

const Lymphoma = ({ x, y, viewBox }) => {
  const margin = 50; // Margin to keep the lymphoma fully visible within the viewBox
  const position = useRef({ x: 0, y: 0 });
  const randomX = useRef(
    Math.random() * (viewBox[2] - margin * 2) + viewBox[0] + margin,
  );
  const randomY = useRef(
    Math.random() * (viewBox[3] - margin * 2) + viewBox[1] + margin,
  );

  useEffect(() => {
    position.current = { x: x || randomX.current, y: y || randomY.current };
  }, [x, y, viewBox]);

  return (
    <path
      d={`M${position.current.x} ${position.current.y} Q${position.current.x - 50} ${position.current.y + 50}, ${position.current.x} ${position.current.y + 100}, ${position.current.x + 50} ${position.current.y + 150}, ${position.current.x + 100} ${position.current.y + 100}, ${position.current.x + 150} ${position.current.y + 50}, ${position.current.x + 100} ${position.current.y}`}
      fill="#FF0000"
    />
  );
};

export default Lymphoma;
