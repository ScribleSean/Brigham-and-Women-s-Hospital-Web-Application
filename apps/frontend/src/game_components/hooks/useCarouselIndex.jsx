import { useState, useCallback } from "react";
import {allCharacters} from "../Characters.js";

export function useCarouselIndex(initialIndex) {
    const [index, setIndex] = useState(initialIndex);
    const itemCount = allCharacters.length;

    const setIndexSafely = useCallback((newIndex) => {
        setIndex((newIndex + itemCount) % itemCount);
    }, [itemCount]);

    const movePrev = useCallback(() => {
        setIndexSafely(index - 1);
    }, [index, setIndexSafely]);

    const moveNext = useCallback(() => {
        setIndexSafely(index + 1);
    }, [index, setIndexSafely]);

    const setCurrentIndex = useCallback((newIndex) => {
        setIndexSafely(newIndex);
    }, [setIndexSafely]);

    const getCharacter = useCallback(()=>{
        return allCharacters[index];
    },[index]);

    return {currentIndex: index, movePrev, moveNext, setCurrentIndex, getCharacter};
}
