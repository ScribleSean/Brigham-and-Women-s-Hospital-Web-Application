import React from "react";

const CharCarruselChunk = ({ character }) => {
  return (
    <div className={"row bg-warning m-1"}>
      <div className={"col"}>
        <img src={character.frames[0]} alt={character.name} />
      </div>
      <div className={"col"}>
        <p>{character.speed}</p>
      </div>
    </div>
  );
};

export default CharCarruselChunk;
