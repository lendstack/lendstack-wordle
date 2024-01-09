import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { Suspense, useState, useTransition } from "react";

export default function AlertTutorial() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="w-[8rem] py-1 rounded-2xl border-[1px] border-black" >
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
        className=""
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
            <IoMdCloseCircleOutline className="text-gray-400 hover:text-gray-300 cursor-pointer" />
          </div>

          <DialogContent>
            <div className="flex flex-col text-white">
              <h1 className="text-[27px]">How To Play</h1>
              <p className="text-[17px]">Guess the Wordle in 6 tries.</p>
              <p className="text-[14px]">
                - Each guess must be a valid 5-letter word.
              </p>
              <p className="text-[14px]">
                - The color of the tiles will change to show how close your
                guess was to the word.
              </p>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
