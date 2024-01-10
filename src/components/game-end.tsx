import { Modal } from "@mui/material";
import React from "react";
import { ImCross } from "react-icons/im";

export function GameEnd() {
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        className="flex flex-col justify-center items-center "
        open={open}
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
          <h1 className="text-4xl font-semibold px-2 pb-4 text-center ">
            Game End
          </h1>

          <div className="mt-4 ">
            <h2 className="text-2xl text-white w-[50%] px-4 py-2 bg-orange-500 rounded-tr-full">
              Statics:
            </h2>
            <div className="w-[70%] flex  flex-col bg-orange-100 rounded-r-lg py-4 px-4">
              <h3 className="text-xl">Played: 1</h3>
              <h3 className="text-xl">Win Rate: 18%</h3>
            </div>
          </div>
          <div className="my-4 ">
            <h2 className="text-2xl text-white min-w-fit w-[50%] pl-4 pr-8 py-2 bg-blue-500 rounded-tr-full">
              Guess Distribution:
            </h2>
            <div className="w-[90%] flex  flex-col bg-blue-100 rounded-r-lg py-4 px-4">
              <h3 className="text-xl">First : 1</h3>
              <h3 className="text-xl">Second: 1</h3>
              <h3 className="text-xl">Third : 1</h3>
              <h3 className="text-xl">Fourth: 1</h3>
              <h3 className="text-xl">Fifth : 1</h3>
            </div>
          </div>
          <div className="flex flex-row mt-2  border-b-4 border-slate-200">
            <button className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit mx-auto">
              Home
            </button>
            <button className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit mx-auto">
              Retry
            </button>
            <button className="text-slate-50 bg-[#18191E] hover:bg-black  font-medium py-2.5 px-8 mt-2  rounded-t-xl w-fit mx-auto">
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
