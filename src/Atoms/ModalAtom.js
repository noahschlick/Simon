import {
    atom,
  } from 'recoil';

export const modalState = atom({
    key: "orderState",
    default: {state: false, score: 0}
})

