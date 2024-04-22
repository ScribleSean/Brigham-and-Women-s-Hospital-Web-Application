// Sarcoma.jsx
import React, { useEffect, useRef } from "react";

const Sarcoma = ({ x, y, viewBox }) => {
  const position = useRef({ x: x, y: y });

  useEffect(() => {
    position.current = { x: x, y: y };

    //Delete shape if offscreen
    if( position.current.x < viewBox[0] ||
        position.current.x > viewBox[0] + viewBox[2] ||
        position.current.y < viewBox[1] ||
        position.current.y > viewBox[1] + viewBox[3]) {
        return undefined;
    }

  }, [x, y, viewBox]);

  return (
      <circle
        cx={position.current.x}
        cy={position.current.y}
        r={40}
        fill="#800080"
      />
  );
};

export default Sarcoma;
