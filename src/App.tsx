import { useState } from "react";
import { WordRow } from "./components/word-row";
import { getGuessStates, getRandomWord, isValidWord } from "./db/word-utils";

export default function App() {
  const random = getGuessStates("deedd", "kekek");
  const [guess, setGuess] = useState("");
  const [error, setError] = useState("");
  const userGuessList: string[] = [];

  function onHandleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    // console.log(name, value);

    if (name === "guess") {
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
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = isValidWord(guess);
    if (isValid) {
      userGuessList.push(guess);
    }
    setError("isValid: " + isValid);

    console.log(guess);
  }

  return (
    <div className="min-h-screen w-screen">
      <div>
        <h1 className="mx-auto mt-8 text-center">HixCoder Wordle</h1>
        <h3 className="mx-auto mt-8 text-center">{random}</h3>
        <div className="w-full flex flex-col justify-center items-center my-8">
          {userGuessList.map((element, index) => (
            <WordRow key={element + index} word={element} />
          ))}
          <WordRow word={guess} />
          <WordRow word="hello" />
          <WordRow word="hello" />
          <WordRow word="hello" />
          <WordRow word="hello" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex flex-col font-light text-black w-48"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-6">
              <label
                htmlFor="guess"
                className="text-white  mb-2 text-sm flex flex-row justify-between"
              >
                <p>Your Guess</p>
              </label>

              <input
                onChange={onHandleChange}
                value={guess}
                name="guess"
                type="text"
                id="guess"
                required
                placeholder="Enter your guess"
                className={` bg-white border  border-gray-400 placeholder-[#9CA2A]  text-sm rounded-lg block w-full p-2.5 outline-none`}
              />
              <p>{error}</p>
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
