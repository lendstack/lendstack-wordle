import { DataDTO } from "../dto/dataDto";
import GetKeysData from "../utils/getKeysData";
import Letter from "./LetterItem";

export default function wordDisplay({
  data,
  guess,
}: {
  data: DataDTO;
  guess: string;
}) {
  return (
    <div>
      {data.guesses.map((attempt: any, index: any) => {
        let keysData: { letter: string; color: string }[] = GetKeysData(
          attempt,
          data.randomWord
        );
        if (index === data.numAttempts) {
          keysData = keysData.map((key, index) => {
            if (guess[index])
              return {
                letter: guess[index].toUpperCase(),
                color: "bg-gray-400",
              };
            return { letter: "*", color: "bg-gray-200" };
          });
        }

        return (
          <div key={index} className="flex justify-evenly mt-2 gap-2">
            {keysData.map((keyData, letterIndex) => (
              <Letter key={letterIndex} keyData={keyData} isTuto={false} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
