import { useEffect, useState } from "react";
import Board from "../containers/Board";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import { GameProvider } from "../context/GameContext";
// import KeyBoard from '../containers/KeyBoard'

const Game = () => {
  const [totalGames, setTotalGames] = useState(0);
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  const countTotalGames = () => {
    setTotalGames((prev) => prev + 1);
  }

  const countWins = () => {
    setWins((prev) => prev + 1);
  }

  const countLoses = () => {
    setLoses((prev) => prev + 1);
  }

  useEffect(() => {
    const totalGames = JSON.parse(localStorage.getItem("totalGames"));
    const wins = JSON.parse(localStorage.getItem("wins"));
    const loses = JSON.parse(localStorage.getItem("loses"));
    if (totalGames){
      setTotalGames(totalGames);
    }
    if (wins) {
      setWins(wins);
    }
    if (loses) {
      setLoses(loses);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('totalGames', JSON.stringify(totalGames));
    localStorage.setItem('wins', JSON.stringify(wins));
    localStorage.setItem('loses', JSON.stringify(loses));
  }, [totalGames, wins, loses]);

  return (
    <div className="flex w-[100vw] h-[100vh] flex-col justify-between overflow-y-scroll scroll-smooth">
      <GameProvider value={{totalGames, wins, loses, countTotalGames, countWins, countLoses}}>
        <Header />
          <Board />
         {/* <KeyBoard /> */}
      </GameProvider>
      <Footer />
    </div>
  )
}


export default Game