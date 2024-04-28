import React from "react";

const CharSquare = ({ getCharacter, character, onClick }) => {
  const selected = getCharacter() === character;

  const style = {
    cursor: "pointer",
    border: selected ? "6px solid #FFD700" : "6px solid white", // Highlight if active
    marginLeft: "1px",
    marginRight: "1px",
    marginBottom: "2px",
    backgroundColor: "grey",
    backgroundImage: `url(${character.frames[0]})`,
    backgroundSize: "cover",
    width: "135px",
    height: "135px",
  };

  return <div style={style} onClick={onClick}></div>;
};

export default CharSquare;
