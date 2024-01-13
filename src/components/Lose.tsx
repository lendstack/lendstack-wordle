import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Lose() {
  const { solution }: any = useContext(AppContext);

  return (
    <div className="text-[#B0ADAD] text-[14px] font-normal text-center z-[2] flex gap-3 my-4">
      <div className="text-red-500 ">you lose! word is {solution}.</div>
      <div
        onClick={() => {
          window.location.reload();
        }}
        className="hover:cursor-pointer hover:opacity-85 non-italic text-blue-500"
      >
        Try again
      </div>
      <Link to="/" className="hover:cursor-pointer hover:opacity-85 non-italic">
        Go home
      </Link>
    </div>
  );
}

export default Lose;
