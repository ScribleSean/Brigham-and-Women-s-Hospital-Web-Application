import React from "react";

const CharSquare = ({ getCharacter, character, onClick }) => {
  const selected = getCharacter() === character;

  const style = {
    cursor: "pointer",
    border: selected ? "6px solid #FFD700" : "6px solid white", // Highlight if active
    margin: "1px",
    display: "inline-block",
    backgroundColor: "grey",
    backgroundImage: `url(${character.frames[0]})`,
    backgroundSize: "cover",
    width: "140px",
    height: "140px",
    boxSizing: "border-box", // Ensures padding and border are included in the width/height
  };

  return <div style={style} onClick={onClick}></div>;
};

export default CharSquare;
