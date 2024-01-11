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
import WelcomeMessage from "./WelcomeMessage";
import Sidebar from "./Sidebar";

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

  const resetGame = () => {
    setWordList([]);
    setGuessedWord("");
    setTargetWord(generateRandomWord(5));
    setAttempts(6);
    setGameOver(false);
  };

  return (
    <div className="game-layout">
      <div className="main-content">
        <GameHeader />
        {wordList.length === 0 && !gameOver ? <WelcomeMessage /> : null}
        {gameOver ? (
          <GameOverDisplay
            message={targetWord === guessedWord ? "Congratulations! You won!" : "Game Over! You lost!"}
            onPlayAgain={resetGame}
          />
        ) : (
          <>
            <InputForm
              guessedWord={guessedWord}
              handleOnChange={handleOnChange}
              handleOnClick={handleOnClick}
            />
            <ErrorComponent message={errorMessage} />
            <HistoryDisplay wordList={wordList} targetWord={targetWord} />
          </>
        )}
      </div>
      <Sidebar attempts={attempts} />
    </div>
  );
}
