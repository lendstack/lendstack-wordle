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

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (guess !== "") {
      if (guess.length === data.word.length) {
        const isValid: boolean = true; //await WordValidator(tmpGuess);
        if (isValid) {
          setData((preData) => {
            let newData = preData;
            newData.guesses[preData.numAttempts] = guess;
            newData.numAttempts = preData.numAttempts + 1;
            localStorage.setItem("myGameData", JSON.stringify(newData));
            return newData;
          });
          setGeuss("");
        } else {
          toast.info(`${guess} not a word`);
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
      <div className="h-full flex flex-col justify-center items-center w-[25rem]">
        <p>{data.word}</p>

        <WordDisplay data={data} guess={guess} />
        {data.numAttempts < data.guesses.length && (
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center"
          >
            <WordInput guess={guess} setGuess={setGeuss} />
            <SubmitButton guess={guess} />
          </form>
        )}
      </div>
      <ToastContainer />
      <AlertStatics />
    </div>
  );
};

export default Game;
