import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GoTriangleRight } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import GetKeysData from "../utils/getKeysData";
import { useGlobalContext } from "../context/store";
import Letter from "./LetterItem";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { IoMdHelpCircle } from "react-icons/io";
import { useState } from "react";

export default function AlertHelp() {
  const { data } = useGlobalContext();

  const [open, setOpen] = useState(false);
  let keysData: { letter: string; color: string }[] = GetKeysData(
    "HAPPY",
    "ALPHA"
  );
  return (
    <div className="w-full flex justify-end">
      <IoMdHelpCircle
        size={30}
        className="cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        // className="bg-white"
      >
        <div className="bg-[#000000] rounded-xl border-[1px] border-white  max-w-[25rem]">
          <DialogContent>
            <div className="flex flex-col text-white">
              <h1 className="text-[27px] flex items-center justify-center mb-6 font-bold ">
                Here's hint
              </h1>
              <div className="border-x border-b p-2 rounded-3xl">
                {data.definition}
              </div>
              <div className="mt-3 flex justify-center">
                <button
                  className={`w-[7rem]  py-0.5 rounded-2xl bg-[#227F22] text-white  border shadow-gray-200 shadow-md`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Got it!
                </button>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
