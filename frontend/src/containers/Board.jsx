import { useEffect, useState } from "react";
import { keyboardRows } from "../constant";
import Row from "../components/board/Row";
import { WORDS_URL } from "../constant";
import useWordBank from "../hooks/useWordBank";
import KeyBoard from "./KeyBoard";

const Board = () => {
  const { words, loading, error } = useWordBank(WORDS_URL);
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const keyboard = keyboardRows.flat();

  useEffect(() => {
    if (words){
      const word = words[Math.floor(Math.random() * words.length)]
      setSolution(word);
    }
  }, [words]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (keyboard.includes(key)){
        if (isGameOver){
          return;
        }
        if (key === 'enter') {
          if (currentGuess.length !== 5){
            alert("not enough letters")
            return;
          }

          if (!words.includes(currentGuess)){
            alert("this word not in the list");
            return;
          }
  
          const newGuesses = [...guesses];
          newGuesses[guesses.findIndex(val => val === null)] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('')
  
          const isCorrect = solution === currentGuess;
          if (isCorrect){
            setIsGameOver(true);
          } else {
            setIncorrectGuesses((prevCount) => prevCount + 1);

        if (incorrectGuesses + 1 === 6) {
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
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, solution, guesses, isGameOver, keyboard, incorrectGuesses, words]);

  function resetGame(){
    alert("You've reached 6 incorrect guesses. Game over!");
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

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-2 justify-center items-cente">
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
      {/* <KeyBoard /> */}
    </section>
  )
}

export default Board;

