import { useState } from "react";
import logo from "../assets/logo.png";
import Letter from "../components/letter";
import { z } from "zod";

const Game = () => {
  const [guess, setGeuss] = useState<string>("");
  const [attempts, setAttampt] = useState<string[]>([
    "*****",
    "*****",
    "*****",
    "*****",
    "*****",
  ]);
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-[26px] font-bold my-2 w-full text-center border-b-[1px] border-gray-700">
        Lendstack-Wordle
      </h1>
      <div className=" h-full flex flex-col justify-center">
        {attempts.map((attempt, index) => {
          return (
            <div className="flex justify-evenly mt-2">
              {[...attempt].map((letter, index) => {
                return <Letter letter={letter} word="Shell" />;
              })}
            </div>
          );
        })}
        <div className="flex gap-2 mt-2">
          <div className="flex bg-[#F6F7FA] mt-0  border rounded-[10px]  w-[10rem] md:w-[15rem]">
            <input
              className="bg-[#F6F7FA] m-1 p-1 flex flex-grow  w-[8rem] md:w-[15rem]
                        text-black placeholder-gray-600 text-sm outline-none"
              type="text"
              placeholder="Enter guess"
              value={guess}
              onChange={(e) => {
                setGeuss(e.target.value);
              }}
            ></input>
          </div>
          <button
            className="w-[7rem] py-0.5 rounded-2xl border-[1px] border-black hover:bg-green-400"
            onClick={() => {
              setAttampt((pre) => [...pre, guess]);
              setGeuss("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
