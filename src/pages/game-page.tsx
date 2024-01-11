import { useEffect, useState } from "react";
import { GameEnd } from "../components/game-end";
import { WordRow } from "../components/word-row";
import {
  WordData,
  isValidWord,
  getRandomWord,
  getGuessStates,
  encryptData,
  decryptData,
} from "../db/word-utils";
import { GameInfo } from "../components/game-info";
import { LuBadgeInfo } from "react-icons/lu";

export default function GamePage() {
  const [open2, setOpen2] = useState(false);

  const [open, setOpen] = useState(false);
  const [guess, setGuess] = useState("");
  const [data, setData] = useState<WordData>({
    randomWord: "",
    userGuessList: [],
    userGuessStats: [],
    gamesPlayed: 0,
    gamesWinned: 0,
  });

  function handleClose() {
    setOpen(false);
  }
  const handleClose2 = () => setOpen2(false);
  function handleInfo() {
    setOpen2(true);
  }

  useEffect(() => {
    function checkGameStatus(myData: WordData) {
      const lastGuess =
        myData.userGuessList[myData.userGuessList.length - 1] ?? "00";
      if (
        myData.userGuessList.length >= 6 ||
        lastGuess.toLowerCase() === myData.randomWord.toLowerCase()
      ) {
        console.log("=======");
        setOpen(true);
      }
    }
    function getData() {
      setOpen(false);

      if (data.randomWord === "") {
        const dataTmp = decryptData("data");
        // const dataTmpString = localStorage.getItem("data");
        if (dataTmp) {
          // const dataTmp = JSON.parse(dataTmpString);
          setData(dataTmp);

          checkGameStatus(dataTmp);
          // console.log("data", data);
        }
      }
    }
    getData();
  }, []);

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
    const userGuessListTmp = data.userGuessList;
    const userGuessStatsTmp = data.userGuessStats;
    const myRandom = data.randomWord === "" ? getRandomWord() : data.randomWord;

    if (isValid && data.userGuessList.length < 6) {
      userGuessStatsTmp.push(getGuessStates(guess, myRandom));
      userGuessListTmp.push(guess);

      setGuess("");
      setData({
        randomWord: myRandom,
        userGuessList: userGuessListTmp,
        userGuessStats: userGuessStatsTmp,
        gamesPlayed: data.gamesPlayed,
        gamesWinned: data.gamesWinned,
      });
      encryptData("data", data);
      // localStorage.setItem("data", JSON.stringify(data));
    }
    if (
      data.userGuessList.length >= 6 ||
      guess.toLowerCase() === myRandom.toLowerCase()
    ) {
      const dataTmp = data;
      dataTmp.gamesPlayed++;
      if (guess.toLowerCase() === myRandom.toLowerCase()) {
        dataTmp.gamesWinned++;
      }
      setData(dataTmp);
      encryptData("data", data);
      // localStorage.setItem("data", JSON.stringify(data));
      setOpen(true);
    }
  }

  return (
    <div className="bg-black text-white  w-screen">
      <div>
        <GameInfo open={open2} onClose={handleClose2} />
        <GameEnd open={open} onClose={handleClose} data={data} />
        <div
          onClick={handleInfo}
          className="flex flex-row justify-end m-4 mb-0 text-4xl "
        >
          <LuBadgeInfo className="text-gray-400 hover:text-white cursor-pointer m-4 mb-0" />
        </div>
        <h1 className="mx-auto my-10 text-center text-4xl">HixCoder Wordle</h1>
        {/* <h3 className="mx-auto mt-8 text-center">{data!.randomWord}</h3> */}
        <div className="w-full flex flex-col justify-center items-center my-8 mt-12">
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
