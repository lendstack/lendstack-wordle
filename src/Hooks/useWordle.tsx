import { useState } from 'react';
import useWordleStore from './useWordleStore';
import CheckIfWordExist from '../components/CheckIfWordExist';
import { useToast } from '@chakra-ui/react';

const useWordle = (word: string) => {
    const {
        currentGuess,
        setCurrentGuess,
        isCorrect,
        setIsCorrect,
        round,
        setRound,
        guesses,
        setGuesses,
        previousGuesses,
        setPreviousGuesses
    } = useWordleStore();
    const [usedKeys, setUsedKeys] = useState({});

    const checkGuess = () => {
        let formatted: { key: string; color: string }[] = [];
        let solution = word.split('');
        formatted = currentGuess.split('').map((letter) => {
            return { key: letter, color: 'grey' };
        });
        formatted.forEach((letter, index) => {
            if (letter.key === solution[index]) {
                letter.color = 'orange';
                solution[index] = '';
            }
        });
        formatted.forEach((letter, index) => {
            if (letter.color === 'grey') {
                if (solution.includes(letter.key)) {
                    letter.color = 'black';
                    solution[solution.indexOf(letter.key)] = '';
                }
            }
        });
        // console.log(formatted);
        return formatted;
    };
    const addNewGuess = () => {
        // console.log('addNewGuess');
        if (currentGuess === word) setIsCorrect(true);
        const formatted = checkGuess();
        let newGuesses = [...guesses];
        newGuesses[round] = formatted;
        setGuesses(newGuesses);
        setPreviousGuesses([...previousGuesses, currentGuess]);
        setRound(round + 1);
        setUsedKeys((prev) => {
            let newKeys: any = { ...prev };
            formatted.forEach((letter) => {
                const currentColor = newKeys[letter.key];
                if (letter.color === 'orange') {
                    newKeys[letter.key] = 'orange';
                    return;
                }
                if (letter.color === 'black' && currentColor !== 'orange') {
                    newKeys[letter.key] = 'black';
                    return;
                }
                if (
                    letter.color === 'grey' &&
                    currentColor !== 'orange' &&
                    currentColor !== 'black'
                ) {
                    newKeys[letter.key] = 'grey';
                    return;
                }
            });
            return newKeys;
        });
        setCurrentGuess('');
    };
    const toast = useToast();
    const checkIfExist = async () => {
        const exist: boolean = await CheckIfWordExist(currentGuess);
        console.log('exist:', exist);
        if (!exist) {
            toast({
                title: 'Error',
                description: 'The word does not exist in the dictionary',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
            });
            return false;
        }
        return true;
    };
    const HandleKeys = async ({ key }: any) => {
        if (key === 'Enter') {
            const exist = await checkIfExist();
            if (previousGuesses.indexOf(currentGuess) !== -1) {
                toast({
                    title: 'Error',
                    description:
                        "You have already guessed this word! Don't waste your guesses",
                    status: 'info',
                    duration: 2000,
                    isClosable: true,
                    position: 'top'
                });
            }
            if (
                round < 6 &&
                currentGuess.length === 5 &&
                exist &&
                previousGuesses.indexOf(currentGuess) === -1
            ) {
                addNewGuess();
            }
        }
        if (/^[a-zA-z]$/.test(key)) {
            if (currentGuess.length < 5) setCurrentGuess(currentGuess + key);
        }
        if (key === 'Backspace')
            setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    };
    return { currentGuess, HandleKeys, isCorrect, round, guesses, usedKeys, previousGuesses };
};
export default useWordle;
