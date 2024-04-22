import React, { useEffect, useRef } from "react";

const Carcinoma = ({ x, y, viewBox }) => {
  //const margin = 50;
    const position = useRef({ x: x, y: y });
  // const randomX = useRef(
  //   Math.random() * (viewBox[2] - margin * 2) + viewBox[0] + margin,
  // );
  // const randomY = useRef(
  //   Math.random() * (viewBox[3] - margin * 2) + viewBox[1] + margin,
  // );

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
    <rect
      x={position.current.x}
      y={position.current.y}
      width={100}
      height={80}
      fill="#FF6347"
    />
  );
};

export default Carcinoma;
