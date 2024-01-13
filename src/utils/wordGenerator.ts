import axios from "axios";
import WordValidator from "./wordValidator";
const WordGenerator = async (
  lengthWord: number
): Promise<{ randomWord: string; definition: string }> => {
  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words",
    params: { random: "true", letters: lengthWord },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };
  try {
    while (true) {
      const response = await axios(options);
      if (/^[A-Za-z]+$/.test(response.data.word)) {
        if (!response.data.results) continue;
        return {
          randomWord: response.data.word,
          definition: response.data.results[0].definition,
        };
      }
    }
  } catch (error) {
    console.error(error);
  }
  return { randomWord: "", definition: "" };
};

export default WordGenerator;
