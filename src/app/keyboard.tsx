"use client";
import { UtilityContext } from "@/context/UtilityContext";
import { useContext, useEffect, useState } from "react";

export default function Keyboard() {
  const { exactMatch, partialMatch, handleKeyPress } =
    useContext(UtilityContext)!;
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="mt-2 flex flex-col gap-1 justify-center items-center">
      {keys.map((row, i) => (
        <div key={`1-${i}`} className="flex gap-1">
          {i == 2 && (
            <div
              onClick={() => handleKeyPress("Backspace")}
              className="bg-gray-300 px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all"
            >
              Back
            </div>
          )}
          {row.split("").map((key, j) => {
            const [bg, setBg] = useState("bg-gray-300");
            useEffect(() => {
              if (exactMatch.includes(key.toLowerCase())) {
                setBg("bg-green-400");
              } else if (partialMatch.includes(key.toLowerCase())) {
                setBg("bg-yellow-200");
              } else {
                setBg("bg-gray-300");
              }
            }, [exactMatch, partialMatch]);
            return (
              <div
                key={`2-${j}`}
                onClick={() => handleKeyPress(key.toLowerCase())}
                className={`${bg} px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all`}
              >
                {key}
              </div>
            );
          })}
          {i == 2 && (
            <div
              onClick={() => handleKeyPress("Enter")}
              className="bg-gray-300 px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all"
            >
              Enter
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
