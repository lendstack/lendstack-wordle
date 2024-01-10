export default function Letter({
  keyData,
}: {
  keyData: { letter: string; color: string };
}) {
  return (
    <div
      className={`w-[3rem] h-[3rem] flex ${keyData.color} 
      justify-center items-center text-white font-bold text-[20px] rounded-md border-[0.5px] border-gray-500`}
    >
      {keyData.letter === "*" ? "" : keyData.letter}
    </div>
  );
}
