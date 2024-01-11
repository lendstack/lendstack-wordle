import { useEffect, useState } from 'react';
import useWordle from '../Hooks/useWordle';
import { WordleGrid } from './WordleGrid';
import { Flex, useDisclosure } from '@chakra-ui/react';
import KeyPad from './KeyPad';
import WordleModal from './WordleModal';

const Wordle = ({ word }: any) => {
    const {
        currentGuess,
        HandleKeys,
        guesses,
        isCorrect,
        round,
        usedKeys,
        previousGuesses
    } = useWordle(word);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOver, setIsOver] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    useEffect(() => {
        window.addEventListener('keyup', HandleKeys);
        if (isCorrect) {
            if (!isOver) onOpen();
            setIsOver(true);

            setTitle('Yaay!! You win');
            window.removeEventListener('keyup', HandleKeys);
        }
        if (round > 5 && !isCorrect) {
            if (!isOver) onOpen();
            setIsOver(true);
            setTitle('You are out of guesses');
            window.removeEventListener('keyup', HandleKeys);
        }
        return () => {
            window.removeEventListener('keyup', HandleKeys);
        };
    }, [HandleKeys, isCorrect, round]);

    return (
        <>
            <Flex justifyContent={'space-between'} flexDirection={'column'}>
                <WordleGrid
                    currentGuess={currentGuess}
                    guesses={guesses}
                    round={round}
                />
                <KeyPad usedKeys={usedKeys} />
            </Flex>
            {isOpen && (
                <WordleModal
                    onClose={onClose}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    title={title}
                    word={word}
                    round={round}
                    isCorrect={isCorrect}
                />
            )}
        </>
    );
};
export default Wordle;
