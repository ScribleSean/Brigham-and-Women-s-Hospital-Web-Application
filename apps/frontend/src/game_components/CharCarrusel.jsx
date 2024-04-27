import React from "react";
import CharArrow from "./CharArrow.jsx";

const CharCarrusel = ({ getCharacter, movePrev, moveNext }) => {
  const character = getCharacter();
  console.log(character);
  return (
    <div>
      <CharArrow direction="left" onClick={movePrev} />
      <div>
        {/* Display the character frame or other details */}
        <img src={character.frames[0]} alt={character.name} />
        <p>{character.name}</p>
      </div>
      <CharArrow direction="right" onClick={moveNext} />
    </div>
  );
};

export default CharCarrusel;
