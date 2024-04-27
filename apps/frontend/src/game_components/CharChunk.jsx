import React from "react";
import { allCharacters } from "./Characters";
import CharSquare from "./CharSquare.jsx";

const CharChunk = ({ currentCharacterIndex, setCurrentIndex }) => {
  return (
      <div>
        {allCharacters.map((character, index) => (
            <CharSquare
                key={index}
                character={character}
                isActive={index === currentCharacterIndex}
                onClick={() => setCurrentIndex(index)}
            />
        ))}
      </div>
  );
};

export default CharChunk;

