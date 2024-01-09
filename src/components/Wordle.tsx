import { useEffect } from 'react';
import useWordle from '../Hooks/useWordle';
import { WordleGrid } from './WordleGrid';

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
            {/* <h2>Guess: {currentGuess}</h2> */}
            <label htmlFor="current">Guess: </label>
            <input type="text" value={currentGuess}/>
            <WordleGrid
                currentGuess={currentGuess}
                guesses={guesses}
                round={round}
            />
        </>
    );
};
export default Wordle;
