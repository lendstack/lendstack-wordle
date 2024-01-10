"use client";
import { WordleContext } from "@/context/WordleContext";
import { createContext, useContext, useEffect, useState } from "react";
import Words from "@/utils/words";
import Swal from "sweetalert2";

export type UtilityProps = {
  handleKeyPress: (key: string) => void;
  exactMatch: string;
  partialMatch: string;
};

export const UtilityContext = createContext<UtilityProps | undefined>(
  undefined
);

export const UtilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { word, setWord, guesses, setGuesses, guessesIndex, setGuessesIndex } =
    useContext(WordleContext)!;
  const [gameRes, setGameRes] = useState<"" | "W" | "L">("");
  const [exactMatch, setExactMatch] = useState<string>("");
  const [partialMatch, setPartialMatch] = useState<string>("");

  useEffect(() => {
    if (!gameRes) return;
    else if (gameRes === "W") {
      setTimeout(() => {
        Swal.fire({
          title: "you Won!",
          width: 250,
          confirmButtonText: "Play Again?",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) resetGame();
        });
      }, 2000);
    } else if (gameRes === "L") {
      setTimeout(() => {
        Swal.fire({
          title: "you lost!",
          width: 250,
          confirmButtonText: "Play Again?",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) resetGame();
        });
      }, 2000);
    }
  }, [gameRes]);

  function resetGame() {
    setWord(Words.getRandomWord());
    setGuesses(new Array(6).fill(""));
    setGuessesIndex(0);
    setGameRes("");
    setExactMatch("");
    setPartialMatch("");
  }

  function insertCharater(char: string) {
    if (gameRes) return;
    let currentWord = guesses[guessesIndex];
    if (currentWord.length >= 5) return;
    const newGuesses = [...guesses];
    newGuesses[guessesIndex] = currentWord + char;
    setGuesses(newGuesses);
  }

  function removeCharacter() {
    const newGuesses = [...guesses];
    newGuesses[guessesIndex] = newGuesses[guessesIndex].slice(0, -1);
    setGuesses(newGuesses);
  }

  function submitGuess() {
    if (guesses[guessesIndex].length < 5) return;
    if (Words.matchWord(guesses[guessesIndex])) {
      if (guesses[guessesIndex] === word) {
        setGameRes("W");
      } else if (guessesIndex === 5) {
        setGameRes("L");
      }
      for (let i = 0; i < 5; i++) {
        if (guesses[guessesIndex][i] === word[i]) {
          setExactMatch((prev) => prev + guesses[guessesIndex][i]);
        } else if (word.includes(guesses[guessesIndex][i])) {
          setPartialMatch((prev) => prev + guesses[guessesIndex][i]);
        }
      }
      guesses[guessesIndex] += "X";
      setGuessesIndex(guessesIndex + 1);
    } else {
      Swal.fire({
        text: "word not found!",
        width: 250,
        timer: 1000,
        showConfirmButton: false,
      });
    }
  }

  function handleKeyPress(key: string) {
    if (key === "Enter") {
      submitGuess();
    } else if (key === "Backspace") {
      removeCharacter();
    } else if (key >= "a" && key <= "z") {
      insertCharater(key);
    }
  }

  const value = {
    handleKeyPress,
    exactMatch,
    partialMatch,
  };

  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};
