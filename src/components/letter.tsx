export default function Letter({
  index,
  letter,
  word,
}: {
  index: number;
  letter: string;
  word: string;
}) {
  let color: string = "bg-gray-200";
  if (letter !== "*") color = "bg-[#3A3A3C]";
  if (word.includes(letter)) color = "bg-[#B49F4C]";
  if (letter === word[index]) color = "bg-[#638C54]";
  return (
    <div
      className={`w-[3rem] h-[3rem] flex ${color} 
      justify-center items-center text-white font-bold text-[20px] rounded-md border-[0.5px] border-gray-500`}
    >
      {letter === "*" ? "" : letter}
    </div>
  );
}
