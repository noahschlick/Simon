import Game from './components/Game';
import Header from './components/Header';
import LeaderBoard from './components/LeaderBoard';
import ScoreBoard from './components/ScoreBoard';
import './App.css'
import Modal from './components/Modal';


function App() {
  return (
    <div className="relative">

      <Modal/>
      <div className="max-w-3xl mx-auto px-8 ">
      <Header/>
      <Game/>
      <div className="flex space-x-4 mt-5">
        <ScoreBoard/>
        <div className="w-1/2 mb-20">
          <LeaderBoard/>
        </div>
        
      </div>

      </div>

    </div>
    
  );
}

export default App;
