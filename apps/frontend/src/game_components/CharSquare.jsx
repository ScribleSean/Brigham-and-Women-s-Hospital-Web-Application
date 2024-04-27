import React from "react";

const CharSquare = ({ getCharacter, character, onClick }) => {
  const selected = getCharacter() === character;

  const style = {
    cursor: "pointer",
    border: selected ? "1px solid blue" : "1px solid grey", // Highlight if active
    padding: "10px",
    margin: "5px",
    display: "inline-block",
    backgroundColor: selected ? "blue" : "grey",
    backgroundImage: `url(${character.frames[0]})`,
    backgroundSize: "cover",
    width: "100px",
    height: "100px",
  };

  return (
    <div style={style} onClick={onClick}>
      <img src={character.frames[0]} alt={character.name} />
    </div>
  );
};

export default CharSquare;
