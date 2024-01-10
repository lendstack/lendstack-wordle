import { useEffect } from 'react';
import useWordle from '../Hooks/useWordle';
import { WordleGrid } from './WordleGrid';
import { Flex, useDisclosure } from '@chakra-ui/react';
import KeyPad from './KeyPad';
import WordleModal from './WordleModal';

const Wordle = ({ word }: any) => {
    const { currentGuess, HandleKeys, guesses, isCorrect, round, usedKeys } =
        useWordle(word);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        window.addEventListener('keyup', HandleKeys);
        if (isCorrect) {
            onOpen();
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
            {isCorrect && (
                <WordleModal
                    title={'Yaay!! You win'}
                    word={word}
                    round={round}
                />
            )}
            {round > 5 && !isCorrect && (
                <WordleModal
                    title={'Oups!! You Lose'}
                    word={word}
                />
            )}
            {/* {isOpen && (
                <WordleModal
                    onClose={onClose}
                    isOpen={isOpen}
                    onOpen={onOpen}
                />
            )} */}
        </>
    );
};
export default Wordle;
