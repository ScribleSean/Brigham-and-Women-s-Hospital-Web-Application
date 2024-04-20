export const MOVE_CHARACTER = "MOVE_CHARACTER";

export const moveCharacter = (direction) => ({
  type: MOVE_CHARACTER,
  direction,
});
