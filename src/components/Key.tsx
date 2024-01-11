import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ KeyVal }: any) {
  const { onTap, onDelete, onEnter }: any = useContext(AppContext);
  let custom = {};
  KeyVal.length === 1
    ? (custom = { width: "40px" })
    : (custom = { width: "80px" });

  const OnclickHandler = () => {
    if (KeyVal === "Enter") {
      onEnter();
    } else if (KeyVal === "Delete") {
      onDelete();
    } else {
      onTap(KeyVal);
    }
  };
  return (
    <div
      className="w-10 h-16 m-[2px] rounded grid text-[20px] bg-[#ced4da] text-black cursor-pointer place-items-center hover:opacity-85"
      style={custom}
      onClick={OnclickHandler}
    >
      {KeyVal}
    </div>
  );
}

export default Key;
