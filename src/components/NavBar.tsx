import React, { useContext } from "react";
import { Image } from "@nextui-org/react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function NavBar() {
  const context: any = useContext(AppContext);

  return (
    <nav className="sticky h-[65px] w-full border-b border-divider px-6 flex justify-between">
      <Link
        to="/"
        className="w-[60%] md:w-[90%] flex md:pl-[50%] h-full font-bold text-[30px] font-header items-center hover:cursor-pointer hover:opacity-85"
      >
        Wordle
      </Link>
      <div className="flex h-full items-center  w-[70px] justify-between">
        <div
          className="w-fit h-fit hover:cursor-pointer hover:opacity-85"
          onClick={() => {
            context.setInfoModal(true);
          }}
        >
          <Image
            src="/info.png"
            alt="info.png"
            className="rounded-none w-[22px] h-[22px]"
          ></Image>
        </div>
        <div className="w-fit h-fit hover:cursor-pointer hover:opacity-85">
          <Image
            src="/statistics.png"
            alt="statistics.png"
            className="rounded-none w-[22px] h-[22px]"
          ></Image>
        </div>
      </div>
    </nav>
  );
}
