"use client";
import { UtilityContext } from "@/context/UtilityContext";
import { useContext, useEffect, useState } from "react";
import { FaBackspace } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function Keyboard() {
  const { exactMatch, partialMatch, noMatch, handleKeyPress, resetGame } =
    useContext(UtilityContext)!;
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="md:gap-[6px] flex flex-col gap-1 justify-center items-center">
      {keys.map((row, i) => (
        <div key={`1-${i}`} className="flex gap-1 md:gap-[6px]">
          {i == 2 && (
            <div
              onClick={() => handleKeyPress("Backspace")}
              className="bg-red-300 px-3 py-1 text-2xl flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all"
            >
              <FaBackspace size={""} />
            </div>
          )}
          {row.split("").map((key, j) => {
            const [bg, setBg] = useState("bg-red-200");
            useEffect(() => {
              if (exactMatch.includes(key.toLowerCase())) {
                setBg("bg-green-300");
              } else if (partialMatch.includes(key.toLowerCase())) {
                setBg("bg-yellow-200");
              } else if (noMatch.includes(key.toLowerCase())) {
                setBg("bg-gray-200");
              } else {
                setBg("bg-red-200");
              }
            }, [exactMatch, partialMatch, noMatch]);
            return (
              <div
                key={`2-${j}`}
                onClick={() => handleKeyPress(key.toLowerCase())}
                className={`${bg} px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all md:px-3 md:py-[7px]`}
              >
                {key}
              </div>
            );
          })}
          {i == 1 && (
            <div
              onClick={resetGame}
              className="bg-red-300 px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all md:px-3 md:py-[7px]"
            >
              <GrPowerReset /> 
            </div>
          )}
          {i == 2 && (
            <div
              onClick={() => handleKeyPress("Enter")}
              className="bg-red-300 px-2 py-1 flex items-center justify-center text-gray-800 border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all md:px-3 md:py-[7px]"
            >
              Enter
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
