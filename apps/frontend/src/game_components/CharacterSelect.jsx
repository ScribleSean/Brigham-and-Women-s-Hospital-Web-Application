import React from "react";
import { useCharacterSelector } from "./hooks/useCharacterSelector.jsx"; // Ensure the path is correct
import CharCarrusel from "./CharCarrusel.jsx";
import CharChunk from "./CharChunk.jsx";
import { Characters } from "./Characters"; // Assuming the correct path

const CharacterSelect = () => {
  const { setCurrentIndex, movePrev, moveNext, getCharacter } = useCharacterSelector(Characters.Gabe);

  const waterMarkBG = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "#141414",
    backgroundImage: "url('/BrighamWatermarkFinal.png')",
    backgroundSize: "25%",
    backgroundPosition: "50% 0",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "repeat",
  };

  return (
    <div style={waterMarkBG}>
      <CharCarrusel
        movePrev={movePrev}
        moveNext={moveNext}
        getCharacter={getCharacter}
      />
      <CharChunk
          setCurrentIndex={setCurrentIndex}
          getCharacter={getCharacter}
      />
    </div>
  );
};

export default CharacterSelect;
