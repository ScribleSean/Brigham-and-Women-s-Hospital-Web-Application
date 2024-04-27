import React from "react";

const CharCarruselChunk = ({ character }) => {
  const generalStyle = {
    backgroundColor: "blue",
    marginLeft: "20%",
    marginRight: "20%",
  };

  return (
    <div style={generalStyle}>
      <div>
        <img src={character.frames[0]} alt={character.name} />
      </div>
      <div>
        <p>Name: {character.name}</p>
        <p>Health: {character.health}</p>
        <p>Speed: {character.speed}</p>
        <p>
          Dimensions: {character.dimensions.width} x{" "}
          {character.dimensions.height}
        </p>
        <p>Passive: {character.passive}</p>
      </div>
    </div>
  );
};

export default CharCarruselChunk;
