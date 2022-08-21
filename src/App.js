import Game from './components/Game';
import MobileGame from './components/MobileGame'
import Header from './components/Header';
import LeaderBoard from './components/LeaderBoard';
import ScoreBoard from './components/ScoreBoard';
import GoogleAds from './components/GoogleAds';
import './App.css'
import Modal from './components/Modal';
import { modalState } from './Atoms/ModalAtom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { GET_LEADER_BOARD_BY_GAME } from './graphql/queries';
import { colorsState } from './Atoms/ColorsAtom';
import { useQuery } from '@apollo/client';
import Start from './components/Start';
import { sequenceState } from './Atoms/sequenceAtom';
import GameOver from './components/GameOver';
import { GameState } from './Atoms/GameAtom'


function App() {
  const [modal, setModal] = useRecoilState(modalState)
  const [colors, setColors] = useRecoilState(colorsState)
  const [sequence, setSequence] = useRecoilState(sequenceState)
  const [game, setGameState] = useRecoilState(GameState)
  const [currOrder, setCurrOrder] = useState(colors[0])

  const {data, loading} = useQuery(GET_LEADER_BOARD_BY_GAME, {
    variables: {
      gameSize: colors.length
    }
  })

  const leaders = data?.getLeaderBoardListByGame

  /* Ubdate the size of the page */
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div className="relative">
      
      {modal.state === true && (<Modal/>)}
      
      <div className="max-w-3xl mx-auto px-8 ">
      <Header/>
      
      <div>
        {game.didStart === false && (
          <div className="absolute z-10">

          </div>
        )}
        {game.isOver && (
          <div className="absolute px-40 z-50">
          
          </div>
        )}
        
        
        {isDesktop ? (
          <Game leaders={leaders} currOrder = {currOrder}/>
        ) : (
          <MobileGame leaders={leaders} currOrder = {currOrder}/>
        )}
        

      </div>
        
        
     
      
 
      <div className=" tablet:flex tablet:space-x-4 mt-5 ">
        
          <div className="tablet:w-1/2">
            <ScoreBoard/>
            <div class=" w-full h-4/6">

              {/*<GoogleAds/>*/}
            
            </div>
          </div>
   
        
        
        <div className="tablet:w-1/2 mb-20 w-full relative ">
          <LeaderBoard leaders={leaders}/>
        </div>
        
      </div>

      </div>

    </div>
    
  );
}

export default App;
