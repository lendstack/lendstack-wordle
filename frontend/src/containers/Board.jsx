import { useCallback, useEffect, useState } from "react";
import { keyboardRows } from "../constant";
import Row from "../components/board/Row";
import { WORDS_URL } from "../constant";
import useWordBank from "../hooks/useWordBank";
import KeyBoard from "./KeyBoard";
import { useGameContext } from "../context/GameContext";

const Board = () => {
  const { words, loading, error } = useWordBank(WORDS_URL);
  const [errorMs, setErrorMs] = useState('');
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const keyboard = keyboardRows.flat();
  const {countTotalGames, countWins, countLoses} = useGameContext();

  useEffect(() => {
    if (words || isWin){
      const word = words[Math.floor(Math.random() * words.length)]
      setSolution(word);
    }
  }, [words, isWin]);

  const handleKeyDown = useCallback((e) => {
    let key;
    if (typeof e === 'string') key = e;
    if (e.key){
      e.preventDefault();
      key = e.key.toLowerCase();
    }
    if (keyboard.includes(key)){
      if (isGameOver){
        return;
      }
      if (key === 'enter') {
        if (currentGuess.length !== 5){
          setErrorMs("not enough letters")
          return;
        }

        if (!words.includes(currentGuess)){
          setErrorMs("this word not in the list");
          return;
        }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('')

        const isCorrect = solution === currentGuess;
        if (isCorrect){
          setIsWin(true);
          setErrorMs("Congratulations you win!!");
          countTotalGames();
          countWins();
          resetGame();
        } else {
            setIncorrectGuesses((prevCount) => prevCount + 1);

            if (incorrectGuesses + 1 === 6) {
              setErrorMs("You've reached 6 incorrect guesses. Game over!");
              countTotalGames();
              countLoses();
              setIsWin(false);
              resetGame();
            }
        }
      }

      if (key === 'backspace'){
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5 ) {
        return;
      }
      setCurrentGuess(currentGuess + key);
    }
  }, [currentGuess, solution, guesses, isGameOver, keyboard, incorrectGuesses, words, countLoses, countTotalGames, countWins]);

  
  useEffect(() => {
    
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);


  function resetGame(){
    setGuesses(new Array(6).fill(null));
    setCurrentGuess('');
    setIsGameOver(false);
    setIncorrectGuesses(0);
  }

  if (loading) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleKeyPress = (key) => {
    handleKeyDown(key);
  }

  return (
    <section className="flex flex-col items-center justify-between w-full px-4 md:px-10 2xl:px-14 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex(val => val === null);
          return (
            <Row key={guess + '_' + i} guess={isCurrentGuess ? currentGuess : guess ?? ''}
              complete={!isCurrentGuess && guess != null}
              solution={solution}
            />
          )
        })}
      </div>
          {errorMs.length > 0 && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <p className={`${isWin ? 'text-green-500' : 'text-red-500'} text-center`}>{errorMs}</p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
                  onClick={() => {
                    setErrorMs('');
                    if (isWin){
                      setIsWin(false);
                    }
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}

      <KeyBoard handleKeyPress={handleKeyPress} />

    </section>
  )
}

export default Board;

