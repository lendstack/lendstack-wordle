import { BsInfoCircleFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/store";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { getSession, handleSignOut, createScore } from "../utils/supabase";
import { useEffect, useState } from "react";
import AlertSettings from "./AlertSettings";

export default function NavBar() {
  const { setOpenAlertTuto } = useGlobalContext();

  const [user, setUser] = useState<any>(null);
  const getData = async () => {
    const temp = await getSession();
    setUser(temp);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center  justify-between w-screen border-b-[1px] border-gray-700 p-2 ">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="sm:h-[2rem] h-[1.5rem] cursor-pointer"
        />
      </Link>

      <h1 className="font-bold mt-2 hiddens sm:text-[26px] text-[16px]">
        Lendstack-Wordle
      </h1>

      <div className="flex gap-3 items-center">
        <AlertSettings />

        <Link to="/leaderboard">
          <MdLeaderboard size={20} className="cursor-pointer" />
        </Link>

        <BsInfoCircleFill
          size={20}
          className="cursor-pointer"
          onClick={() => {
            setOpenAlertTuto(true);
          }}
        />

        {user && (
          <RiLogoutCircleRFill
            size={24}
            className="cursor-pointer"
            onClick={() => {
              handleSignOut();
              getData();
            }}
          />
        )}
      </div>
    </div>
  );
}
