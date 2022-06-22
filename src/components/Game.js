import React from 'react'
import { useState } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
import "./Game.css"
import { gameColors } from '../GameColors'
import { useRecoilState } from 'recoil';
import { colorsState } from '../ColorsAtom'

export default function Game() {
  //const [colors, setColors] = useState(["#B22727", "#0097e6", "#44bd32", "#ffaa00"])
  const [colors, setColors] = useRecoilState(colorsState)
  const [selected, setSelected] = useState(colors[0])
  

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="border-2 border-blue-100 p-10 rounded-lg drop-shadow-md ">
        <AnimateSharedLayout>
          <ul className={`grid ${colors.length === 4 ? 'grid-rows-2' : 'grid-rows-3'} grid-flow-col gap-4`}>
            { colors.map(color => (
              <Item
                key={color}
                color={color}
                isSelected={selected === color}
                onClick={() => setSelected(color)}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
   </div>
  );
}

function Item({ color, isSelected, onClick }) {
  return (
    <li className="item drop-shadow-lg" onClick={onClick} style={{ background: color}}>
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
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
}
