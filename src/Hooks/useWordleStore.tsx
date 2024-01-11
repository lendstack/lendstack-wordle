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
    usedKeys: { key: string; color: string }[];
    setUsedKeys: (newUsedKeys: { key: string; color: string }[]) => void;
    resetState: () => void;
    word: string;
    setWord: (targetWord: string) => void;
    isOver: boolean;
    setIsOver: (isOver: boolean) => void;
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
    letters: Array.from({ length: 28 }, (_, index: number) => ({
        key:
            index === 26
                ? 'Enter'
                : index === 27
                ? 'Backspace'
                : String.fromCharCode(65 + index)
        // if (index === 27) return { key: 'Backspace' };
        // key: String.fromCharCode(65 + index)
    })),
    usedKeys: Array(26).fill({ key: '', color: '' }),
    setUsedKeys: (newUsedKeys) => set({ usedKeys: newUsedKeys }),
    word: '',
    setWord: (targetWord) => set({ word: targetWord }),
    isOver: false,
    setIsOver: (isOver) => set({ isOver }),
    resetState: () =>
        set({
            currentGuess: '',
            isCorrect: false,
            round: 0,
            guesses: Array(6).fill(''),
            previousGuesses: [],
            usedKeys: Array(26).fill({ key: '', color: '' }),
            isOver: false,
        })
}));

export default useWordleStore;
