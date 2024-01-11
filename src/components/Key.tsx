import React from "react";

function Key({ KeyVal }: any) {
  return KeyVal.length === 1 ? (
    <div className="w-10 h-16 m-[2px] rounded grid text-[20px] bg-[#ced4da] text-black cursor-pointer place-items-center hover:opacity-85">
      {KeyVal}
    </div>
  ) : (
    <div className="w-20 h-16 m-[2px] rounded grid text-[20px] bg-[#ced4da] text-black cursor-pointer place-items-center hover:opacity-85">
      {KeyVal}
    </div>
  );
}

export default Key;
