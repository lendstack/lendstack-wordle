import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import GetGeussStatistic from "../utils/getGeussStatis";
import WordGenerator from "../utils/wordGenerator";

export default function AlertStatics() {
  const { data, setData } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    if (data.nmbAttempt === 5) {
      setOpen(true);
    }
    if (
      data.nmbAttempt > 0 &&
      data.world === data.geusses[data.nmbAttempt - 1]
    ) {
      setOpen(true);
      setIsWin(true);
    }
  }, [data.nmbAttempt]);

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
        onClose={() => setOpen(false)}
        className=""
      >
        <div className="bg-[#010611be] w-[25rem] rounded-xl border-[1px] border-white flex flex-col">
          <DialogContent>
            <div className="flex flex-col text-white ">
              <div className="text-[42px] flex justify-center items-start ">
                {isWin ? "You Win" : "You Lose"}
              </div>
              <h1 className="text-[27px]">Guess Distribution</h1>
              {data.geusses.map((attempt, index) => {
                let geussStatis: { rate: number; color: string } =
                  GetGeussStatistic(attempt, data.world);
                if (attempt === "*****") return <></>;
                return (
                  <div className="flex items-center gap-2">
                    <p className="w-[10px]">{index + 1}</p>
                    <div
                      className={`h-[20px] w-[320px] text-[14px] text-black flex items-center pl-1 ${geussStatis.color}`}
                    >
                      {geussStatis.rate * 20}%
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
                const tmp = await WordGenerator();
                if (tmp) {
                  setData((preData) => {
                    let newData = { ...preData };
                    newData.world = tmp.toUpperCase();
                    newData.nmbAttempt = 0;
                    newData.geusses = newData.geusses.map((geuss, index) => {
                      return "*".repeat(geuss.length);
                    });
                    localStorage.setItem("myGameData", JSON.stringify(newData));
                    return newData;
                  });
                }
              }}
            >
              Continue
            </button>
            {!isWin && (
              <button
                className="w-[8rem] py-1  bg-blue-500 hover:bg-blue-600 text-white rounded-2xl text-center"
                onClick={() => {
                  setOpen(false);
                  setData((preData) => {
                    let newData = { ...preData };
                    newData.nmbAttempt = 0;
                    newData.geusses = newData.geusses.map((geuss, index) => {
                      return "*".repeat(geuss.length);
                    });
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
