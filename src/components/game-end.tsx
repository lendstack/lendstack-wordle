import { Modal } from "@mui/material";
import React from "react";

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
        <div className=" h-fit min-h-48 w-[60%] bg-white outline-none m-auto text-black rounded-md">
          <h1 className="text-4xl font-semibold px-2 py-4 text-center ">
            Game End
          </h1>
        </div>
      </Modal>
    </div>
  );
}
