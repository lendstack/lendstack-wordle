import { Modal } from "@mui/material";
import { ImCross } from "react-icons/im";
import { LetterState, WordData, encryptData } from "../db/word-utils";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function GameEnd(props: {
  open: boolean;
  onClose: () => void;
  data: WordData;
}) {
  //   const [open, setOpen] = React.useState(props.open);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => props.onClose();
  const winRate =
    props.data.gamesPlayed === 0
      ? 0
      : (props.data.gamesWinned * 100) / props.data.gamesPlayed;

  const lastGuess =
    props.data.userGuessList[props.data.userGuessList.length - 1] ?? "";

  const isWin = lastGuess.toLowerCase() === props.data.randomWord.toLowerCase();

  function handleRetry() {
    const dataTmp = props.data;
    dataTmp.userGuessList = [];
    dataTmp.userGuessStats = [];
    encryptData("data", dataTmp);

    // localStorage.setItem("data", JSON.stringify(dataTmp));
    handleClose();
  }

  function handleContinue() {
    const dataTmp = props.data;
    dataTmp.randomWord = "";
    dataTmp.userGuessList = [];
    dataTmp.userGuessStats = [];
    encryptData("data", dataTmp);
    // localStorage.setItem("data", JSON.stringify(dataTmp));
    handleClose();
  }

  function geussCorrectPercent(stats: LetterState[]) {
    let count = 0;
    for (let i = 0; i < stats.length; i++) {
      if (stats[i] === LetterState.Match) {
        count++;
      } else if (stats[i] === LetterState.Present) count += 0.5;
    }
    return count * 20;
  }

  return (
    <div>
      <Modal
        className="flex flex-col justify-center items-center "
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" h-fit max-w-96 w-[60%] bg-[#eae3e3f1] outline-none m-auto text-black rounded-md">
          <h1
            className={`${
              isWin ? "text-green-600" : "text-red-600"
            } text-4xl font-semibold px-2 pb-4 m-4 text-center`}
          >
            {`${isWin ? "Victory" : "Defeat"}`}
          </h1>

          <div className="mt-4 ">
            <h2 className="text-2xl text-white w-[50%] px-4 py-2 bg-orange-500 rounded-tr-full">
              Statics:
            </h2>
            <div className="w-[70%] flex  flex-col bg-orange-100 rounded-r-lg py-4 px-4">
              <h3 className="text-xl">{`Played: ${props.data.gamesPlayed}`}</h3>
              <h3 className="text-xl">{`Win Rate: ${winRate.toFixed(2)}%`}</h3>
            </div>
          </div>
          <div className="my-4 ">
            <h2 className="text-2xl text-white min-w-fit w-[50%] pl-4 pr-8 py-2 bg-blue-500 rounded-tr-full">
              Guess Distribution:
            </h2>
            <div className="w-[90%] flex  flex-col bg-blue-100 rounded-r-lg py-4 px-4">
              {props.data.userGuessStats.map((wordStats, index) => (
                <h3
                  key={"guessinfo-" + (index + 1)}
                  className="text-xl"
                >{`Guess ${index + 1} : ${geussCorrectPercent(
                  wordStats
                )}%`}</h3>
              ))}
            </div>
          </div>
          <div className="flex flex-row mt-2  border-b-4 border-slate-200">
            {/* <Link to={`/`} className="mx-auto">
              <button
                onClick={handleContinue}
                className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit "
              >
                Home
              </button>
            </Link> */}
            <button
              onClick={handleContinue}
              className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit mx-auto"
            >
              Next Word
            </button>

            {!isWin && (
              <button
                onClick={handleRetry}
                className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit mx-auto"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
