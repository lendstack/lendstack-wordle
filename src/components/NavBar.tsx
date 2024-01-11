import { BsInfoCircleFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/store";

import AlertSettings from "./AlertSettings";

export default function NavBar() {
  const { setOpenAlertTuto } = useGlobalContext();
  return (
    <div className="flex items-center  justify-between w-[100%] border-b-[1px] border-gray-700 px-3">
      <Link to="/">
        <img src={logo} alt="logo" className="h-[2rem] cursor-pointer" />
      </Link>

      <h1 className="text-[26px] font-bold mt-2  ">Lendstack-Wordle</h1>
      <div className="flex gap-3">
        <AlertSettings />
        <BsInfoCircleFill
          size={20}
          className="cursor-pointer"
          onClick={() => {
            setOpenAlertTuto(true);
          }}
        />
      </div>
    </div>
  );
}
