"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { globalContext } from "~/lib/context/globalContext";
import GameScreen from "./GameScreen";

interface response {
  data: string[];
}

const Game: React.FC = ({}) => {
  const [currentWord, setCurrentWord] = useState("");
  const [guessState, setGuessState] = useState<CharType[][]>([]);
  const [turn, setTurn] = useState(0);
  const [indexX, setX] =useState (0)
  const [indexY, setY] = useState (0)

  const fetchWord = () => {
    axios
      .get("https://random-word-api.herokuapp.com/word?length=5")
      .then((response: response) => {
        setCurrentWord(response.data[0] ? response.data[0] : "");
      })
      .catch((error) => {
        console.log (error)
      });
  };

  useEffect(() => {
    fetchWord();
  }, []);
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <globalContext.Provider value={{ currentWord, guessState, setGuessState, turn, setTurn, indexX, setX, setY, indexY }}>
        <GameScreen />
      </globalContext.Provider>
    </div>
  );
};

export default Game;
