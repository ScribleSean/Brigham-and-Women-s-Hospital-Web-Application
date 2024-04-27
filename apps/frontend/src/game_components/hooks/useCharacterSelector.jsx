import { useState, useCallback, useEffect } from "react";
import { allCharacters } from "../Characters.js";

export function useCharacterSelector(initialIndex) {
  const [index, setIndex] = useState(initialIndex);
  const itemCount = allCharacters.length;

  const firstRowSize = 6;
  const secondRowSize = 7;

  const setIndexSafely = useCallback(
      (newIndex) => {
        setIndex((newIndex + itemCount) % itemCount);
      },
      [itemCount]
  );

  const movePrev = useCallback(() => {
    setIndexSafely(index - 1);
  }, [index, setIndexSafely]);

  const moveNext = useCallback(() => {
    setIndexSafely(index + 1);
  }, [index, setIndexSafely]);

  const moveUp = useCallback(() => {
    if (index >= firstRowSize) { // Ensures it is at least in the second row
      const newIndex = index - secondRowSize;
      setIndexSafely(newIndex);
    }
  }, [index, setIndexSafely, secondRowSize]);


  const moveDown = useCallback(() => {
    if (index < firstRowSize) {
      const newIndex = index + secondRowSize;
      setIndexSafely(newIndex);
    }
  }, [index, setIndexSafely, secondRowSize, firstRowSize]);


  const setCurrentIndex = useCallback(
      (newIndex) => {
        setIndexSafely(newIndex);
      },
      [setIndexSafely]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
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

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [movePrev, moveNext, moveUp, moveDown]);

  const getCharacter = useCallback(() => {
    return allCharacters[index];
  }, [index]);

  return {
    currentIndex: index,
    setCurrentIndex,
    movePrev,
    moveNext,
    moveUp,
    moveDown,
    getCharacter,
  };
}

