import wordDb from "./word-db.json";

export enum LetterState {
  Miss = "Miss", // Letter doesn't exist at all
  Present = "Present", // Letter exists but wrong location
  Match = "Match", // Letter exists and is in the right location
}

/**
 * for get a random word
 * console command for scrap word-db
 * copy(Array.from(document.querySelectorAll('.table li')).map(li => li.innerText))
 * @returns string
 */
export function getRandomWord() {
  var randomWord = wordDb[Math.floor(Math.random() * wordDb.length)];
  return randomWord;
}

export function isValidWord(word: string) {
  const lowercaseWord = word.toLowerCase();
  return wordDb.some((dbWord) => dbWord.toLowerCase() === lowercaseWord);
}

function fixPresentState(
  result: LetterState[],
  guessAsArray: string[],
  answer: string[],
  myAnswerLetterCount: Record<string, number>
) {
  const fixedResult = result;
  const answerLetterCount = myAnswerLetterCount;

  result.forEach((currentResult, resultIndex) => {
    if (currentResult !== LetterState.Present) {
      return;
    }
    const guessLetter = guessAsArray[resultIndex];
    answer.forEach((currentAnswerLetter, answerIndex) => {
      if (currentAnswerLetter !== guessLetter) {
        return;
      }
      // when currentAnswerLetter === guessLetter
      if (result[answerIndex] === LetterState.Match) {
        result[resultIndex] = LetterState.Miss;
      }
      if (answerLetterCount[guessLetter] <= 0) {
        result[resultIndex] = LetterState.Miss;
      }
    });
    answerLetterCount[guessLetter]--;
  });
  return fixedResult;
}

export function getGuessStates(
  guess: string,
  answerString: string
): LetterState[] {
  if (guess.length !== answerString.length) {
    return [];
  }

  let result: LetterState[] = [];
  const answer = answerString.split("");
  const guessAsArray = guess.split("");
  const answerLetterCount: Record<string, number> = {};

  guessAsArray.forEach((letter, index) => {
    const currentAnswerLetter = answer[index];

    // here we calculate each character count in the answer
    answerLetterCount[currentAnswerLetter] = answerLetterCount[
      currentAnswerLetter
    ]
      ? answerLetterCount[currentAnswerLetter] + 1
      : 1;

    if (currentAnswerLetter === letter) {
      result.push(LetterState.Match);
    } else if (answer.includes(letter)) {
      result.push(LetterState.Present);
    } else {
      result.push(LetterState.Miss);
    }
  });

  result = fixPresentState(result, guessAsArray, answer, answerLetterCount);

  // console.log("guess,answerString:  ", guess, answerString);
  // console.log(result);
  return result;
}
