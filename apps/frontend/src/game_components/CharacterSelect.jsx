import React from "react";
import { useCarouselIndex } from "./hooks/useCarouselIndex"; // Ensure the path is correct
import CharCarrusel from "./CharCarrusel.jsx";
import CharChunk from "./CharChunk.jsx";
import { Characters } from "./Characters"; // Assuming the correct path

const CharacterSelect = () => {
    const {movePrev, moveNext, setCurrentIndex, getCharacter} = useCarouselIndex(Characters.Gabe); // you can currentCurruselIndex too


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
