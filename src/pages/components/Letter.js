import React, { useContext, useEffect } from 'react'
import { AppContext } from "../_app"

function Letter({ letterPos, attemptVal }) {
  const { board, cerrectWord, currAttempt, setDisabledLetter } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = cerrectWord.toUpperCase()[letterPos] === letter;
  
  const almost = !correct && letter !== "" && cerrectWord.toUpperCase().includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetter((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  );
}

export default Letter
