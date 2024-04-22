import React, { useEffect, useRef } from "react";

const Carcinoma = ({ x, y, viewBox }) => {
  const margin = 50;
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
