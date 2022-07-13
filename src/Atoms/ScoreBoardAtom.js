import {
    atom,
} from 'recoil'
import PriorityQueue from '../PriorityQueue'
import { recoilPersist } from 'recoil-persist'



const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
})

export const scoreState = atom({
    key: "scoreBoardSm",
    default: [[], [], []],
    effects_UNSTABLE: [persistAtom],

})





