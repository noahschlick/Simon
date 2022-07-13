import { useQuery } from '@apollo/client'
import React from 'react'
import TimeAgo from 'react-timeago'
import { useRecoilState } from 'recoil'
import { colorsState } from '../Atoms/ColorsAtom'
import { scoreState } from '../Atoms/ScoreBoardAtom'
import { GET_LEADER_BOARD_BY_GAME } from '../graphql/queries'
import Avatar from './Avatar'

function LeaderBoard({leaders}) {

  const [colors, setColors] = useRecoilState(colorsState)
  const [score, setScore] = useRecoilState(scoreState)

  return (
    <div  className="flex-1 shadow-sm border-2 border-slate-200 rounded-md ">
        <div className="p-5 font-bold subpixel-antialiased border-b-2 text-gray-800">
          Leader Board
        </div>
        
        <div className="flex flex-col">
          {leaders?.map((leader, i) => (
            <div className={`grid grid-cols-4 py-2 ${i === leaders.length - 1 ? (''):('border-b-2')} pr-3 pl-3`}>
                <Avatar seed={leader.playerName} />
                
                <div className="flex flex-col col-span-2">
                  <h3  className="text-gray-800 pt-1 font-bold">{leader.playerName}</h3>
                  <TimeAgo className="text-gray-500 pt-1" date={leader.created_at}/>
                </div>

                <h3 className="text-gray-700 pt-1 my-auto font-bold ">Score: {leader.score}</h3>
               
            </div>
          ))}
        </div>


    </div>
  )
}

export default LeaderBoard