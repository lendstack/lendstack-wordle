import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../context/store";

import { useEffect, useState } from "react";
import { getAllScore, getSession, handleGoogleSignin } from "../utils/supabase";
import NavBar from "../components/NavBar";
import LeaderBItem from "../components/LeaderItem";
import { DataScoreDTO } from "../dto/dataDto";

const LeaderBoard = () => {
  const [allScores, setAllScores] = useState<DataScoreDTO[] | null>(null);
  useEffect(() => {
    const getScores = async () => {
      const temp = await getAllScore();
      setAllScores(temp);
      console.log(temp);
    };
    getScores();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <NavBar />
      <div
        className="flex flex-row justify-between text-gray-700 text-center cursor-default
            font-700 
           w-[30rem] "
      >
        <p className="w-1/6 text-left">Rank</p>
        <p className="w-2/6  text-center sm:text-left">Profile</p>
        <p className="w-1/6  text-center sm:text-left">Matches</p>
        <p className="w-1/6 text-center">Win Rate</p>
      </div>
      <div>
        {allScores &&
          allScores
            .slice()
            .sort((a: DataScoreDTO, b: DataScoreDTO) => b.numWins - a.numWins)
            .map((data: DataScoreDTO, index: number) => {
              return (
                <LeaderBItem
                  key={index}
                  playerRank={index + 1}
                  dataScore={data}
                />
              );
            })}
      </div>
    </div>
  );
};
export default LeaderBoard;
