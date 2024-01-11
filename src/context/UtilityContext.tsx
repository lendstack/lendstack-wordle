"use client";
import { WordleContext } from "@/context/WordleContext";
import { createContext, useContext, useEffect, useState } from "react";
import Words from "@/utils/words";
import Swal from "sweetalert2";

export type UtilityProps = {
  handleKeyPress: (key: string) => void;
  exactMatch: string;
  partialMatch: string;
  noMatch: string;
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
  const [noMatch, setNoMatch] = useState<string>("");

  useEffect(() => {
    if (!gameRes) return;
    else if (gameRes === "W") {
      setTimeout(() => {
        Swal.fire({
          html: `<h1 class="text-3xl text-green-500 font-bold">You Won🎉</h1>
            <h4 class="mt-4">You guessed It After: <span class="text-green-500 font-bold underline">${guessesIndex}/6</span> Tries.</h4>`,
          confirmButtonText: "Play Again?",
          width: 320,
          padding: "1rem",
          background: "rgb(220, 252, 231)",
          backdrop: `
          rgba(0,0,255,0.2)
          url("/gifs/win/${Math.floor(Math.random() * 5) + 1}.gif")
          left top
          no-repeat
        `,
        }).then(({ isConfirmed }) => {
          if (isConfirmed) resetGame();
        });
      }, 2000);
    } else if (gameRes === "L") {
      setTimeout(() => {
        Swal.fire({
          html: `<h1 class="text-3xl text-red-500 font-bold">You Lost!</h1>
          <h4 class="mt-4">The word was <span class="text-green-500 font-bold underline">${word}</span>.</h4>`,
          confirmButtonText: "Play Again?",
          width: 320,
          padding: "1rem",
          backdrop: `
          rgba(0,0,255,0.2)
        url("/gifs/lose/${Math.floor(Math.random() * 4) + 1}.gif")
        left top
        no-repeat
      `,
        }).then(({ isConfirmed }) => {
          if (isConfirmed) resetGame();
        });
      }, 2000);
    }
  }, [gameRes, word]);

  function resetGame() {
    setWord(Words.getRandomWord());
    setGuesses(new Array(6).fill(""));
    setGuessesIndex(0);
    setGameRes("");
    setExactMatch("");
    setPartialMatch("");
    setNoMatch("");
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
        } else {
          setNoMatch((prev) => prev + guesses[guessesIndex][i]);
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
    } else if (key >= "A" && key <= "Z" && key.length === 1) {
      insertCharater(key.toLowerCase());
    }
  }

  const value = {
    handleKeyPress,
    exactMatch,
    partialMatch,
    noMatch,
  };

  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};
