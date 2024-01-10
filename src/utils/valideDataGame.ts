import { DataDTO } from "../dto/dataDto";
import WordValidator from "./wordValidator";

const validateGameData = async (
  preValue: DataDTO,
  tmpData: any
): Promise<DataDTO | null> => {
  const newData: DataDTO = { ...preValue };

  if (
    typeof tmpData.world === "string" &&
    tmpData.world.length === preValue.geusses[0].length
  )
    newData.world = tmpData.world;
  else return null;
  if (
    typeof tmpData.nmbAttempt === "number" &&
    tmpData.nmbAttempt <= preValue.geusses[0].length &&
    tmpData.nmbAttempt >= 0
  )
    newData.nmbAttempt = tmpData.nmbAttempt;
  else return null;
  if (
    typeof tmpData.geusses === "object" &&
    tmpData.geusses.length === preValue.geusses.length
  ) {
    newData.geusses = newData.geusses.map((wrd, index) => {
      if (index <= newData.nmbAttempt) {
        if (
          typeof tmpData.geusses[index] === "string" &&
          tmpData.geusses[index].length === wrd.length
        )
          return tmpData.geusses[index];
        else return "-----";
      }
      return wrd;
    });
  } else return null;

  // for (let i = 0; i < newData.geusses.length; i++) {
  //     if (i < newData.nmbAttempt) {
  //         const isValidWord = await WordValidator(newData.geusses[i]);
  //         if (!isValidWord) {
  //             return null;
  //         }
  //     }
  // }
  return newData;
};

export default validateGameData;
