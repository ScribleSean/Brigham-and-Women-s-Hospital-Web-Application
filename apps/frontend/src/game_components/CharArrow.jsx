import React from "react";
import { allCharacters } from "./Characters";

const CharArrow = ({ direction, currentCharacterIndex, setCurrentCharacterIndex }) => {
    const nextDirection = (direction === "left")? -1 : +1;
    const nextIndex = (currentCharacterIndex + nextDirection) % allCharacters.length;

    const arrowImg = `/${direction}Arrow.png`;

    return (
        <div onClick={setCurrentCharacterIndex(nextIndex)}>
            <image href={arrowImg} ></image>
        </div>
    );
};

export default CharArrow;
