import logo from "../assets/logo.png";
import AlertTutorial from "../components/alert-tuto";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center  justify-center  h-screen">
      <img src={logo} alt="logo" className="h-[8rem]" />
      <h1 className="text-[26px] font-bold">Lendstack-Wordle</h1>
      <p className="text-[26px] my-4">
        Get 6 chances to guess a 5-letter word.
      </p>
      <div className="flex gap-6">
        <AlertTutorial />

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
