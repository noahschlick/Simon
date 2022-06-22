import React, { useRef } from 'react'
import { useState } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
import "./Game.css"
import { gameColors } from '../GameColors'
import { useRecoilState } from 'recoil';
import { colorsState } from '../ColorsAtom'
import playImage from '../Images/playImage.png'
import { orderState } from '../OrderAtom';


export default function Game() {
  //const [colors, setColors] = useState(["#B22727", "#0097e6", "#44bd32", "#ffaa00"])
  const [colors, setColors] = useRecoilState(colorsState)
  const [selected, setSelected] = useState("")
  const [waiting, setWaiting] = useState(true)
  const [inSeq, setInSeq] = useState(false)
  const [turn, setTurn] = useState(false)
  const [gameOrder, setGameOrder] = useState([])
  const [order, setOrder] = useRecoilState(orderState)
  const seq = useRef(false)

  /**
   * Add Random Number
   * adds a random color to the game
   */
  const addRandomColor = () => {
    setInSeq(true)
    var n = colors.length - 1
    
    // No repeating colors are allowed as of now
    var rand = Math.floor(Math.random() * (n + 1));
    while (order.length > 0 && colors[rand] === order[order.length - 1]) {
        rand = Math.floor(Math.random() * (n + 1));
    }

    // Add the color to the current order of the recoil array
    setOrder(order => [...order, colors[rand]])
  }

  /**
   * runSequence
   * @param {*} colors 
   * This function runs all of the colors 
   * that the player needs to memorize.
   */
  const runSequence = () => {
    
    addRandomColor()
    console.log("Current Order: ", order)
    console.log(inSeq)
    
    // Run the sequence of colors 
    setWaiting(false)
    seq.current = true
    console.log("First: ", seq.current)
    setTimeout(function() {
      
      for (let i = 0; i <= order.length; i++) {
        setTimeout(function() {
          if (i === order.length) {
            console.log("Color: ", "")
            setSelected("")
            seq.current = false
            console.log("Second: ", seq.current)
          } else {
            console.log("Color: ", order[i])
            setSelected(order[i])
          }
        }, 700 * i);
      }
      
      
    }, 1000);
    
    
    

  }
  

  return (
    <div className={`flex justify-center mt-10 `}>
      <div 
        className={`transition ease-in-out delay-200 
          border-2 border-blue-100 p-10 rounded-lg drop-shadow-md 
          ${waiting ? 'cursor-pointer hover:bg-blue-100 hover:-translate-y-1' : ''}
        `}
        onClick={() => {runSequence(colors);}}
      >
        {waiting ? (
          <div className={`transition ease-in-out delay-200 hover:-translate-y-20 hover:opacity-90
          relative z-50 opacity-0`}>
            <img className={`absolute object-center top-20`} src={playImage} alt=""/>
          </div>
        ):<></>
        }
        
        
        <AnimateSharedLayout >
          <ul className={`grid grid-flow-col gap-4 
            ${colors.length === 4 ? 'grid-rows-2' : 'grid-rows-3'}

          `}  
          >
            { colors.map(color => (
              <Item
                key={color}
                color={color}
                isSelected={selected === color}
                onClick={() => setSelected(color)}
                waiting = {waiting}
                seq = {seq}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
   </div>
  );
}

function Item({ color, isSelected, onClick, waiting, seq }) {
  return (
    <div>
      {seq.current === true ? (

      <li 
        className={`item drop-shadow-lg cursor-not-allowed  bg-blue-300 ${waiting ? 'opacity-30' : ''} `}
        
        style={{background: color}}
      >
        {isSelected && (
          <motion.div
            layoutId="outline__a"
            className="outline__a"
            initial={false}
            animate={{ borderColor: color }}
            transition={spring}
          />
        )}
      </li>
    ) : (
      <li 
      className={`item drop-shadow-lg cursor-pointer bg-green-300 ${waiting ? 'opacity-30': ''} `}
      onClick={onClick} 
      style={{ background: color}}
      >
        {isSelected && (
          <motion.div
            layoutId="outline__a"
            className="outline__a"
            initial={false}
            animate={{ borderColor: color }}
            transition={spring}
          />
        )}
      </li>
    )}
   
    
    

    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
}
