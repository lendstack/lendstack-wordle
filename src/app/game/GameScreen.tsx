import { useContext, useEffect, useState } from "react";
import { globalContext } from "~/lib/context/globalContext";
import Grid from "../_components/Grid";
import Keyboard from "./Keyboard";
import useWordAnalyser from "~/lib/hooks/useWordAnalyser";
import isAlpha from "~/lib/utlis";

const GameScreen: React.FC = ({}) => {
  const {
    currentWord,
    turn,
  } = useContext(globalContext);
  const {handleKeyDown} = useWordAnalyser();

  const handle =  (e:KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Backspace')
      document?.getElementById(e.key)?.click ()
    else if (isAlpha (e.key))
      document?.getElementById(e.key.toUpperCase ())?.click ()
  }
  
  useEffect(() => {
    window.addEventListener("keydown",handle);
    
    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, []);



  return (
    <div className="flex flex-col gap-3">
      <Grid />
      <div className='flex gap-4 items-center justify-center'>
      <p>word: {currentWord}</p>
      <p>remaining attempts: {6 - (turn??0)}</p>
      </div>
      <Keyboard />
     
    </div>
  );
};

export default GameScreen;
