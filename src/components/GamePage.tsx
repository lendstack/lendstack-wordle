import { useContext } from "react";
import Board from "./Board";
import KeyBoard from "./KeyBoard";
import NavBar from "./NavBar";
import { AppContext } from "../App";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Lose from "./Lose";
import Win from "./Win";
function GamePage() {
  const { solution, win, lose }: any = useContext(AppContext);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-y-auto ">
      <NavBar></NavBar>
      <div className="w-full min-h-[calc(100vh-105px)] p-3 py-8 flex flex-col   items-center justify-between">
        <Board></Board>
        {win && <Win></Win>}
        {lose && <Lose></Lose>}
        <KeyBoard></KeyBoard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GamePage;
