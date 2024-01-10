import { useEffect, useState } from "react";
import { keyboardRows } from "../constant";
import Row from "../components/board/Row";

const Board = () => {
  const [solution, setSolution] = useState("hello");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const keyboard = keyboardRows.flat();


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
          alert("You've reached 6 incorrect guesses. Game over!");
          setGuesses(new Array(6).fill(null));
          setCurrentGuess('');
          setIsGameOver(false);
          setIncorrectGuesses(0);
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
  }, [currentGuess, solution, guesses, isGameOver, keyboard]);

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
    </section>
  )
}

export default Board;

