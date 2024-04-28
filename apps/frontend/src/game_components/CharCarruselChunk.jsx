import React from "react";

const CharCarruselChunk = ({ character }) => {
  const generalStyle = {
    marginLeft: "20%",
    marginRight: "20%",
  };

  const imageStyle = {
    display: "block",
    margin: "0 auto", // Center the image horizontally
    maxHeight: "100%", // Ensure image fits within container
  };

  const bioStyle = {
    height: "600px",
    width: "200px",
  };

  const portraitStyle = {
    height: "600px",
  };

  const statsStyle = {
    height: "600px",
  };

  return (
    <div
      className={"row justify-content-center mt-4 mb-4"}
      style={generalStyle}
    >
      <div className={"col-lg-3 bg-primary mx-3"} style={bioStyle}>
        <p>Name: {character.name}</p>
        <p>Health: {character.health}</p>
        <p>Speed: {character.speed}</p>
        <p>
          Dimensions: {character.dimensions.width} x{" "}
          {character.dimensions.height}
        </p>
        <p>Passive: {character.passive}</p>
      </div>
      <div
        className={"col-lg p-2 bg-warning mx-3 d-flex justify-content-center"}
        style={portraitStyle}
      >
        <img
          src={character.frames[0]}
          alt={character.name}
          style={imageStyle}
        />
      </div>
      <div className={"col-lg-3 bg-primary mx-3"} style={statsStyle}>
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
