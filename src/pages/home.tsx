import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AlertTutorial from "../components/AlertTuto";
import { useGlobalContext } from "../context/store";

const Home = () => {
  const { setOpenAlertTuto } = useGlobalContext();
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

        <Link
          to="/game"
          className="w-[8rem] py-1  bg-black text-white rounded-2xl text-center"
        >
          Play
        </Link>
      </div>
    </div>
  );
};

export default Home;
