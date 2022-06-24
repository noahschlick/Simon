import {
    atom,
} from 'recoil'
import PriorityQueue from '../PriorityQueue'

var pq1 = new PriorityQueue()
var pq2 = new PriorityQueue()
var pq3 = new PriorityQueue()

export const scoreStateSm = atom({
    key: "scoreBoardSm",
    default: pq1
})

export const scoreStateMd = atom({
    key: "scoreStateMed",
    default: pq2
})

export const scoreStateLg = atom({
    key: "scoreStateLg",
    default: pq3
})



