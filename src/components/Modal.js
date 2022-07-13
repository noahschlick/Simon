import { useMutation } from '@apollo/client';
import React, {  useState } from 'react'
import { useForm } from 'react-hook-form';
import {  useRecoilState } from 'recoil';
import { colorsState } from '../Atoms/ColorsAtom';
import { GameState } from '../Atoms/GameAtom';
import { modalState } from '../Atoms/ModalAtom';

import { ADD_LEADER,  } from '../graphql/mutations';
import { GET_LEADER_BOARD_BY_GAME } from '../graphql/queries'
import Avatar from './Avatar';



function Modal() {
    const {register, handleSubmit, errors} = useForm()
    const [ colors, setColors ] = useRecoilState(colorsState)
    const [ modal, setModal ] = useRecoilState(modalState)
    const [ game, setGameState ] = useRecoilState(GameState)

    const [addLeader] = useMutation(ADD_LEADER, {
        refetchQueries: [GET_LEADER_BOARD_BY_GAME, 'getLeaderBoardListByGame']
    })
    
    /* When the form is submitted */
    const onSubmit = handleSubmit(async() => {
        console.log("Hello There")
        
        setGameState({didStart: false, isOver: false, score: 0})
        const {
            data: {insertLeader: newLeader},
        } = await addLeader({
            variables: {
                playerName: seed,
                gameSize: colors.length,
                score: modal.score
            }
        })
        setModal(false)
        
    })

    const [seed, setSeed] = useState("")


    return (
        <div>
            <div className=" top-0 right-0 absolute w-full h-full bg-gray-700 z-20 bg-opacity-70">
                <div className="flex flex-col sticky max-w-lg mx-auto bg-white top-20 z-50 rounded-xl h-96">
                    <div className="my-10 text-center">
                        <h3 className="font-face-gm text-2xl text-gray-800 font-bold">New High Score!</h3>
                    </div>

                    
                    <div className="flex mb-5 justify-center">
                        <Avatar className="mr-5" seed={seed} large={true}/>
                    </div>
               

                    <form className=" flex-1 mx-20" onSubmit={onSubmit}>
                        <div className="text-center">
                            <input
                                className="w-full shadow-md max-w-lg mx-auto appearance-none border 
                                                rounded-full py-2 px-3 text-gray-700 leading-tight
                                                focus:outline-none focus:shadow-outline hover:shadow-xl
                                                transition duration-500 my-5"
                                placeholder="Enter Player Name"
                                value = {seed}
                                onChange={(e) => setSeed(e.target.value)}
                                maxlength={15}
                                
                            />
                            <input 
                                className="cursor-pointer w-40 bg-green-500 text-white 
                                font-bold py-2 px-4 rounded-full  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" 
                                type="submit"
                                required
                            />
                        </div>

                            
                    </form>
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Modal