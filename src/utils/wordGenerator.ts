import axios from "axios";
const WordGenerator = async (lengthWord: number): Promise<string> => {
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
      if (/^[A-Za-z]+$/.test(response.data.word)) return response.data.word;
    }
  } catch (error) {
    console.error(error);
  }
  return "";
};

export default WordGenerator;
