import { useState } from "react";
import logo from "../assets/logo.png";
import Letter from "../components/letter";
import { z } from "zod";

const Game = () => {
  const guessSchema = z
    .string()
    .regex(/^[A-Za-z]{5}$/, "String must only contain alphabetical characters");

  const [error, setError] = useState("");
  const [guess, setGeuss] = useState<string>("");
  const [nbrAttemp, setNbrAttemp] = useState(0);
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
      <div className=" h-full flex flex-col justify-center items-center w-[25rem]">
        {attempts.map((attempt, index) => {
          return (
            <div key={index} className="flex justify-evenly mt-2 gap-2">
              {[...attempt].map((letter, index) => {
                return (
                  <Letter
                    key={index}
                    index={index}
                    letter={letter}
                    word="SHELL"
                  />
                );
              })}
            </div>
          );
        })}

        {nbrAttemp < attempts.length ? (
          <div className="flex gap-2 mt-2 w-[25rem] justify-center">
            <div className="flex bg-[#F6F7FA] mt-0  border rounded-[10px]  w-[10rem] md:w-[15rem]">
              <input
                className="bg-[#F6F7FA] m-1 p-1 flex flex-grow  w-[8rem] md:w-[15rem]
                      text-black placeholder-gray-600 text-sm outline-none"
                type="text"
                placeholder="Enter guess"
                value={guess}
                onChange={(e) => {
                  setError("");
                  setGeuss(e.target.value);
                }}
              ></input>
            </div>
            <button
              className={`w-[7rem] py-0.5 rounded-2xl border-[1px] border-black ${
                guess !== "" ? "hover:bg-green-400" : ""
              }`}
              onClick={() => {
                if (guess !== "") {
                  try {
                    const parsGuess = guessSchema.parse(guess);
                    setAttampt((pre) => {
                      pre[nbrAttemp] = guess.toUpperCase();
                      return pre;
                    });
                    setNbrAttemp((pre) => pre + 1);
                    setGeuss("");
                  } catch (error) {
                    if (error instanceof z.ZodError && guess.length === 5) {
                      error.errors.forEach((e) => {
                        setError(e.message);
                      });
                    } else setError("String must be exactly 5 characters long");
                  }
                }
              }}
            >
              Submit
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <p className="text-[14px] text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default Game;
