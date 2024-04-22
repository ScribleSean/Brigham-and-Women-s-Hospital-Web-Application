// Amoeba.jsx
import React, { useEffect, useRef } from "react";

const Melanoma = ({ x, y, viewBox }) => {
  const margin = 50; // Margin to keep the amoeba fully visible within the viewBox
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
      d={`M${position.current.x} ${position.current.y} C${position.current.x - 85} ${position.current.y - 110}, ${position.current.x + 140} ${position.current.y - 110}, ${position.current.x} ${position.current.y} S${position.current.x + 140} ${position.current.y + 110}, ${position.current.x} ${position.current.y} Q${position.current.x - 90} ${position.current.y + 110}, ${position.current.x} ${position.current.y} Z`}
      fill="#6BC1F7"
    />
  );
};

export default Melanoma;
