import React, { ChangeEvent, useEffect } from "react";
import { EnglishWordSchema } from "../utils/validation";
import "../App.css";
import { generateRandomWord } from "../utils/generate-word";
import GameHeader from "./ GameHeader";
import GameOverDisplay from "./GameOverDisplay";
import InputForm from "./ InputForm";
import ErrorComponent from "./ErrorComponent";
import AttemptsDisplay from "./AttemptsDisplay";
import { HistoryDisplay } from "./HistoryDisplay";
import { ZodError } from "zod";

export default function Wordle() {
  const [wordList, setWordList] = React.useState<string[]>([]);
  const [guessedWord, setGuessedWord] = React.useState<string>("");
  const [targetWord, setTargetWord] = React.useState<string>(generateRandomWord(5));
  const [attempts, setAttempts] = React.useState<number>(6);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [gameOver, setGameOver] = React.useState<boolean>(false);


	useEffect(() => {
		if (attempts === 0 || (guessedWord === targetWord && guessedWord !== "")) {
			setGameOver(true);
		}
  }, [attempts, guessedWord, targetWord]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuessedWord(e.target.value);
    setErrorMessage(null);
  };

  const handleOnClick = async () => {
    if (!attempts) return;
    try {
      console.log(targetWord);
      await EnglishWordSchema.parseAsync(guessedWord);
      setWordList([...wordList, guessedWord]);
      setGuessedWord("");
      setAttempts(attempts - 1);
    } catch (error: any) {
      if (error instanceof ZodError) setErrorMessage(error.errors[0].message);
    	else setErrorMessage("An unexpected error occurred");
      setGuessedWord("");
    }
  };
  const closeErrorPopup = () => {
    console.log("Closing error popup");
    setErrorMessage(null);
  };

  const resetGame = () => {
    setWordList([]);
    setGuessedWord("");
    setTargetWord(generateRandomWord(5));
    setAttempts(6);
    setGameOver(false);
  };

  return (
    <div className="game-layout">
        <GameHeader />
      <div className="centered-container">
        {gameOver ? (
          <GameOverDisplay
          win={targetWord === guessedWord? true: false}
          targetWord = {targetWord}
          message={targetWord === guessedWord ? "You won!" : "You lost!" }
          onPlayAgain={resetGame}
          />
          ) : (
            <div>
            <AttemptsDisplay attempts={attempts} />
            <InputForm
              guessedWord={guessedWord}
              handleOnChange={handleOnChange}
              handleOnClick={handleOnClick}
            />
            {errorMessage && <ErrorComponent message={errorMessage} onClose={closeErrorPopup} />}
            <HistoryDisplay wordList={wordList} targetWord={targetWord} />
          </div>
        )}
      </div>
    </div>
  );
}
