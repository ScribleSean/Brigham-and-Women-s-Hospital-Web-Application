// Amoeba.jsx
import React, { useEffect, useRef } from "react";

const Melanoma = ({ x, y, viewBox }) => {
  const position = useRef({ x: x, y: y });

  useEffect(() => {
    position.current = { x: x, y: y };

      if( position.current.x < viewBox[0] ||
          position.current.x > viewBox[0] + viewBox[2] ||
          position.current.y < viewBox[1] ||
          position.current.y > viewBox[1] + viewBox[3]) {
          return undefined;
      }
  }, [x, y, viewBox]);

  return (
    <path
      d={`M${position.current.x} ${position.current.y} C${position.current.x - 85} ${position.current.y - 110}, ${position.current.x + 140} ${position.current.y - 110}, ${position.current.x} ${position.current.y} S${position.current.x + 140} ${position.current.y + 110}, ${position.current.x} ${position.current.y} Q${position.current.x - 90} ${position.current.y + 110}, ${position.current.x} ${position.current.y} Z`}
      fill="#6BC1F7"
    />
  );
};

export default Melanoma;
