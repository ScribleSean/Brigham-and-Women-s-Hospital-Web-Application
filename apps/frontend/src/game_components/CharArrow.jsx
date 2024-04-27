import React from "react";

const CharArrow = ({ direction, onClick }) => {
  const arrowImg = `${direction}-arrow`;

  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={arrowImg} alt={arrowImg} />
    </div>
  );
};

export default CharArrow;
