import {
    atom,
  } from 'recoil';

/*class Game {
    constructor(inSeq, isOver, score, order) {
        this.order=order
        this.isOver = isOver
        this.score = score
        this.order = order
    }

    displayInfo() {
        return  "Order: " + this.order + "\n" +
                "isOver: " + this.isOver + "\n" +
                "score: " + this.score + "\n" +
                "Order: " + this.order + "\n"
    }
}*/

export const GameState = atom({
    key: "gameState",
    default: {
        didStart: false, 
        isOver: false, 
        score: 0, 
    }
})