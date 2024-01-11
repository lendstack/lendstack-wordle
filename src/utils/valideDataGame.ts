import { DataDTO } from "../dto/dataDto";
import WordValidator from "./wordValidator";

const validateGameData = async (
  preValue: DataDTO,
  tmpData: any,
  lengthWord: number
): Promise<DataDTO | null> => {
  const newData: DataDTO = { ...preValue };

  if (
    typeof tmpData.randomWord === "string" &&
    tmpData.randomWord.length === lengthWord
  )
    newData.randomWord = tmpData.randomWord;
  else return null;

  if (
    typeof tmpData.numAttempts === "number" &&
    tmpData.numAttempts <= preValue.guesses.length &&
    tmpData.numAttempts >= 0
  )
    newData.numAttempts = tmpData.numAttempts;
  else return null;

  if (typeof tmpData.gridType === "number" && tmpData.gridType > 0)
    newData.gridType = tmpData.gridType;
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
    tmpData.guesses.length === newData.gridType
  ) {
    let guesses: string[] = [];
    for (let i = 0; i < newData.gridType; i++) {
      if (i <= newData.numAttempts) {
        if (
          typeof tmpData.guesses[i] === "string" &&
          tmpData.guesses[i].length === lengthWord
        ) {
          guesses.push(tmpData.guesses[i]);
        } else {
          return null;
        }
      } else {
        guesses.push("*".repeat(lengthWord));
      }
    }
    newData.guesses = guesses;
  } else return null;

  for (let i = 0; i < newData.guesses.length; i++) {
    if (i < newData.numAttempts) {
      const isValidWord = await WordValidator(newData.guesses[i]);
      if (!isValidWord) {
        return null;
      }
    }
  }
  return newData;
};

export default validateGameData;
