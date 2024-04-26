import React from "react";
import { allCharacters } from "./Characters";

const CharSquare = ({ currentCharacterIndex, setCurrentCharacterIndex }) => {
    const character = allCharacters[currentCharacterIndex];
    //Add white border and black background and image size

    return (
        <div onClick={setCurrentCharacterIndex(currentCharacterIndex)}>
            <image href={character.frames[0]} ></image>
        </div>
    );
};

export default CharSquare;
