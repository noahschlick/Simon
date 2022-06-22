import React from 'react'
import { useRecoilState } from 'recoil';
import { orderState } from '../OrderAtom';

function ScoreBoard() {
  const [order, setOrder] = useRecoilState(orderState)
  return (
    <div className="flex-1 shadow-sm border-2 border-slate-200 rounded-md">
      <div className ="flex flex-col">
        <div className="flex p-5 font-semibold subpixel-antialiased">
          <h3 className="font-face-gm">Round:</h3>
          <h3 className="font-face-gm">30</h3>
        </div>
           
        <div className="flex px-5 pb-5 font-semibold">
          <h3 className="font-face-gm">Speed:</h3>
          <h3 className="font-face-gm">3</h3>
        </div>
      </div>
        
        
    </div>
  )
}

export default ScoreBoard