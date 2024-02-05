import { IoCloseSharp } from "react-icons/io5";
import React from 'react'
import { BiHelpCircle } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";

interface HowToPlayProps {
	setShowHowTo: React.Dispatch<React.SetStateAction<boolean>>
	setShowStats: React.Dispatch<React.SetStateAction<boolean>>
	showHowTo: boolean
	showStats: boolean
}

export default function howToPlay(props: HowToPlayProps) {

	function handleHowToClick() {
		if (props.showStats === false)
			props.setShowHowTo(true);
	}

	function handleStatsClick() {
		if (props.showHowTo === false)
		props.setShowStats(true);
	}
	
	return (
		<div className='flex flex-row justify-between items-center text-[2rem] font-bold h-[66px] w-full px-5 border-b-[1px] border-[#484849ab]'>
			<div className="mx-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<div>Wordle</div>
			<div className="flex flex-row items-center">
				<button
					onClick={handleHowToClick}
					className="mx-1"
				><BiHelpCircle /></button>
				{/* <button
					className="mx-1"
					onClick={handleStatsClick}
				><IoStatsChartSharp /></button> */} {/* stats button */}
			</div>
		</div>
	);
}
