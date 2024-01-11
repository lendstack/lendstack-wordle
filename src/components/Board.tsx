import React, { useContext } from "react";
import { AppContext } from "../App";

function Board() {
  const { Board, solution, Cursor }: any = useContext(AppContext);

  return (
    <div className="w-full max-w-[300px] flex flex-col gap-1">
      {Board.map((row: string[], jndex: number) => (
        <div key={jndex} className="flex w-full gap-1">
          {row.map((letter: string, index: number) => {
            const correct =
              solution && solution[index] === letter.toLocaleLowerCase();
            const almost =
              !correct &&
              letter !== "" &&
              solution.includes(letter.toLocaleLowerCase());
            const lettreState =
              Cursor.y > jndex &&
              (correct ? "correct" : almost ? "almost" : "error");
            return (
              <div
                key={index}
                id={lettreState || ""}
                className="w-[56px] h-[56px] border-3 border-divider rounded-md text-white  text-[25px] font-bold font flex justify-center items-center uppercase "
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
