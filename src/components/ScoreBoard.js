import React from 'react'
import { useRecoilState } from 'recoil';
import { orderState } from '../Atoms/OrderAtom';
import { scoreStateSm, scoreStateMd, scoreStateLg } from '../Atoms/ScoreBoardAtom'

import TimeAgo from 'react-timeago'
//import TimeAgo from 'react-timeago'

function ScoreBoard() {
  const [order, setOrder] = useRecoilState(orderState)

  const [scoreSm, setScore] = useRecoilState(scoreStateSm)
  const [scoreMd, setScoreMd] = useRecoilState(scoreStateMd)
  const [scoreLg, setScoreLg] = useRecoilState(scoreStateLg)



  return (
    <div className="flex-1 shadow-sm border-2 border-slate-200 rounded-md">
      <div className ="flex flex-col">
        <div className="flex p-5 font-semibold subpixel-antialiased border-b-2">
          <h3 className="font-face-gm">Round:</h3>
          <h3 className="font-face-gm">{order.length - 1}</h3>
        </div>

        <div className="flex ">
          <TimeAgo date='Feb 1, 1966'/>

          

        </div>
           
        
      </div>
        
        
    </div>
  )
}

export default ScoreBoard