import { useEffect, useState } from "react";
import LeaderBItem from "../components/LeaderItem";
import NavBar from "../components/NavBar";
import { DataScoreDTO } from "../dto/dataDto";
import { getAllScore } from "../utils/supabase";

const LeaderBoard = () => {
  const [allScores, setAllScores] = useState<DataScoreDTO[] | null>(null);
  useEffect(() => {
    const getScores = async () => {
      const temp = await getAllScore();
      setAllScores(temp);
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
            .sort((a: DataScoreDTO, b: DataScoreDTO) => {
              const diff = b.numWins - a.numWins;
              if (diff !== 0) return diff;
              return b.played - a.played;
            })
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
