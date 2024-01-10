export const checkResult = (guesses: string[], word: string) => {
    const guessesResult =  guesses.map((item) => item.split('').filter((letter, index) => letter === word[index].toUpperCase()));
    // Return the best match
    const result = guessesResult.sort((prev, next) => next.length - prev.length)[0];
    return result && result.length > 0 ? result : [];
}

// word

// ['D', 'A', 'S', 'A', 'R']

// guesses

// ['D', 'V', 'R', 'A', 'R']
// ['X', 'A', 'R', 'D', 'O']