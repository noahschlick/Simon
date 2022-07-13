import React from 'react'

function GameOver() {
  return (
    <div className={`transition ease-in-out delay-200 hover:-translate-y-1
          absolute z-50 bg-gray-400 opacity-80 w-96 h-96 top-10 cursor-pointer
          grid grid-cols-1 place-content-center hover:opacity-80 border border-red-400 
          shadow-xl`}>
        <div className="mx-auto text-center subpixel-antialiased">
            <h3 className="font-face-gm">Game Over</h3>
            <h3 className="font-face-gm">Rounds: {9/*size.current*/}</h3>
            <h3 className="font-face-gm">Click To</h3>
            <h3 className="font-face-gm">Play Again</h3>
        </div>
    </div>
  )
}

export default GameOver