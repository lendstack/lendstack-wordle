import React, { useContext, useState } from 'react'
import { AppContext } from "../_app";

function GameOver({ setOpenCard }) {
  const { gameOver, setGameOver, cerrectWord, currAttempt } = useContext(AppContext);

  return (
    <div className='gameOver'>
        <button className="close-button" onClick={() => setOpenCard(false)}>
          &times;
        </button>
      {gameOver.guessedWord && (
        <div>
          <h1>You win!</h1>
          <img className="h-1 w-1" src="../img/unnamed.png" />
          {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
      )}
      {!gameOver.guessedWord && (
        <div>
          <h1 className="text-black">Nevermind</h1>
          <p className='corrected' >the Corrected Word : {cerrectWord}</p>
          <p>Better luck next time </p>
        </div>
      )}
      {/* <h3>{gameOver.guessedWord ? "You Correctly guessed" : "You failed"}</h3>
        <h1 >the Corrected Word : {cerrectWord}</h1> */}
    </div>
  )
};

export default GameOver