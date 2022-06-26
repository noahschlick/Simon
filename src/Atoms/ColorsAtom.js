import {
    atom,
  } from 'recoil';
import { gameColors } from '../GameColors'
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'color-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
})

export const colorsState = atom({
    key: "colorsState",
    default: gameColors[0],
    effects_UNSTABLE: [persistAtom],
});

