import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import GetGeussStatistic from "../utils/getGeussStatis";
import WordGenerator from "../utils/wordGenerator";

export default function AlertStatics() {
  const { data, setData, lengthWord } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const tmpIsWin: boolean =
      data.numAttempts > 0 &&
      data.randomWord === data.guesses[data.numAttempts - 1];
    const isGameOver = data.numAttempts === data.guesses.length || tmpIsWin;
    setIsWin(tmpIsWin);
    if (isGameOver) setOpen(true);
    if (isGameOver && !data.isGameOver) {
      const newData = {
        ...data,
        isGameOver: true,
        played: data.played + 1,
        numWins: tmpIsWin ? data.numWins + 1 : data.numWins,
      };
      localStorage.setItem("myGameData", JSON.stringify(newData));
      setData(newData);
      setIsWin(tmpIsWin);
    }
  }, [data.numAttempts]);

  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        open={open}
        className="bg-white"
        // onClose={() => setOpen(false)}
      >
        <div className="bg-[#010611be] w-[25rem] rounded-xl border-[1px] border-white flex flex-col">
          <DialogContent>
            <div className="flex flex-col text-white ">
              <div className="text-[27px]">STATISTICS :</div>
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <p className="text-[20px] font-serif">{data.played}</p>
                  <p className="text-[18px] font-extralight">Played</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[20px] font-serif">
                    {((data.numWins / data.played) * 100).toFixed()}
                  </p>
                  <p className="text-[18px] font-extralight">Win %</p>
                </div>
              </div>
              <div className="text-[20px] flex justify-center items-start ">
                {isWin ? "You Win" : "You Lose"}
              </div>
              <h1 className="text-[17px]">Guess Distribution</h1>
              {data.guesses.map((attempt, index) => {
                let geussStatis: { rate: number; color: string } =
                  GetGeussStatistic(attempt, data.randomWord);
                if (index >= data.numAttempts) return <div key={index}></div>;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <p className="w-[10px]">{index + 1}</p>
                    <div
                      className={`h-[20px] w-[320px] text-[14px] text-black flex items-center pl-1 ${geussStatis.color}`}
                    >
                      {((geussStatis.rate / lengthWord) * 100).toFixed()}%
                    </div>
                  </div>
                );
              })}
            </div>
          </DialogContent>
          <div className="flex  justify-evenly mb-2">
            <button
              className="w-[8rem] py-1  bg-green-500 hover:bg-green-600 text-white rounded-2xl text-center"
              onClick={async () => {
                setOpen(false);
                const tmp = await WordGenerator(lengthWord);
                if (tmp) {
                  setData((preData) => {
                    const newData = {
                      ...preData,
                      randomWord: tmp.toUpperCase(),
                      numAttempts: 0,
                      isGameOver: false,
                      guesses: preData.guesses.map((guess) =>
                        "*".repeat(guess.length)
                      ),
                    };
                    localStorage.setItem("myGameData", JSON.stringify(newData));
                    return newData;
                  });
                }
              }}
            >
              Next word
            </button>
            {!isWin && (
              <button
                className="w-[8rem] py-1  bg-blue-500 hover:bg-blue-600 text-white rounded-2xl text-center"
                onClick={() => {
                  setOpen(false);
                  setData((preData) => {
                    const newData = {
                      ...preData,
                      numAttempts: 0,
                      isGameOver: false,
                      guesses: preData.guesses.map((guess) =>
                        "*".repeat(guess.length)
                      ),
                    };
                    localStorage.setItem("myGameData", JSON.stringify(newData));
                    return newData;
                  });
                }}
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
