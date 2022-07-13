import React, { useEffect, useRef } from 'react'
import { useState } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
import "./Game.css"
import { gameColors } from '../GameColors'
import { useRecoilState } from 'recoil';
import { colorsState } from '../Atoms/ColorsAtom'
import playImage from '../Images/playImage.png'
//import { orderState } from '../Atoms/OrderAtom';
import { volumeState } from '../Atoms/VolumeAtom'
import PriorityQueue from '../PriorityQueue'



import sound_1 from '../AudioFiles/sound-1.mp3'
import sound_2 from '../AudioFiles/sound-2.mp3'
import sound_3 from '../AudioFiles/sound-3.mp3'
import sound_4 from '../AudioFiles/sound-4.mp3'
import sound_5 from '../AudioFiles/sound-5.mp3'
import sound_6 from '../AudioFiles/sound-6.mp3'
import sound_7 from '../AudioFiles/sound-7.mp3'
import sound_8 from '../AudioFiles/sound-8.mp3'
import sound_9 from '../AudioFiles/sound-9.mp3'
import { scoreState } from '../Atoms/ScoreBoardAtom'
import { modalState } from '../Atoms/ModalAtom'
import { GameState } from '../Atoms/GameAtom'



export default function Game({leaders}) {
  //const [colors, setColors] = useState(["#B22727", "#0097e6", "#44bd32", "#ffaa00"])
  const [colors, setColors] = useRecoilState(colorsState)
  //const [order, setOrder] = useRecoilState(orderState)
  const [currOrder, setCurrOrder] = useState([colors[0]])

  const [selected, setSelected] = useState("")
  const [volume, setVolume] = useRecoilState(volumeState)
  const [score, setScore] = useRecoilState(scoreState)
  const [modal, setModal] = useRecoilState(modalState)



  const [game, setGameState] = useRecoilState(GameState)

  // For refactoring purposes
  
  const [startSeq, setSeq] = useState(false)
 
  const index = useRef(0)
  const size = useRef(0)
  
  const audio_1 = new Audio ( sound_1 );
  const audio_2 = new Audio ( sound_2 );
  const audio_3 = new Audio ( sound_3 );
  const audio_4 = new Audio ( sound_4 );
  const audio_5 = new Audio ( sound_5 );
  const audio_6 = new Audio ( sound_6 );
  const audio_7 = new Audio ( sound_7 );
  const audio_8 = new Audio ( sound_8 );
  const audio_9 = new Audio ( sound_9 );

  useEffect(() => {
    console.log("Update info: ", colors)
    setGameState({didStart: false, isOver: false, score: 0})
    setCurrOrder([colors[0]])
    //setOrder([colors[0]])
    setSelected("")
  }, [colors])

  // Activated whenever the component first mounts
  useEffect(() => {
    //runSequence(colors)
    if (game.didStart === true) {
      runSequence(colors)
    }
  }, [game.didStart]);

  // Activates after user have checked all of the buttons
  useEffect(() => {
    if (startSeq === true){
      runSequence(colors)
    }
  }, [startSeq])


  // Plays the sound associated owith the button
  function playSound(color) {
    if (volume) {
      switch(color) {
        case colors[0]:
          audio_1.play();
          break;
        case colors[1]:
          audio_2.play();
          break;
        case colors[2]:
          audio_3.play();
          break;
        case colors[3]:
          audio_4.play();
          break;
        case colors[4]:
          audio_5.play();
          break;
        case colors[5]:
          audio_6.play();
          break;
        case colors[6]:
          audio_7.play();
          break;
        case colors[7]:
          audio_8.play();
          break;
        case colors[8]:
          audio_9.play();
          break;
        default:
      }
    }
  }


  /**
   * Add Random Number
   * adds a random color to the game
   */
  const addRandomColor = () => {

    var n = colors.length - 1

    // Geneate a random color
    // No repeating colors are allowed as of now
    var rand = Math.floor(Math.random() * (n + 1));

    // I changed this oune order to currOrder!!! DRUNK CHANGE
    while (currOrder.length > 0 && colors[rand] === currOrder[currOrder.length - 1]) {
        rand = Math.floor(Math.random() * (n + 1));
    }

    //REFACT
    setCurrOrder(currOrder => [...currOrder, colors[rand]])
    setGameState({didStart: true, isOver: false, score: currOrder.length})
    //REFACT

    // THIS IS THE PROBLEM WHERE THE GD IS 
    // FIX THE BUG THRY THE GIT RID OF THE ORDER ATOM 
    // Add the color to the current order of the recoil array
    //setOrder(order => [...order, colors[rand]])

    console.log(currOrder)
    //console.log(order)
  }

  /**
   * Run Sequence  
   * 
   * This function runs all of the colors 
   * that the player needs to memorize.
   */
  const runSequence = () => {
    addRandomColor() 
    setTimeout(function() {
      for (let i = 0; i <= currOrder.length; i++) {
        setTimeout(function() {
          if (i === currOrder.length) {
            // Sequence is over
            setSeq(false)
            setSelected("")
          } else {
            playSound(currOrder[i])
            setSelected(currOrder[i])
          }
        }, 900 * i);
      }
    }, 1000);

  }

 

  /**
   * Check Color
   * 
   * Checks if the color is the correct color.
   * If the the color is not correct then the game is over and 
   * waiting will be set to true.
   */
  
  const checkColor = (color) => {
    playSound(color)
    setSelected(color)

    // If the play selected the correct color
    if (color === currOrder[index.current]) {
      // If the sequence is completed
      if (index.current === currOrder.length - 2) {
        index.current = 0
        setTimeout(function() {
          setSelected("")
        }, 800);
        setTimeout(function() {
          // Start the seq
          setSeq(true)
        }, 1000);
      } else {
        console.log("We still have a chance to win!!")
        index.current += 1
      }
    } else {
      // game over 
      setGameState({didStart: true, isOver: true, score: currOrder.length - 1})

      index.current = 0
      size.current = currOrder.length - 1

      if (colors.length === 4){
        var object = addMoreItems(0, currOrder.length - 1)
        setScore(object)
      } else if (colors.length === 6) {
        var object = addMoreItems(1, currOrder.length - 1)
        setScore(object)
      } else {
        var object = addMoreItems(2, currOrder.length - 1)
        setScore(object)
      }
      setSelected("")

      // Activate modal if player gets the high score []
      console.log("This is the leader score: ", leaders)
      console.log("This is local score: ", currOrder.length - 1)
      if (currOrder.length - 1 > leaders[leaders.length - 1].score) {
        setModal({state: true, score: size.current})
      } else {
        //setOrder([colors[0]])
        setCurrOrder([colors[0]])
      }

    }
   
  }

  const addMoreItems = (currIndex, size) => {
    var currDate = new Date()
    var object = [[], [], []]
       
    for (var j = 0; j < score.length; j++) {
      var tmp = [];
      for (var i = 0; i < score[j].length; i++){
        tmp[i] = score[j][i]
      }
      object[j] = tmp
    }
    object[currIndex].push([currDate, size])

    return object
  }

  function reSet() {


    setCurrOrder([colors[0]])
    setGameState({didStart: false, isOver: false, score: 0})
  }

  function set() {
    setCurrOrder([colors[0]])
    setGameState({didStart: true, isOver: false, score: 0})

  }
  

  return (
    <div className={`flex justify-center mt-10 `} onClick={console.log('asdfkugbclk.')}>
      
      <div 
        className={`contian transition ease-in-out delay-200 
          border-2 p-10 rounded-lg drop-shadow-md 
          
          ${game.isOver ? 'border-red-200 hover:-translate-y-1 hover:shadow-lg' : 'border-blue-100'}
        `}

        //onClick={/*(wait.current === true)?(() => {runSequence(colors)}):(() => {}) */}
      >
        {!game.didStart  ? (
          <div className={`transition ease-in-out delay-200 hover:-translate-y-20 hover:opacity-90
          relative z-50 opacity-0 cursor-pointer`}
            onClick={() => (set())}>
            <img className={`absolute object-center top-20`} src={playImage} alt=""/>
          </div>
        ):<></>
        }
        {game.isOver === true ? (
          <div className={`transition ease-in-out delay-200 hover:-translate-y-1
          absolute z-50 bg-gray-100 opacity-50 w-full h-full top-0 left-0 cursor-pointer
          grid grid-cols-1 place-content-center`}
          onClick={() => reSet()}>
            <div className="mx-auto text-center subpixel-antialiased">
              <h3 className="font-face-gm">Game Over</h3>
              <h3 className="font-face-gm">Rounds: {size.current}</h3>
              <h3 className="font-face-gm">Click To</h3>
              <h3 className="font-face-gm">Play Again</h3>
            </div>
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
                  onClick={() => checkColor(color)/*setSelected(color)*/}
                  seq = {startSeq}
                />
              
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
   </div>
  );
}

function Item({ color, isSelected, onClick, seq }) {
  return (
    <div>
       <li 
        className={`item drop-shadow-lg  ${seq === false ? 'cursor-pointer ' : 'cursor-not-allowed' }`}
        onClick = {(seq === false) ? (onClick) : undefined}
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

    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
}
