import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil';
import { orderState } from '../Atoms/OrderAtom';

import TimeAgo from 'react-timeago'
import { scoreState } from '../Atoms/ScoreBoardAtom'
import { colorsState } from '../Atoms/ColorsAtom';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer-neutral';
import { sort } from '../HeapSort';

function ScoreBoard() {
  const [order, setOrder] = useRecoilState(orderState)
  const [scoreBoard, setScoreBoard]  = useRecoilState(scoreState)
  const [colors, setColors] = useRecoilState(colorsState)
  const scores = useRef([])
  var array = []

  let avatar = createAvatar(style, {
    seed: 'custom-seed',
  });

  /* Updates the scoreboard when user updates the game size. */ 
  useEffect(() => {
    console.log("Hello: ",colors.length )
    switch (colors.length) {
      case 4:
        scores.current = scoreBoard[0]
        var arr = Array.from(scores.current)
        sort_i(arr)
        scores.current = arr
        break;
      case 6:
        scores.current = scoreBoard[1]
        var arr = Array.from(scores.current)
        sort_i(arr)
        scores.current = arr
        break;
      case 9:
        scores.current = scoreBoard[2]
        var arr = Array.from(scores.current)
        sort_i(arr)
        scores.current = arr
        break;
      default:
    }
  }, [colors, scoreBoard])

  function sort_i(arr){
    let i, key, j; 
    for (i = 1; i < arr.length; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
        while (j >= 0 && arr[j][1] < key[1])
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 

  }


  return (
    <div className="flex-1 shadow-sm border-2 border-slate-200 rounded-md mb-20">
      <div className ="flex flex-col ">
        <div className="flex p-5 font-semibold subpixel-antialiased border-b-2">
          <h3 className="font-face-gm">Round:</h3>
          <h3 className="font-face-gm">{order.length - 1}</h3>
        </div>

        <div className="flex flex-col cursor-pointer " >
          {
            scores.current.length >= 0 ? (
              scores.current.map((score, i) => (
                <div className = {`grid grid-cols-3 py-2 ${i === scores.current.length - 1 ? (''):('border-b-2')} `}>
                  <div className="w-11 h-8 bg-red-300 mr-5 shadow-md rounded-md ml-5 ">
                    <h3 className="text-white ml-5 mt-1">{(i < 10)?(0):('')}{i + 1}</h3>
                    
                  </div>
                  <TimeAgo  className="text-gray-600 pt-1 " date={score}/>
                  <h3 className="text-gray-800 pt-1">Score: {score[1]}</h3>
                  
                </div>
                
              ))
            ) : (
              <></>
            )
            
          }
        </div>
           
      </div>
        
    </div>
  )
}

export default ScoreBoard