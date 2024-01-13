import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.svg";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../context/store";

import { useEffect, useState } from "react";
import { createScore, getSession, handleGoogleSignin } from "../utils/supabase";

const Home = () => {
  const navigate = useNavigate();
  const { setOpenAlertTuto, lengthWord, data } = useGlobalContext();

  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const temp = await getSession();
      setUser(temp);
    };
    getData();
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex flex-col items-center  justify-center  h-screen">
      <img src={logo} alt="logo" className="h-[8rem]" />
      <h1 className="text-[26px] font-bold">Lendstack-Wordle</h1>
      <p className="text-[26px] my-4 overflow-hidden text-center">
        Get {data.gridType} chances to guess a {lengthWord}-letter word.
      </p>
      <div className="flex gap-6 flex-col sm:flex-row  items-center justify-center">
        <button
          onClick={() => {
            setOpenAlertTuto(true);
          }}
          className="w-[12rem] py-1 rounded-2xl border-[1px] border-black "
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
            setIsClicked(true);
            await createScore();
            setIsClicked(false);
            navigate("/game");
          }}
          disabled={isClicked}
          className="w-[12rem] py-1 bg-black text-white rounded-2xl text-center"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Home;
