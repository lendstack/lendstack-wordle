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
}

const useWordleStore = create<WordleStore>((set) => ({
    currentGuess: '',
    setCurrentGuess: (guess) => set({ currentGuess: guess }),
    isCorrect: false,
    setIsCorrect: (correct) => set({ isCorrect: correct }),
    round: 0,
    setRound: (round) => set({ round }),
    guesses: Array(6),
    setGuesses: (newGuesses) => set({ guesses: newGuesses }),
    previousGuesses: [],
    setPreviousGuesses: (newPreviousGuesses) =>
        set({ previousGuesses: newPreviousGuesses })
}));

export default useWordleStore;
