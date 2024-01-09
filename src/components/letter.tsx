export default function Letter({
  letter,
  word,
}: {
  letter: string;
  word: string;
}) {
  let color: string = "bg-gray-200";
  
  return (
    <div
      className={`w-[3rem] h-[3rem] flex ${color} 
      justify-center items-center text-white font-bold text-[20px] rounded-md border-[0.5px] border-gray-500`}
    >
      {letter === "*" ? "" : letter}
    </div>
  );
}
