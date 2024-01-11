import logo from "../assets/logo.png";
import googleLogo from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/store";

import { useEffect, useState } from "react";
import {
  handleGoogleSignin,
  getAllScore,
  getSession,
  createScore,
} from "../utils/supabase";

const Home = () => {
  const navigate = useNavigate();
  const { setOpenAlertTuto } = useGlobalContext();

  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const temp = await getSession();
      setUser(temp);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center  justify-center  h-screen">
      <img src={logo} alt="logo" className="h-[8rem]" />
      <h1 className="text-[26px] font-bold">Lendstack-Wordle</h1>
      <p className="text-[26px] my-4">
        Get 6 chances to guess a 5-letter word.
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => {
            setOpenAlertTuto(true);
          }}
          className="w-[8rem] py-1 rounded-2xl border-[1px] border-black "
        >
          How to play
        </button>
        {!user && (
          <button
            className="w-[12rem] py-1 rounded-2xl border-[1px] border-black flex items-center justify-around"
            onClick={async () => {
              await handleGoogleSignin();
            }}
          >
            <img src={googleLogo} alt="googleLogo" className="h-[1.5rem]" />
            <p>Sign in with google</p>
          </button>
        )}

        <button
          onClick={async () => {
            await createScore();
            navigate("/game");
          }}
          className="w-[8rem] py-1 bg-black text-white rounded-2xl text-center"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Home;
