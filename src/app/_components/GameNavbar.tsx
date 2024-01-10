'use client'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import DarkModeSwitcher from "./DarkSwitcher";
import React from "react"


const GameNavebar:React.FC = ({}) => {
    return (
       <div className="flex items-center justify-between w-[90%]">
      <div className="flex gap-3">
        <DarkModeSwitcher/>
      </div>
         <div className="flex gap-3">
        <button className="btn-link">
          <IoMdHelpCircleOutline />
        </button>
        <button className="btn-link">
          <IoStatsChartOutline />
        </button>
      </div>
       </div>
    )
}

export default GameNavebar