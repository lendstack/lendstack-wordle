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
    <div className="flex items-center  justify-between w-[100%] border-b-[1px] border-gray-700 px-3">
      <Link to="/">
        <img src={logo} alt="logo" className="h-[2rem] cursor-pointer" />
      </Link>

      <h1 className="text-[26px] font-bold mt-2  ">Lendstack-Wordle</h1>
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
