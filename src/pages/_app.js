import React, { useState, useEffect } from 'react';
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import PopupGame from "./components/PopupGame";
import { boardDefault, generateWordSet } from './Words';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AppContext = createContext();

function App() {
  const [board, setBoard,] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetter] = useState([]);
  const [cerrectWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false
  });
  const [isOpen, setIsOpen] = useState(true);
  const [openCard, setOpenCard] = useState(false);
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);
  const onSelectLetter = (keyVal) => {
    if (isOpen) return;
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }
  const onDelete = () => {
    if (isOpen) return;
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }
  const onEnter = () => {
    if (isOpen) return;
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      toast.error("Word Not Found");
    }
    if (currWord.toLowerCase() === cerrectWord) {
      setOpenCard(true);
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5 && wordSet.has(currWord.toLowerCase())) {
      setOpenCard(true);
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };


  return (
    <div className='App' >
      <nav className='nav'>
        <span className='wordle'>Wordle Game
          <button onClick={()=> setIsOpen(!isOpen)}>
            <img src='./img/help.png' />
          </button>
        </span>
        {gameOver.gameOver && <div class="leaves">
          <div class="set">
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
            <div><img src="./img/pngegg.png" /></div>
          </div>
        </div>}
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
          cerrectWord,
          setDisabledLetter,
          disabledLetters,
          setGameOver, gameOver
        }}>
        <div className='game'>

          <Board />
          {isOpen && <PopupGame setIsOpen={setIsOpen} />}
          {openCard && <GameOver setOpenCard={setOpenCard} />}
          {!gameOver.gameOver && <Keyboard />}
        </div>
      </AppContext.Provider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
