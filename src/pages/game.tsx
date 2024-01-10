import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../components/SubmitButton";
import WordDisplay from "../components/WordDisplay";
import WordInput from "../components/WordInput";
import WordValidator from "../utils/wordValidator";
import { useGlobalContext } from "../context/store";
import AlertStatics from "../components/alertStatis";

const Game = () => {
  const { data, setData } = useGlobalContext();
  const [guess, setGeuss] = useState<string>("");

  const onSubmit = async () => {
    const tmpGuess = guess.trim();
    if (tmpGuess !== "") {
      if (tmpGuess.length === 5) {
        const isValid: boolean = true; //await WordValidator(tmpGuess);
        if (isValid) {
          setData((preData) => {
            let newData = preData;
            newData.geusses[preData.nmbAttempt] = tmpGuess.toUpperCase();
            newData.nmbAttempt = preData.nmbAttempt + 1;
            return newData;
          });
          setGeuss("");
        } else {
          toast.info(`${tmpGuess} not a word`);
        }
      } else {
        toast.info("wold must be exactly 5 characters long!");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-[26px] font-bold my-2 w-full text-center border-b-[1px] border-gray-700">
        Lendstack-Wordle
      </h1>
      <div className=" h-full flex flex-col justify-center items-center w-[25rem]">
        <WordDisplay data={data} />

        {data.nmbAttempt < data.geusses.length && (
          <WordInput guess={guess} setGuess={setGeuss} />
        )}

        {data.nmbAttempt < data.geusses.length && (
          <SubmitButton guess={guess} onSubmit={onSubmit} />
        )}
      </div>
      <ToastContainer />
      <AlertStatics />
    </div>
  );
};

export default Game;
