"use client";

import { UtilityContext } from "@/context/UtilityContext";
import { WordleContext } from "@/context/WordleContext";
import { useContext, useEffect, useState } from "react";

function Row({ guessedWord }: { guessedWord: String }) {
  const { word } = useContext(WordleContext)!;

  return (
    <div className="flex gap-1">
      {new Array(5).fill(0).map((_, i) => {
        const [activeStyle, setActiveStyle] = useState("bg-gray-300");

        useEffect(() => {
          if (guessedWord.includes("X")) {
            if (guessedWord[i] === word[i]) {
              setActiveStyle("bg-green-400 animate-flip-card");
            } else if (word.includes(guessedWord[i])) {
              setActiveStyle("bg-yellow-200 animate-flip-card");
            } else {
              setActiveStyle("bg-gray-400 animate-flip-card");
            }
          }
        }, [guessedWord]);
        return (
          <div
            key={`2-${i}`}
            className={`${activeStyle} h-10 w-10 flex items-center justify-center text-gray-800 border border-gray-500 rounded transition-all`}
            style={{
              animationDelay: `${i * 0.2}s`,
              transitionDelay: `${i * 0.2 + 0.5}s`,
            }}
          >
            {guessedWord[i]}
          </div>
        );
      })}
    </div>
  );
}

export default function Game() {
  const { word, guesses } = useContext(WordleContext)!;
  const { handleKeyPress } =
    useContext(UtilityContext)!;

  function eventCallback(e: KeyboardEvent) {
    handleKeyPress(e.key);
  }

  useEffect(() => {
    window.addEventListener("keyup", eventCallback);
    return () => {
      window.removeEventListener("keyup", eventCallback);
    };
  });

  return (
    <section>
      <div className="flex flex-col gap-1">
        {new Array(6).fill(0).map((_, i) => (
          <Row key={`${guesses[i]}-${i}`} guessedWord={guesses[i]} />
        ))}
      </div>
      <div>{word}</div>
    </section>
  );
}
