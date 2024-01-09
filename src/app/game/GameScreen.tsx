import { useContext, useEffect, useState } from "react";
import { globalContext } from "~/lib/context/globalContext";
import Grid from "../_components/Grid";
import Keyboard from "./Keyboard";
import useWordAnalyser from "~/lib/hooks/useWordAnalyser";

const GameScreen: React.FC = ({}) => {
  const {
    currentWord,
    guessState,
    setGuessState,
    indexX,
    indexY,
    setX,
    setY,
    setTurn,
    turn,
  } = useContext(globalContext);
  const { analyseWord, currentRow, setCurrentRow , handleKeyDown, handleKeyUp, flag, handleSubmit} = useWordAnalyser();

  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [flag]);

  useEffect(() => {
    // console.log(currentRow);
    // console.log(indexX);
    // console.log(guessState);
  }, [currentRow, indexX, guessState]);

  return (
    <div className="flex flex-col gap-3">
      <Grid />
      <p>word: {currentWord}</p>
      <Keyboard />
     
    </div>
  );
};

export default GameScreen;
