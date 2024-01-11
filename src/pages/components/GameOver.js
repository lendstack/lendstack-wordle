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
          <h1 className='Win'>You won!</h1>
          <img className="imageWin" src="../img/win.png" />
          {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
      )}
      {!gameOver.guessedWord && (
        <div>
          <h1 className='Never'>Nevermind</h1>
          <img className="imageWin" src="../img/images.jpg" />
          <p className='corrected' >the Corrected Word : <span className='cerrec'>{cerrectWord}</span></p>
          <p>Better luck next time </p>
        </div>
      )}
      {/* <h3>{gameOver.guessedWord ? "You Correctly guessed" : "You failed"}</h3>
        <h1 >the Corrected Word : {cerrectWord}</h1> */}
    </div>
  )
};

export default GameOver