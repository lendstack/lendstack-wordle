import { create } from 'zustand';

interface WordleStore {
    currentGuess: string;
    setCurrentGuess: (guess: string) => void;
    isCorrect: boolean;
    setIsCorrect: (correct: boolean) => void;
    round: number;
    setRound: (round: number) => void;
    guesses: any[];
    setGuesses: (newGuesses: any[]) => void;
    previousGuesses: string[];
    setPreviousGuesses: (newPreviousGuesses: string[]) => void;
    letters: any[];
    setLetters: (newLetters: any[]) => void;
    // usedKeys: any[];
    // setUsedKeys: (newUsedKeys: any[]) => void;
}

const useWordleStore = create<WordleStore>((set) => ({
    currentGuess: '',
    setCurrentGuess: (guess) => set({ currentGuess: guess }),
    isCorrect: false,
    setIsCorrect: (correct) => set({ isCorrect: correct }),
    round: 0,
    setRound: (round) => set({ round }),
    guesses: Array(6).fill(''),
    setGuesses: (newGuesses) => set({ guesses: newGuesses }),
    previousGuesses: [],
    setPreviousGuesses: (newPreviousGuesses) =>
        set({ previousGuesses: newPreviousGuesses }),
    setLetters: (newLetters) => set({ letters: newLetters }),
    // letters: Array(26).fill(undefined),
    letters: Array.from({ length: 28 }, (_, index : number) => ({
        key: index === 26 ? 'Enter' : index === 27 ? 'Backspace' : String.fromCharCode(65 + index),
        // if (index === 27) return { key: 'Backspace' };
        // key: String.fromCharCode(65 + index)
    }))
}));

export default useWordleStore;
