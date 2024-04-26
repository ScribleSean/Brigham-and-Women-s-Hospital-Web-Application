import React from "react";
import CharArrow from "./CharArrow.jsx";

const CharCarrusel = ({ currentCharacterIndex, setCurrentCharacterIndex }) => {

    return <div>
        <CharArrow direction={"left"} currentCharacterIndex={currentCharacterIndex} setCurrentCharacterIndex={setCurrentCharacterIndex}/>
        <div>
            //Character frame
        </div>
        <div>
            //Character Stats
        </div>
        <CharArrow direction={"right"} currentCharacterIndex={currentCharacterIndex} setCurrentCharacterIndex={setCurrentCharacterIndex}/>
    </div>;
};

export default CharCarrusel;
