import axios, { isCancel } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { words } from "./words";
import NavBar from "./components/NavBar";

const ROWS = 6;

const merge = (letters, word) => {
  return Array.from(new Set(letters + word)).join("");
};

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(new Array(ROWS).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [letters, setLetters] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const ref = useRef();

  const selectWord = () => {
    let selectedWord = "";
    axios
      .get(`https://random-word-api.herokuapp.com/word?length=5`)
      .then((response) => {
        if (response.data.length === 0) throw new Error();
        selectedWord =
          response.data[Math.floor(Math.random() * response.data.length)];
        setSolution(selectedWord.toUpperCase());
      })
      .catch(() => {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        setSolution(selectedWord.toUpperCase());
      });
  };

  useEffect(() => {
    selectWord();
  }, []);

  const processKey = useCallback(
    (key) => {
      if (showInstructions) return;

      if ((key === "-" || key === "Backspace") && currentWord.length) {
        setCurrentWord((currentWord) => currentWord.slice(0, -1));
        return;
      }
      if ((key === "+" || key === "Enter") && currentWord.length === 5) {
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`)
          .then((response) => {
            if (response.data.title === "No Definitions Found") {
              setGameStatus("Word not in dictionary");
              toast.error("Word not in dictionary");
              return;
            }
            setGuesses((guesses) =>
              guesses.map((guess, idx) =>
                idx === currentRow ? currentWord : guess
              )
            );
            setCurrentRow((currentRow) => currentRow + 1);
            setLetters((letters) => merge(letters, currentWord));
            setCurrentWord("");
          })
          .catch((error) => {
            if (isCancel(error)) return;

            toast.error("Word not in dictionary");
            return;
          });
        return;
      }
      if (/^[A-Za-z]$/.test(key) && currentWord.length < 5) {
        setCurrentWord((currentWord) => currentWord + key.toUpperCase());
      }
    },
    [currentWord, currentRow, showInstructions]
  );

  const handleKeyDown = useCallback(
    (e) => {
      processKey(e.key);
    },
    [processKey]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (guesses[currentRow - 1] === solution && solution) {
      setGameStatus("You Won!");
      ref.current.openModal();
    } else if (currentRow > 5) {
      setGameStatus("You Lost!");
      ref.current.openModal();
    }
  }, [currentRow, guesses, solution]);

  const handleGameReset = () => {
    selectWord();
    setGuesses(new Array(ROWS).fill(""));
    setCurrentRow(0);
    setCurrentWord("");
    setLetters("");
    setGameStatus("");
  };

  return (
    <div className="App">
      <NavBar
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
      />
      <Board
        guesses={guesses}
        currentWord={currentWord}
        currentRow={currentRow}
        solution={solution}
      />
      <Keyboard
        letters={letters}
        solution={solution}
        guesses={guesses}
        onClick={processKey}
      />
      <Modal
        gameStatus={gameStatus}
        ref={ref}
        solution={solution}
        handleGameReset={handleGameReset}
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
      />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
