import React from "react";
import { allCharacters } from "./Characters";
import CharSquare from "./CharSquare.jsx";

const CharChunk = ({ getCharacter, setCurrentIndex }) => {
  // Define the styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        {/* Map over the first 7 indexes */}
        {allCharacters.slice(0, 7).map((character, index) => (
          <div>
            <CharSquare
              key={index}
              character={character}
              onClick={() => setCurrentIndex(index)}
              getCharacter={getCharacter}
            />
          </div>
        ))}
      </div>
      <div style={rowStyle}>
        {/* Map over the next 6 indexes */}
        {allCharacters.slice(7, 13).map((character, index) => (
          <div>
            <CharSquare
              key={index + 7} // Adding 7 to index to ensure uniqueness
              character={character}
              onClick={() => setCurrentIndex(index + 7)} // Adding 7 to index to maintain correct index in the original array
              getCharacter={getCharacter}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharChunk;
