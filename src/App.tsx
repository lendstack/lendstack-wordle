import { useEffect, useState } from "react";
import { WordRow } from "./components/word-row";
import {
  WordData,
  getGuessStates,
  getRandomWord,
  isValidWord,
} from "./db/word-utils";
import { GameEnd } from "./components/game-end";

export default function App() {
  const [guess, setGuess] = useState("");
  const [data, setData] = useState<WordData>({
    randomWord: "",
    userGuessList: [],
    userGuessStats: [],
  });

  useEffect(() => {
    function getData() {
      if (data.randomWord === "") {
        const dataTmpString = localStorage.getItem("data");
        if (dataTmpString) {
          const dataTmp = JSON.parse(dataTmpString);
          setData(dataTmp);
          console.log("data", data);
        }
      }
    }
    getData();
  }, [data]);

  function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const isDigit = /^\d+$/.test(value);

    if (value.length == 0) {
      setGuess("");
    }
    if (value.length > 5 || isDigit) {
      return -1;
    }
    setGuess(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = isValidWord(guess);
    if (isValid && data.userGuessList.length < 6) {
      const userGuessListTmp = data.userGuessList;
      const userGuessStatsTmp = data.userGuessStats;
      const myRandom =
        data.randomWord === "" ? getRandomWord() : data.randomWord;

      userGuessStatsTmp.push(getGuessStates(guess, myRandom));
      userGuessListTmp.push(guess);

      setGuess("");
      setData({
        randomWord: myRandom,
        userGuessList: userGuessListTmp,
        userGuessStats: userGuessStatsTmp,
      });
      localStorage.setItem("data", JSON.stringify(data));
    }
  }

  return (
    <div className="bg-black text-white  w-screen">
      <div>
        <GameEnd />
        <h1 className="mx-auto mt-8 text-center text-4xl">HixCoder Wordle</h1>
        <h3 className="mx-auto mt-8 text-center">{data!.randomWord}</h3>
        <div className="w-full flex flex-col justify-center items-center my-8">
          {data.userGuessList.map((element, index) => (
            <WordRow
              key={element + index}
              word={element}
              stats={data.userGuessStats[index]}
            />
          ))}
          {data.userGuessList.length < 6 && <WordRow word={guess} />}
          {Array.from({ length: 5 - data.userGuessList.length }, (_, i) => (
            <WordRow key={"emptyfields-" + i} word={""} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col font-light text-black w-48"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-6">
              <input
                onChange={onHandleChange}
                value={guess}
                name="guess"
                type="text"
                id="guess"
                required
                placeholder="Enter your guess"
                className={` bg-white border  border-gray-400 placeholder-gray-500  text-sm rounded-lg block w-full p-2.5 outline-none`}
              />
            </div>
            <button
              type="submit"
              className="text-blue-950 bg-white  font-medium py-2.5 px-5 mt-2 mb-6 rounded-full w-fit mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
