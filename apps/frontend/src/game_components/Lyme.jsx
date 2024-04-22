// LymeDisease.jsx
import React, { useEffect, useRef } from "react";

const LymeDisease = ({ x, y, viewBox }) => {
  const margin = 50; // Margin to keep the lyme disease fully visible within the viewBox
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
    <g transform={`translate(${position.current.x}, ${position.current.y})`}>
      <circle cx={0} cy={0} r={50} fill="#8DB600" />
      <ellipse cx={0} cy={0} rx={70} ry={45} fill="#8DB600" />
    </g>
  );
};

export default LymeDisease;
