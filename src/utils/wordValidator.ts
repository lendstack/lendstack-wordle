import axios from "axios";

const WordValidator = async (geuss: string): Promise<boolean> => {
  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${geuss}`,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };
  try {
    const response = await axios(options);
    if (response.status === 200) return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export default WordValidator;
