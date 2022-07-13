import React from 'react'
import { useRecoilState } from 'recoil'
import { GameState } from '../Atoms/GameAtom'
import { sequenceState } from '../Atoms/sequenceAtom'
import playImage from '../Images/playImage.png'

function Start() {
    const [sequence, setSequence] = useRecoilState(sequenceState)
    const [game, setGameState] = useRecoilState(GameState)
  return (
    <div className="mt-10" onClick={() => setGameState({didStart: true, isOver: false, score: 0})}>
        <div className="border-2 rounded-lg drop-shadow-md w-96 h-96 mx-40">
            <div className={`transition ease-in-out delay-200 hover:-translate-y-20 hover:opacity-90
                relative z-50 opacity-0 cursor-pointer`}>
                <img className={`absolute object-center top-20`} src={playImage} alt=""/>
            </div>
        </div>
    </div>
    
  )
}

export default Start