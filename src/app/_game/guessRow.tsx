"use client";
import { WordleContext } from "@/context/WordleContext";
import { useContext, useEffect, useState } from "react";

export default function GuessRow({ guessedWord }: { guessedWord: String }) {
    const { word } = useContext(WordleContext)!;
  
    return (
      <div className="flex gap-1">
        {new Array(5).fill(0).map((_, i) => {
          const [activeStyle, setActiveStyle] = useState("bg-transparent");
  
          useEffect(() => {
            if (guessedWord.includes("X")) {
              if (guessedWord[i] === word[i]) {
                setActiveStyle("bg-green-300 animate-flip-card");
              } else if (word.includes(guessedWord[i])) {
                setActiveStyle("bg-yellow-200 animate-flip-card");
              } else {
                setActiveStyle("bg-gray-200 animate-flip-card");
              }
            }
          }, [guessedWord]);
          return (
            <div
              key={`2-${i}`}
              className={`${activeStyle} md:text-lg h-10 w-10 md:w-12 md:h-12 flex items-center justify-center text-gray-800 border shadow-sm shadow-gray-300 border-gray-500 rounded transition-all`}
              style={{
                animationDelay: `${i * 0.2}s`,
                transitionDelay: `${i * 0.2 + 0.5}s`,
              }}
            >
              {guessedWord[i] && guessedWord[i].toUpperCase()}
            </div>
          );
        })}
      </div>
    );
  }
  