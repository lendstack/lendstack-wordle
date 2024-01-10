import { useEffect, useState } from "react";
import { WordRow } from "./components/word-row";
import {
  LetterState,
  getGuessStates,
  getRandomWord,
  isValidWord,
} from "./db/word-utils";

export default function App() {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState("");
  const [userGuessList, setUserGuessList] = useState<string[]>([]);
  const [userGuessStats, setUserGuessStats] = useState<LetterState[][]>([]);

  const [randomWord, setRandomWord] = useState<string>("");

  useEffect(() => {
    if (!randomWord) {
      const randomWordTmp = getRandomWord();
      setRandomWord(randomWordTmp);
    }
  }, [randomWord]);

  function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const isDigit = /^\d+$/.test(value);

    // console.log(value.length, " ", value);
    if (value.length == 0) {
      setGuess("");
    }
    if (value.length > 5 || isDigit) {
      return -1;
    }
    if (!value) {
      setError("Required");
    }
    setGuess(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = isValidWord(guess);
    if (isValid && userGuessList.length < 6) {
      const userGuessListTmp = userGuessList;
      const userGuessStatsTmp = userGuessStats;
      userGuessStatsTmp.push(getGuessStates(guess, randomWord));
      userGuessListTmp.push(guess);
      setGuess("");
      setUserGuessList(userGuessListTmp);
      setUserGuessStats(userGuessStatsTmp);

      console.log("guess, randomWord", guess, randomWord);
      console.log(userGuessList);
      console.log(userGuessStats);
    }
    setError("isValid: " + isValid);
  }

  return (
    <div className="bg-black text-white  w-screen">
      <div>
        <h1 className="mx-auto mt-8 text-center text-4xl">HixCoder Wordle</h1>
        <h3 className="mx-auto mt-8 text-center">{randomWord}</h3>
        <div className="w-full flex flex-col justify-center items-center my-8">
          {userGuessList.map((element, index) => (
            <WordRow
              key={element + index}
              word={element}
              stats={userGuessStats[index]}
            />
          ))}
          {userGuessList.length < 6 && <WordRow word={guess} />}
          {Array.from({ length: 5 - userGuessList.length }, (_, i) => (
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
