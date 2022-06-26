import {
    atom,
} from 'recoil'
import PriorityQueue from '../PriorityQueue'
import { recoilPersist } from 'recoil-persist'


var pq1 = new PriorityQueue()
var pq2 = new PriorityQueue()
var pq3 = new PriorityQueue()

var scoreBoard = {0: [], 1: [], 2: []}

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
})

export const scoreState = atom({
    key: "scoreBoardSm",
    default: [[], [], []],
    effects_UNSTABLE: [persistAtom],

})





