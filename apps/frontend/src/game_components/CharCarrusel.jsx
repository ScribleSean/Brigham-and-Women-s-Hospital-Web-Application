import React from "react";
import CharArrow from "./CharArrow.jsx";

const CharCarrusel = ({ getCharacter, movePrev, moveNext }) => {
  const character = getCharacter();
  console.log(character);
  return (
    <div className="row">
      <div className="col bg-white">
        <CharArrow direction="left" onClick={movePrev} />
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">
        {/* Display the character frame or other details */}
        <p className={"bg-white"}>{character.name}</p>
        <img src={character.frames[0]} alt={character.name} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        {/* Display the character stats */}
        <p className={"bg-white"}>{character.speed}</p>
      </div>
      <div className="col bg-white">
        <CharArrow direction="right" onClick={moveNext} />
      </div>
    </div>
  );
};

export default CharCarrusel;
