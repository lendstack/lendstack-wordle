import Board from "../containers/Board";
import Header from "../containers/Header";
// import KeyBoard from "../containers/KeyBoard";

const Game = () => {

  return (
    <div className="flex w-full h-[100vh] flex-col justify-between">

        <Header />
        <Board />
        {/* <KeyBoard /> */}
    </div>
  )
}


export default Game