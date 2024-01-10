import { DataDTO } from "../dto/dataDto";
import GetKeysData from "../utils/getKeysData";
import Letter from "./Letter";

export default function WorldDisplay({ data }: { data: DataDTO }) {
  return (
    <div>
      {data.geusses.map((attempt: any, index: any) => {
        let keysData: { letter: string; color: string }[] = GetKeysData(
          attempt,
          data.world
        );
        return (
          <div key={index} className="flex justify-evenly mt-2 gap-2">
            {keysData.map((keyData, letterIndex) => (
              <Letter key={letterIndex} keyData={keyData} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
