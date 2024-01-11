import { IoCloseSharp } from "react-icons/io5";

export default function gameStats(setGameStats: any) {

	return (
	  <div className="absolute mobileWidth h-[calc(100%-68px)] min-h-[1032px] flex items-center justify-center bg-[#00000099]">
		<div className="p-4  border border-[#121213] rounded shadow h-[600px] w-[500px] bg-[#121213]">
			<div className="flex justify-end">
				<button className="mb-4 text-[2rem]"
					onClick={() => setGameStats(false)}
				><IoCloseSharp /></button>
			</div>
		</div>
	  </div>
	);
  };
