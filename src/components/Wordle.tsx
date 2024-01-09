import { useEffect } from 'react';
import useWordle from '../Hooks/useWordle';

const Wordle = ({ word }: any) => {
    const { currentGuess, HandleKeys, guesses, isCorrect, round } =
        useWordle(word);
    useEffect(() => {
        window.addEventListener('keyup', HandleKeys);
        return () => {
            window.removeEventListener('keyup', HandleKeys);
        };
    }, [HandleKeys]);
    useEffect(() => {
        console.log('isCorrect:', isCorrect);
        console.log('guesses:', guesses);
        console.log('round:', round);
    }, [isCorrect, guesses, round]);
    return (
        <>
            <p className="text-2xl font-bold text-center">
                Write word: {currentGuess}
            </p>
        </>
    );
};
export default Wordle;
