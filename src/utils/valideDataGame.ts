import { DataDTO } from "../dto/dataDto";
import WordValidator from "./wordValidator";

const validateGameData = async (
  preValue: DataDTO,
  tmpData: any
): Promise<DataDTO | null> => {
  const newData: DataDTO = { ...preValue };

  if (
    typeof tmpData.word === "string" &&
    tmpData.word.length === preValue.guesses[0].length
  )
    newData.word = tmpData.word;
  else return null;
  if (
    typeof tmpData.numAttempts === "number" &&
    tmpData.numAttempts <= preValue.guesses[0].length &&
    tmpData.numAttempts >= 0
  )
    newData.numAttempts = tmpData.numAttempts;
  else return null;

  if (typeof tmpData.played === "number" && tmpData.played >= 0)
    newData.played = tmpData.played;
  else return null;
  if (typeof tmpData.isGameOver === "boolean")
    newData.isGameOver = tmpData.isGameOver;
  else return null;

  if (
    typeof tmpData.numWins === "number" &&
    tmpData.numWins >= 0 &&
    tmpData.numWins <= tmpData.played
  )
    newData.numWins = tmpData.numWins;
  else return null;

  if (
    typeof tmpData.guesses === "object" &&
    tmpData.guesses.length === preValue.guesses.length
  ) {
    newData.guesses = newData.guesses.map((wrd, index) => {
      if (index <= newData.numAttempts) {
        if (
          typeof tmpData.guesses[index] === "string" &&
          tmpData.guesses[index].length === wrd.length
        )
          return tmpData.guesses[index];
        else return "-----";
      }
      return wrd;
    });
  } else return null;

  // for (let i = 0; i < newData.guesses.length; i++) {
  //     if (i < newData.numAttempts) {
  //         const isValidWord = await WordValidator(newData.guesses[i]);
  //         if (!isValidWord) {
  //             return null;
  //         }
  //     }
  // }
  return newData;
};

export default validateGameData;
