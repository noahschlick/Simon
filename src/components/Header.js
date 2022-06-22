/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid"
import 'tw-elements';
import { colorsState } from '../ColorsAtom'
import { useRecoilState } from 'recoil';
import { gameColors } from '../GameColors'
function Header() {
    
    const [colors, setColors] = useRecoilState(colorsState)
    //const [colors, setColors] = useState(["#B22727", "#0097e6", "#44bd32", "#ffaa00"])
   
    

  return (
    <div className="sticky top-3 z-50 grid
    grid-cols-2  bg-white h-10 rounded-lg shadow-md">
        <div>

        </div>

        <div className="flex items-center space-x-4 justify-end text-gray-500">
            {/* Drop Down */}
            <div class="flex ">
                <div class="p-0">
                    <div class="dropdown inline-block ">
                        <button class=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span class="mr-1">Game Size</span>
                            <ChevronDownIcon className="w-5 h-5"/>
                        </button>
                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-40">
                            <li class="" onClick={() => setColors(gameColors[0])}>
                                <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block
                                whitespace-no-wrap" href="#">
                                Four</a>
                            </li>
                            <li class="" onClick={() => setColors(gameColors[1])}>
                                <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block 
                                whitespace-no-wrap" href="#">Six</a>
                            </li>
                            <li class="" onClick={() => setColors(gameColors[2])}>
                                <a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block 
                                whitespace-no-wrap" href="#">Nine</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Header