import Board from "../containers/Board";
import Header from "../containers/Header";
import { GameProvider } from "../context/GameContext";
import KeyBoard from '../containers/KeyBoard'

const Game = () => {

  return (
    <div className="flex w-[100vw] h-[100vh] flex-col justify-between">
        <Header />
      <GameProvider>
          <Board />
         <KeyBoard />
      </GameProvider>
    </div>
  )
}


export default Game