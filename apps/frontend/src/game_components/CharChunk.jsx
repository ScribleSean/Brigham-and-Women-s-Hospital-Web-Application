import React from "react";
import { allCharacters } from "./Characters";
import CharSquare from "./CharSquare.jsx";

const CharChunk = ({ currentCharacterIndex, setCurrentCharacterIndex }) => {
    return (
        <div>
            {allCharacters.map((character, index) => (
                <CharSquare
                    key={index}
                    setCurrentCharacterIndex={() => setCurrentCharacterIndex(index)}
                    currentCharacterIndex={currentCharacterIndex}
                />
            ))}
        </div>
    );
};

export default CharChunk;
