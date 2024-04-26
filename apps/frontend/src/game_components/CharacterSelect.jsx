import React, {useState} from "react";
import Characters from "./Characters.ts";
import CharCarrusel from "./CharCarrusel.jsx";
import CharChunk from "./CharChunk.jsx";

const CharacterSelect = () => {
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(Characters.Gabe);


    const waterMarkBG = {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#141414",
        backgroundImage: "url('/BrighamWatermarkFinal.png')",
        backgroundSize: "25%",
        backgroundPosition: "50% 0", // Add spacing between columns
        width: "100vw", // Adjust to fill the viewport horizontally
        height: "100vh", // Adjust to fill the viewport vertically
        backgroundRepeat: "repeat",
    };

    return <div style={waterMarkBG}>
        <CharCarrusel currentCharacterIndex={currentCharacterIndex} selectCurrentCharacter Index={setCurrentCharacterIndex}/>
        <CharChunk currentCharacterIndex={currentCharacterIndex} selectCurrentCharacter Index={setCurrentCharacterIndex}/>
    </div>;
};

export default CharacterSelect;
