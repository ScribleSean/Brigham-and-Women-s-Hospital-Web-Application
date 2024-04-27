import React, { useEffect } from "react";
import { allCharacters } from "./Characters";
import CharSquare from "./CharSquare.jsx";

const CharChunk = ({ currentCharacterIndex, setCurrentIndex, movePrev, moveNext, moveDown, moveUp }) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
        case 'ArrowLeft':
          movePrev();
          break;
        case 'ArrowRight':
          moveNext();
          break;
        case 'ArrowUp':
          moveUp();
          break;
        case 'ArrowDown':
          moveDown();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movePrev, moveNext, moveUp, moveDown]);

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
