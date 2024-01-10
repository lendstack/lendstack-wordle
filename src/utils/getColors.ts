// ['D', 'E', 'R']
// ['R', 'I', 'D', 'E', R']

//? This function weirdly looks like C code LOL
export const getColors = (correctWord: string[], playerWord: string[]) => {
  const result = [];
  let j = 0;
  let i = 0;

  while (j < correctWord.length) {
    if (i < playerWord.length && playerWord[i].toUpperCase() === correctWord[j].toUpperCase()) {
      result.push({ letter: correctWord[j], exists: true });
      i++;
    } else {
      result.push({ letter: correctWord[j], exists: false });
    }
    j++;
  }
  return result;
};
