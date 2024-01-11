import { Modal } from "@mui/material";
import React from "react";
import { ImCross } from "react-icons/im";
import { WordRow } from "./word-row";
import { LetterState } from "../db/word-utils";

export function GameInfo(props: { open: boolean; onClose: () => void }) {
  const handleClose = () => props.onClose();
  const letterStatus = [
    LetterState.Match,
    LetterState.Miss,
    LetterState.Miss,
    LetterState.Miss,
    LetterState.Present,
  ];

  return (
    <div>
      <Modal
        className="flex flex-col justify-center items-center "
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" h-fit max-w-96 w-[60%] bg-slate-50 outline-none m-auto text-black rounded-md">
          <div
            onClick={handleClose}
            className="flex flex-row justify-end  text-sm md:text-md lg:text-lg "
          >
            <ImCross className="text-gray-400 hover:text-black cursor-pointer m-4" />
          </div>
          <h1 className="text-3xl font-semibold px-2 pb-4 text-center ">
            How To Play
          </h1>

          <div className="mt-4 ">
            <h2 className="text-xl text-black  px-4 py-2">
              Guess the Wordle in 6 tries.
            </h2>
            <div className="w-[90%] flex  flex-col bg-blue-100 rounded-r-lg py-4 px-4">
              <h3 className="text-md">
                + Each guess must be a valid 5-letter word.
              </h3>
              <h3 className="text-md">
                + The color of the tiles will change to show how close your
                guess was to the word.
              </h3>
            </div>
          </div>
          <div className="my-4 ">
            <h2 className="text-xl text-black  px-4 py-2">Example:</h2>
            <div className="w-[90%] flex  flex-col bg-blue-950 rounded-r-lg py-4 px-4">
              <WordRow word={"hello"} stats={letterStatus} />
            </div>
          </div>
          <div className="w-[90%] flex  flex-col  rounded-r-lg py-4 my-4 px-4">
            <h3 className="text-md">
              * <strong>H</strong> is in the word and in the correct spot.
            </h3>
            <h3 className="text-md">
              * <strong>O</strong> is in the word but in the wrong spot.
            </h3>
            <h3 className="text-md">
              * <strong>others</strong> are not in the word in any spot.
            </h3>
          </div>
        </div>
      </Modal>
    </div>
  );
}
