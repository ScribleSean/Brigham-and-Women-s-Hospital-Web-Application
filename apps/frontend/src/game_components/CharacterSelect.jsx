import React, { useState, useEffect } from "react";
import { useCharacterSelector } from "./hooks/useCharacterSelector.jsx";
import CharCarrusel from "./CharCarrusel.jsx";
import CharChunk from "./CharChunk.jsx";
import { Characters } from "./Characters";
import "../game_styles/CharacterSelect.css";

const CharacterSelect = () => {
  const {
    currentIndex,
    setCurrentIndex,
    movePrev,
    moveNext,
    getCharacter,
    selectedStatus,
  } = useCharacterSelector(Characters.Gabe);

  const [showContinueImage, setShowContinueImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContinueImage((prev) => !prev);
    }, 750); // Toggle every second (adjust the interval as needed)

    return () => clearInterval(interval);
  }, []);

  const waterMarkBG = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: "#141414",
    backgroundImage: "url('/BrighamWatermarkFinal.png')",
    backgroundSize: "25%",
    backgroundPosition: "50% 0",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "repeat",
    animation: "scrollBackground 60s linear infinite",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 500,
    opacity: selectedStatus ? 0.8 : 0,
    transition: "opacity 0.2s ease-in-out",
    pointerEvents: "none",
  };

  const continueImage = {
    position: "fixed",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-40%)",
    display: showContinueImage ? "block" : "none",
  };

  return (
    <>
      <div style={overlayStyle}></div>
      <div style={waterMarkBG}></div>

      <div
        className={"container-fluid p-0 m-0"}
        style={{ position: "relative", zIndex: 1000 }}
      >
        <div className={"row row-8 p-0 m-0"}>
          <CharCarrusel
            movePrev={movePrev}
            moveNext={moveNext}
            getCharacter={getCharacter}
            currentIndex={currentIndex}
            selectedStatus={selectedStatus}
          />
        </div>
        <div className={"row row-4 p-0 m-0"}>
          <CharChunk
            selectedStatus={selectedStatus}
            setCurrentIndex={setCurrentIndex}
            getCharacter={getCharacter}
          />
        </div>
        <div style={continueImage}>
          <img
            src={"/continue.png"}
            width={"250px"}
            height={"100px"}
            alt={"Continue?"}
          />
        </div>
      </div>
    </>
  );
};

export default CharacterSelect;
