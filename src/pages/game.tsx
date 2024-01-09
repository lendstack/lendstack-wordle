import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../components/SubmitButton";
import WordDisplay from "../components/WordDisplay";
import WordInput from "../components/WordInput";
import WordGenerator from "../utils/wordGenerator";
import env from "react-dotenv";
import WordValidator from "../utils/wordValidator";

const Game = () => {
  const [word, setWord] = useState("");
  const [guess, setGeuss] = useState<string>("");
  const [nbrAttempt, setnbrAttempt] = useState(0);
  const [attempts, setAttempt] = useState<string[]>([
    "*****",
    "*****",
    "*****",
    "*****",
    "*****",
  ]);

  useEffect(() => {
    const getWold = async () => {
      const tmp = await WordGenerator();
      if (tmp) {
        setWord(tmp.toUpperCase());
        console.log(tmp);
      }
    };
    getWold();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-[26px] font-bold my-2 w-full text-center border-b-[1px] border-gray-700">
        Lendstack-Wordle
      </h1>
      <div className=" h-full flex flex-col justify-center items-center w-[25rem]">
        <WordDisplay attempts={attempts} word={word} />

        {nbrAttempt < attempts.length && (
          <WordInput guess={guess} setGuess={setGeuss} />
        )}

        <SubmitButton
          guess={guess}
          onSubmit={async () => {
            if (guess !== "") {
              if (guess.length === 5) {
                const isValid: boolean = await WordValidator(guess);
                if (isValid) {
                  setAttempt((prevAttempts) => {
                    const newAttempts = [...prevAttempts];
                    newAttempts[nbrAttempt] = guess.toUpperCase();
                    return newAttempts;
                  });
                  setnbrAttempt((pre) => pre + 1);
                  setGeuss("");
                } else {
                  toast.info(`${guess} not a word`);
                }
              } else {
                toast.info("wold must be exactly 5 characters long!");
              }
            }
          }}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Game;
