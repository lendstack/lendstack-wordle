import React, { ChangeEvent, useEffect } from 'react'
import { EnglishWordSchema } from '../utils/validation';
import WordsList from './WordsList';
import "../App.css";
import { generateRandomWord } from '../utils/generate-word';

export default function Wordle() {
    const [wordList, setWordList] = React.useState<string[]>([]);
    const [guessedWord, setGuessedWord] = React.useState<string>("");
    const [targetWord, setTargetWord] = React.useState<string>("");
    const [attempts, setAttempts] = React.useState<number>(6);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [gameOver, setGameOver] = React.useState<boolean>(false);
    useEffect(() => {
      setTargetWord(generateRandomWord(5));
    }, []);
    useEffect(() => {
      if (attempts === 0 || (guessedWord === targetWord && guessedWord !== '')) {
        setGameOver(true);
      }
    }, [attempts, guessedWord, targetWord]);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setGuessedWord(e.target.value);
      setErrorMessage(null);
    }
    const handleOnClick = async () => {
      if (!attempts)
        return;
      try
      {
        console.log(targetWord);
        await EnglishWordSchema.parseAsync(guessedWord);
        setWordList([...wordList, guessedWord]);
        setGuessedWord('');
        setAttempts(attempts - 1);
      }catch(error: any){
        setErrorMessage(error.errors[0].message ?? error.message ?? "Unknown error");
        setGuessedWord('');
      }
    }
    const resetGame = () => {
      setWordList([]);
      setGuessedWord('');
      setTargetWord(generateRandomWord(5));
      setAttempts(6);
      setGameOver(false);
  };
    return (
    <div>
      <h1>Wordle Quest</h1>
      {gameOver === true ? (
        <div className="game-over-container">
          <p className="game-over-message">
            {targetWord === guessedWord ? "Congratulations! You won!" : "Game Over! You lost!"}
          </p>
          <button className="play-again-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )
      : (
      <>
      <div className='input-button-container'>
        <input placeholder="Enter a word" value={guessedWord} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Submit</button>
      </div>
        {errorMessage && <p className="error-label" style={{ color: 'red' }}>{errorMessage}</p>}
        <p className='attempts'>Remaining attempts: {attempts}</p>
      <div className='list-container'>
          {wordList.map((word) => <WordsList guessedWord= {word} targetWord = {targetWord}/>)}
      </div></>
      )
    }
    </div>
  )
}
