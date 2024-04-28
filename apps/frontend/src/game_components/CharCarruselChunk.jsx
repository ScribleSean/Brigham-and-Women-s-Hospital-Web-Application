import React from "react";

const CharCarruselChunk = ({ character }) => {
  const generalStyle = {
    marginLeft: "20%",
    marginRight: "20%",
  };

  const imageStyle = {
    display: "block",
    margin: "0 auto", // Center the image horizontally
    maxHeight: "80%", // Adjusted height for the image
  };

  const bioStyle = {
    height: "600px",
    width: "200px",
    backgroundColor: "black",
    border: "5px solid white",
    color: "white",
    fontFamily: "'HISKYFLIPPERHIBOLD', sans-serif",
  };

  const portraitStyle = {
    height: "600px",
    backgroundColor: "black",
    border: "5px solid white",
    color: "white",
    fontFamily: "'HISKYFLIPPERHIBOLD', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const statsStyle = {
    height: "600px",
    backgroundColor: "black",
    border: "5px solid white",
    color: "white",
    fontFamily: "'HISKYFLIPPERHIBOLD', sans-serif",
  };

  const renderSpeedSquares = () => {
    const squares = [];
    for (let i = 0; i < character.speed; i++) {
      squares.push(
        <div
          key={i}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "yellow",
            margin: "2px",
          }}
        ></div>,
      );
    }
    return squares;
  };

  return (
    <div
      className={"row justify-content-center mt-4 mb-4"}
      style={generalStyle}
    >
      {/* Bio */}
      <div className={"col-lg-3 mx-3"} style={bioStyle}>
        <h3>Role:</h3>
        <p>Front End Developer</p>
        <h3 className={"pt-2"}>Quote:</h3>
        <p>Burger Explosion Jose Quote</p>
        <h3 className={"pt-2"}>Back Story:</h3>
        <p>Burger Explosion Jose Quote</p>
      </div>
      {/* Portrait */}
      <div className={"col-lg p-2 mx-3"} style={portraitStyle}>
        <h1>{character.name}</h1>
        <img
          src={character.frames[0]}
          alt={character.name}
          style={imageStyle}
        />
      </div>
      {/* Stats */}
      <div className={"col-lg-3 mx-3"} style={statsStyle}>
        <h3>Speed</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {renderSpeedSquares()}
        </div>
        <p>Health: {character.health}</p>
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
