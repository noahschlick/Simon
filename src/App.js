import Game from './components/Game';
import Header from './components/Header';
import LeaderBoard from './components/LeaderBoard';
import ScoreBoard from './components/ScoreBoard';
import './App.css'


function App() {
  return (
    <div className="max-w-3xl mx-auto px-8 ">

     
      <Header/>

      <Game/>
      <div className="flex space-x-4 mt-5">
        <ScoreBoard/>
        <div className="w-1/2">
          <LeaderBoard/>
        </div>
        
      </div>

    </div>
  );
}

export default App;
