import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import * as React from "react";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useGlobalContext } from "../context/store";
import { encryptData } from "../utils/crypto";

export default function AlertSettings() {
  const { data, lengthWord, setData } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const [selectedValue, setSelectedValue] = React.useState("6");
  const handleChange = (event: string) => {
    setSelectedValue(event);
    setData((preData) => {
      let newData = { ...preData };
      newData.gridType = Number(event);
      newData.numAttempts = 0;
      (newData.guesses = Array.from({ length: Number(event) }, () =>
        "*".repeat(lengthWord)
      )),
        encryptData(newData);
      return newData;
    });
  };

  React.useEffect(() => {
    setSelectedValue(data.gridType.toString());
  }, [open]);
  return (
    <div>
      <IoSettings
        size={20}
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
      >
        {/* 010611be */}
        <div className="bg-[#000000]  rounded-xl border-[1px] border-white w-[20rem]  ">
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
              <h1 className="text-[27px] flex items-center justify-center mb-0 font-bold ">
                Grid Type
              </h1>

              <div className="flex flex-col gap-6 mt-4 ">
                <div
                  className="border rounded-md shadow-md shadow-white cursor-pointer"
                  onClick={() => {
                    handleChange("6");
                  }}
                >
                  <Radio
                    sx={{
                      color: "#227F22",
                    }}
                    checked={selectedValue === "6"}
                    value="6"
                  />
                  <label>{lengthWord} x 6</label>
                </div>

                <div
                  className="border rounded-md shadow-md shadow-white "
                  onClick={() => {
                    handleChange("5");
                  }}
                >
                  <Radio
                    sx={{
                      color: "#227F22",
                    }}
                    checked={selectedValue === "5"}
                    value="5"
                  />
                  <label>{lengthWord} x 5</label>
                </div>
                <div
                  className="border rounded-md shadow-md shadow-white"
                  onClick={() => {
                    handleChange("4");
                  }}
                >
                  <Radio
                    sx={{
                      color: "#227F22",
                    }}
                    checked={selectedValue === "4"}
                    value="4"
                  />
                  <label>{lengthWord} x 4</label>
                </div>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
