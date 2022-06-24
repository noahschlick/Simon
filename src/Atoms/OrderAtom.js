import {
    atom,
  } from 'recoil';

import { gameColors } from '../GameColors';

export const orderState = atom({
    key: "orderState",
    default:['#B22727']
});