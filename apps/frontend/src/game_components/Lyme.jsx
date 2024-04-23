// LymeDisease.jsx
import React, { useEffect, useRef } from "react";

const LymeDisease = ({ x, y, viewBox }) => {
    const position = useRef({ x: x, y: y });

  useEffect(() => {
    position.current = { x: x, y: y };
  }, [x, y, viewBox]);

  return (
    <g transform={`translate(${position.current.x}, ${position.current.y})`}>
      <circle cx={0} cy={0} r={50} fill="#8DB600" />
      <ellipse cx={0} cy={0} rx={70} ry={45} fill="#8DB600" />
    </g>
  );
};

export default LymeDisease;
