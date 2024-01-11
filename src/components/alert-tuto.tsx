import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Letter from "./Letter";
import GetKeysData from "../utils/getKeysData";

export default function AlertTutorial() {
  const [open, setOpen] = useState(false);
  let keysData: { letter: string; color: string }[] = GetKeysData(
    "HAPPY",
    "ALPHA"
  );
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="w-[8rem] py-1 rounded-2xl border-[1px] border-black "
      >
        How to play
      </button>

      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        className="bg-white"
      >
        <div
          className="bg-[#010611be] w-[25rem] rounded-xl border-[1px] border-white "
          color="red"
        >
          <div
            className="flex flex-row justify-end mt-2 mr-2 text-lg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <IoMdCloseCircleOutline
              size={20}
              className="text-white hover:text-gray-300 cursor-pointer"
            />
          </div>

          <DialogContent>
            <div className="flex flex-col text-white">
              <h1 className="text-[27px] flex items-center justify-center mb-6 font-bold ">
                How To Play
              </h1>

              <p className="text-[17px] ">
                Guess the Wordle in 6 tries or less.
              </p>
              <div className="flex items-center w-[20rem] mt-2 ">
                <GoTriangleRight size={20} className=" " />
                <p className="text-[14px] font-serif w-[90%]">
                  Each guess must be a valid 5-letter word.
                </p>
              </div>
              <div className="flex items-start justify-start w-[20rem] mt-1">
                <GoTriangleRight size={20} />
                <p className="text-[14px] w-[90%] font-serif">
                  The color of the tiles will change to show how close your
                  guess was to the word.
                </p>
              </div>

              <p className="text-[17px] mt-3">Examples:</p>
              <div className="flex gap-2 mb-2">
                {keysData.map((keyData, letterIndex) => (
                  <Letter key={letterIndex} keyData={keyData} isTuto={true} />
                ))}
              </div>
              <p className="text-[14px] w-[90%] font-serif">
                P is in the word and in the correct spot.
              </p>
              <p className="text-[14px] w-[90%] font-serif">
                H, A are in the word but in the wrong spot.
              </p>
              <p className="text-[14px] w-[90%] font-serif">
                Y is not in the word in any spot.
              </p>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
