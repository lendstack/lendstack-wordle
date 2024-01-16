export function setLocalStorage(
  guessesIndex: number,
  guesses: string[],
  word: string
) {
  localStorage.setItem("guessesIndex", guessesIndex.toString());
  localStorage.setItem("guesses", JSON.stringify(guesses));
  localStorage.setItem("word", word);
}

export function getLocalStorage(): {
  guessesIndex: number | undefined;
  guesses: string[] | undefined;
  word: string | undefined;
} {
  const localGuessesIndex = localStorage.getItem("guessesIndex");
  const guessesIndex = localGuessesIndex
    ? parseInt(localGuessesIndex)
    : undefined;
  const localGuesses = localStorage.getItem("guesses");
  const guesses = localGuesses ? JSON.parse(localGuesses) : undefined;
  const word = localStorage.getItem("word") || undefined;
  return { guessesIndex, guesses, word };
}

export function clearLocalStorage() {
  localStorage.removeItem("guessesIndex");
  localStorage.removeItem("guesses");
  localStorage.removeItem("word");
}
