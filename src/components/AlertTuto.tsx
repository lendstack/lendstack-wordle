import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GoTriangleRight } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import GetKeysData from "../utils/getKeysData";
import { useGlobalContext } from "../context/store";
import Letter from "./LetterItem";

export default function AlertTutorial() {
  const { openAlertTuto, setOpenAlertTuto, data, lengthWord } =
    useGlobalContext();
  let keysData: { letter: string; color: string }[] = GetKeysData(
    "HAPPY",
    "ALPHA"
  );
  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        open={openAlertTuto}
        onClose={() => setOpenAlertTuto(false)}
        // className="bg-white"010611be
      >
        <div className="bg-[#000000] rounded-xl border-[1px] border-white mijn-w-[15rem] max-w-[25rem]">
          <div
            className="flex flex-row justify-end mt-2 mr-2 text-lg"
            onClick={() => {
              setOpenAlertTuto(false);
            }}
          >
            <IoMdCloseCircleOutline
              size={20}
              className="text-white hover:text-gray-300 cursor-pointer"
            />
          </div>

          <DialogContent>
            <div className="flex flex-col text-white">
              <div className="text-[27px] flex items-center justify-center mb-6 font-bold">
                <h1 className="border-x-2 px-3 rounded-xl">How To Play</h1>
              </div>

              <p className="text-[17px] ">
                {` Guess the Wordle in ${data.guesses.length} tries or less.`}
              </p>
              <div className="flex items-center mt-2 ">
                <GoTriangleRight size={20} className=" " />
                <p className="text-[14px] font-serif">
                  {`Each guess must be a valid ${lengthWord}-letter word.`}
                </p>
              </div>
              <div className="flex items-start justify-start mt-1">
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
