"use client";

import { UtilityContext } from "@/context/UtilityContext";
import { WordleContext } from "@/context/WordleContext";
import { useContext, useEffect } from "react";
import GuessRow from "./guessRow";


export default function Game() {
  const { guesses } = useContext(WordleContext)!;
  const { handleKeyPress } = useContext(UtilityContext)!;

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
      <div className="flex flex-col gap-1 md:gap-2">
        {new Array(6).fill(0).map((_, i) => (
          <GuessRow key={`${guesses[i]}-${i}`} guessedWord={guesses[i]} />
        ))}
      </div>
    </section>
  );
}
