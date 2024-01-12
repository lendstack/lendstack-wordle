import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

export default function howToPlay(setShowHowTo: any) {

	return (
	  <div className="absolute mobileWidth h-[calc(100%-68px)] min-h-[1032px] flex items-center justify-center bg-[#00000099]">
		<div className="p-4  border border-[#121213] rounded shadow h-[600px] w-[500px] dynamic-bg">
			<div className="flex justify-end">
				<button className="mb-4 text-[2rem]"
					onClick={() => setShowHowTo(false)}
				><IoCloseSharp /></button>
			</div>
		  <div className="flex justify-between">
		    <h1 className="text-2xl font-bold">How To Play</h1>
		  </div>
		  <div className="text-lg mb-5">
			<div className="mb-2">Guess the Wordle in 6 tries!</div>
			<ul className="list-disc">
				<li className="ml-[20px]"><div className="text-[14px]">Each guess must be a valid 5-letter word.</div></li>
				<li className="ml-[20px]"><div className="text-[14px]">The color of the tiles will change to show how close your guess was to the word.</div></li>
			</ul>
		  </div>
		  <h3 className="text-lg font-semibold mb-2">Examples</h3>
  
		  <ul className="list-none">
			<li>
			  <div className="my-1 flex flex-row">
				<div className="bg-[#538d4e] mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">W</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">A</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">C</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">K</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">Y</div></div>
			  </div>
			  <span className="mt-1">W</span>
			  <span className="ml-2 text-[14px]">- Indicates a correct letter in the correct spot.</span>
			</li>
			<li>
			<div className="my-1 flex flex-row">
				<div className="border border-gray-500  mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">W</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">A</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">C</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">K</div></div>
				<div className="bg-[#b59f3b] mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">Y</div></div>
			  </div>
			  <span className="mt-1">Y</span>
			  <span className="ml-2 text-[14px]">- Indicates a correct letter in the wrong spot.</span>
			</li>
			<li>
			<div className="my-1 flex flex-row">
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">W</div></div>
				<div className="bg-[#3a3a3c] mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">A</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">C</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">K</div></div>
				<div className="border border-gray-500 mr-1 w-[32px] h-[32px] font-bold text-[25px] text-center"><div className="relative top-[-3px]">Y</div></div>
			  </div>
			  <span className="mt-1">A</span>
			  <span className="ml-2 text-[14px]">- Indicates that the letter is not in the word in any spot.</span>
			</li>
		  </ul>
		  <p className="text-lg mt-6 text-[18px] mr-[10px]">
			Remember, you have 6 tries to guess the correct word! Good luck!
		  </p>
		</div>
	  </div>
	);
  };
