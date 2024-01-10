import { DataDTO } from "../dto/dataDto";
import Letter from "./Letter";

export default function WorldDisplay({ data }: { data: DataDTO }) {
  return (
    <>
      {data.geusses.map((attempt: any, index: any) => {
        let keysData: { letter: string; color: string }[] = [];
        keysData = [...attempt].map((letter, index) => {
          if (letter === "*") return { letter, color: "bg-gray-200" };
          if (letter === data.world[index])
            return { letter: letter, color: "bg-[#638C54]" };
          return { letter: letter, color: "bg-[#3A3A3C]" };
        });

        return (
          <div key={index} className="flex justify-evenly mt-2 gap-2">
            {keysData.map((keyData, letterIndex) => (
              <Letter key={letterIndex} keyData={keyData} />
            ))}
          </div>
        );
      })}
    </>
  );
}
