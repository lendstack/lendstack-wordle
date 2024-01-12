import { useEffect, useState } from "react";
import { DataScoreDTO } from "../dto/dataDto";
import { getSession } from "../utils/supabase";

export default function LeaderBItem({
  playerRank,
  dataScore,
}: {
  playerRank: number;
  dataScore: DataScoreDTO;
}) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const temp = await getSession();
      setUser(temp);
    };
    getData();
  }, []);
  return (
    <div
      className={`transition ease-in-out delay-20 cursor-default
    flex flex-row  hover:scale-105 justify-around
     bg-slate-200 items-center  hover:text-black text-black
     rounded-lg hover:border border-black
     sm:min-w-[30rem] py-3 my-4
     
    ${playerRank === 1 ? "scale-105 hover:scale-110 shadow-md" : ""}
     ${
       user && user.user.id === dataScore.user_id
         ? "border border-gray-400 hover:border-black"
         : ""
     }`}
    >
      <p className=" text-blue-500 font-700 text-2xl  ">{`# ${playerRank}`}</p>

      <div className="flex items-center w-5/12 ">
        <img
          className="rounded-full border-white
           border-2 w-10 h-10  
          "
          src={dataScore.user_avatar}
          alt="photo user"
        />
        <p className="text-sm ml-2 w-5/6 overflow-hidden">{dataScore.name}</p>
      </div>

      <div className="flex items-center w-1/6 justify-between">
        <div className=" font-400  text-center hidden sm:block ">
          {dataScore.played}
        </div>
        <div className="font-400  text-center ">
          {Number(((dataScore.numWins / dataScore.played) * 100).toFixed()) | 0}
          %
        </div>
      </div>
    </div>
  );
}
