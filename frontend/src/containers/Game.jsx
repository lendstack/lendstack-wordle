import Board from "../components/game/Board"
import Header from "../components/game/Header"
import KeyBoard from "../components/game/KeyBoard"


const Game = () => {
  return (
    <div className="flex w-full h-[100vh] flex-col justify-between">
        <Header />
        <Board />
        <KeyBoard />
    </div>
  )
}

export default Game