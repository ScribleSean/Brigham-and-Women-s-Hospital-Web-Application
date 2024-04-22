// Lymphoma.jsx
import React, { useEffect, useRef } from "react";

const Lymphoma = ({ x, y, viewBox }) => {
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
      d={`M${position.current.x} ${position.current.y} Q${position.current.x - 50} ${position.current.y + 50}, ${position.current.x} ${position.current.y + 100}, ${position.current.x + 50} ${position.current.y + 150}, ${position.current.x + 100} ${position.current.y + 100}, ${position.current.x + 150} ${position.current.y + 50}, ${position.current.x + 100} ${position.current.y}`}
      fill="#FF0000"
    />
  );
};

export default Lymphoma;
