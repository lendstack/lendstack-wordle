import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../components/SubmitButton";
import WordDisplay from "../components/WordDisplay";
import WordInput from "../components/WordInput";
import WordValidator from "../utils/wordValidator";
import { useGlobalContext } from "../context/store";
import NavBar from "../components/NavBar";
import AlertStatics from "../components/AlertStatis";
import { encryptData } from "../utils/crypto";

const Game = () => {
  const { data, setData, lengthWord } = useGlobalContext();
  const [guess, setGeuss] = useState<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (guess !== "") {
      if (guess.length === lengthWord) {
        const isValid: boolean = await WordValidator(guess);
        if (isValid) {
          setData((preData) => {
            let newData = preData;
            newData.guesses[preData.numAttempts] = guess;
            newData.numAttempts = preData.numAttempts + 1;
            encryptData(newData);
            return newData;
          });
          setGeuss("");
        } else {
          toast.info(`${guess} not a word`);
        }
      } else {
        toast.info(`wold must be exactly ${lengthWord} characters long!`);
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <NavBar />
      <div className="h-full flex flex-col justify-center items-center w-[25rem]">
        <p>{data.randomWord}</p>

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
