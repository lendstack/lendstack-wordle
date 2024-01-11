import { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../App";
import useWordle from "../hooks/useWordle";
function GamePage() {
  const context: any = useContext(AppContext);
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(
    context.solution
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div className="h-screen w-screen bg-black text-white">
      <NavBar></NavBar>
      <div>{currentGuess}</div>
    </div>
  );
}

export default GamePage;
