import { useState } from "react";
import { Link } from "react-router-dom";
import { GameInfo } from "../components/game-info";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  function handleInfo() {
    setOpen(true);
  }

  // useEffect(()=>{
  //     function handleContinue() {
  //   const dataTmp = props.data;
  //   dataTmp.randomWord = "";
  //   dataTmp.userGuessList = [];
  //   dataTmp.userGuessStats = [];
  //   localStorage.setItem("data", JSON.stringify(dataTmp));
  //   handleClose();
  // }
  // },[])
  return (
    <div className="flex flex-col justify-center items-center min-h-screen cursor-default">
      <GameInfo open={open} onClose={handleClose} />
      <img src="/logo.svg" className="w-48 h-48" alt="logo" />
      <h1 className="text-2xl my-4">HixCoder Wordle</h1>
      <h2 className="text-3xl my-1">Get 6 chances to</h2>
      <h2 className="text-3xl my-1">guess a 5-letter word.</h2>

      <div className="my-4 cursor-pointer">
        <button
          onClick={handleInfo}
          className="text-white bg-black hover:bg-blue-950 border-2  border-white mx-4 font-medium py-2.5 px-8 mt-2 mb-6 rounded-full w-fit "
        >
          How to Play
        </button>
        <Link to={`game`}>
          <button className="text-blue-950 bg-white mx-4 font-medium py-2.5 px-8 mt-2 mb-6 rounded-full w-fit  ">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}
