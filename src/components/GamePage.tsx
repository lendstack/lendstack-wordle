// import { useContext } from "react";
import Board from "./Board";
import KeyBoard from "./KeyBoard";
import NavBar from "./NavBar";
// import { AppContext } from "../App";
function GamePage() {
  // const { solution }: any = useContext(AppContext);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-y-auto">
      <NavBar></NavBar>
      <div className="w-full h-[calc(100vh-65px)] p-3 py-8 flex flex-col   items-center justify-between">
        <Board></Board>
        <KeyBoard></KeyBoard>
      </div>
    </div>
  );
}

export default GamePage;
