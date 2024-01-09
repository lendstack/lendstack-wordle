export default function WorldInput({
  guess,
  setGuess,
}: {
  guess: string;
  setGuess: (guess: string) => void;
}) {
  return (
    <div className="flex gap-2 mt-2 w-[25rem] justify-center">
      <div className="flex bg-[#F6F7FA] mt-0  border rounded-[10px]  w-[10rem] md:w-[15rem]">
        <input
          className="bg-[#F6F7FA] m-1 p-1 flex flex-grow  w-[8rem] md:w-[15rem]
                        text-black placeholder-gray-600 text-sm outline-none"
          type="text"
          placeholder="Enter guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
