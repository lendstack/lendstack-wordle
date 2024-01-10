import words from "../../words.json";

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
