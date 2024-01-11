export default function Letter({
  keyData,
  isTuto,
}: {
  keyData: { letter: string; color: string };
  isTuto: boolean;
}) {
  return (
    <div
      className={` ${
        isTuto
          ? "w-[2rem] h-[2rem] text-[15px]"
          : "w-[3rem] h-[3rem] text-[20px]"
      }  
          ${keyData.color} 
          flex  justify-center items-center text-white font-bold  rounded-md border-[0.5px] border-gray-500`}
    >
      {keyData.letter === "*" ? "" : keyData.letter}
    </div>
  );
}
