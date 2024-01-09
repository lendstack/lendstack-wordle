import useWordleStore from './useWordleStore';

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
        setCurrentGuess('');
    };

    const HandleKeys = ({ key }: any) => {
        //need to check if the word exists in the dictionary
        if (key === 'Enter') {
            if (round < 5 && currentGuess.length === 5) {
                // setRound((round) => round + 1);
                addNewGuess();
            }
        }
        if (/^[a-zA-z]$/.test(key)) {
            if (currentGuess.length < 5) setCurrentGuess(currentGuess + key);
        }
        if (key === 'Backspace')
            setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    };
    return { currentGuess, HandleKeys, isCorrect, round, guesses };
};
export default useWordle;
