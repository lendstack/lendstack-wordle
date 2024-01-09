import { useEffect } from 'react';
import useWordle from '../Hooks/useWordle';
import { WordleGrid } from './WordleGrid';
import { Flex } from '@chakra-ui/react';
import KeyPad from './KeyPad';

const Wordle = ({ word }: any) => {
    const { currentGuess, HandleKeys, guesses, isCorrect, round, usedKeys } =
        useWordle(word);
    useEffect(() => {
        window.addEventListener('keyup', HandleKeys);
        if (isCorrect) {
            console.log('Correct!');
            window.removeEventListener('keyup', HandleKeys);
        }
        if (round > 5) {
            console.log('You are out of guesses');
            window.removeEventListener('keyup', HandleKeys);
        }
        return () => {
            window.removeEventListener('keyup', HandleKeys);
        };
    }, [HandleKeys, isCorrect, round]);
    // useEffect(() => {
    //     console.log('round:', round);
    //     console.log('isCorrect:', isCorrect);
    // }, [round, isCorrect]);
    return (
        <>
            {/* <h2>Guess: {currentGuess}</h2> */}
            <label htmlFor="current">Guess: </label>
            <input type="text" value={currentGuess} />
            <Flex justifyContent={'space-between'} flexDirection={'column'}>
                <WordleGrid
                    currentGuess={currentGuess}
                    guesses={guesses}
                    round={round}
                />
                <KeyPad usedKeys={usedKeys} />
            </Flex>
        </>
    );
};
export default Wordle;
