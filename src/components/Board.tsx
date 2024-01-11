import React, { useContext } from "react";
import { AppContext } from "../App";

function Board() {
  const { Board, setBoard }: any = useContext(AppContext);
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-1">
      {Board.map((row: string[], index: number) => (
        <div key={index} className="flex w-full gap-1">
          {row.map((letter: string, index: number) => (
            <div
              key={index}
              className="w-[56px] h-[56px] border bg-[#ced4da] rounded-sm text-black  text-[45px] font-bold font flex justify-center items-center uppercase"
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
