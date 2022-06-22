import {
    atom,
  } from 'recoil';
import { gameColors } from './GameColors'

export const colorsState = atom({
    key: "colorsState",
    default: gameColors[0]
});

