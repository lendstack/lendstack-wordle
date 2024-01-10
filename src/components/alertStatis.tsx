import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";

export default function AlertStatics() {
  const { data, setData } = useGlobalContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data.nmbAttempt === 5) setOpen(true);
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
              <h1 className="text-[27px]">Guess Distribution</h1>
              {data.geusses.map((wld, index) => {
                let nbr = 0;
                const wordArray = Array.from(data.world);
                wordArray.forEach((char, index) => {
                  if (char === wld[index]) {
                    nbr++;
                  }
                });
                return (
                  <div className="flex items-center gap-2">
                    <p className="w-[10px]">{index + 1}</p>
                    <div className="h-[20px] w-[320px] bg-red-600 text-[14px] flex items-center pl-1">
                      {nbr}%
                    </div>
                  </div>
                );
              })}
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
