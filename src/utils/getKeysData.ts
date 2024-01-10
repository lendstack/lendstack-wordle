const GetKeysData = (attempt: string, word: string) => {
  let keysData: { letter: string; color: string }[] = [];
  let wordLetterCount: Record<string, number> = {};

  for (const letter of word) {
    wordLetterCount[letter] = (wordLetterCount[letter] || 0) + 1;
  }

  keysData = [...attempt].map((letter, index) => {
    if (letter === "*") return { letter, color: "bg-gray-200" };
    if (letter === word[index]) {
      wordLetterCount[letter]--;
      return { letter, color: "bg-[#638C54]" }; // Green
    }
    return { letter, color: "bg-[#3A3A3C]" }; // black ~yellow
  });

  keysData = keysData.map((key, index) => {
    if (key.color === "bg-[#3A3A3C]" && wordLetterCount[key.letter] > 0) {
      wordLetterCount[key.letter]--;
      return { letter: key.letter, color: "bg-[#B49F4C]" }; // Yellow
    }
    return key;
  });

  return keysData;
};

export default GetKeysData;
