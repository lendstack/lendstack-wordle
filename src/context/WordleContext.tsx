"use client";
import { createContext, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Words from "@/utils/words";
import { getLocalStorage } from "@/utils/local";

export type WorldleData = {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  guessesIndex: number;
  setGuessesIndex: Dispatch<SetStateAction<number>>;
};

export const WordleContext = createContext<undefined | WorldleData>(undefined);

export const WordleProvider = ({ children }: { children: React.ReactNode }) => {
  const [word, setWord] = useState<string>(Words.getRandomWord());
  const [guesses, setGuesses] = useState<string[]>(new Array(6).fill(""));
  const [guessesIndex, setGuessesIndex] = useState<number>(0);

  useEffect(() => {
    // get data from local storage
    const {
      word: localWord,
      guesses: localGuesses,
      guessesIndex: localGuessesIndex,
    } = getLocalStorage();
    localWord && setWord(localWord);
    localGuesses && setGuesses(localGuesses);
    localGuessesIndex && setGuessesIndex(localGuessesIndex);
  }, []);

  const worldleData = {
    word,
    setWord,
    guesses,
    setGuesses,
    guessesIndex,
    setGuessesIndex,
  };

  return (
    <WordleContext.Provider value={worldleData}>
      {children}
    </WordleContext.Provider>
  );
};
