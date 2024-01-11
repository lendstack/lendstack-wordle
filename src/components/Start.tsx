import { useEffect, useState } from 'react';
import GetRandomWord from './GetRandomWord';
import Wordle from './Wordle';
import useWordleStore from '../Hooks/useWordleStore';
import CheckIfWordExist from './CheckIfWordExist';

const Start = () => {
    const [targetWord, setTargetWord] = useState(null);
    const { resetState } = useWordleStore();

    useEffect(() => {
        resetState();
        const fetchInitialWord = async () => {
            const word = await GetRandomWord();
            const isExist = await CheckIfWordExist(word);
            if (word && isExist) {
                setTargetWord(word.toLowerCase());
            }
        };
        fetchInitialWord();
    }, []);
    return (
        <div className="flex justify-center">
            <div className="w-1/2">
                {targetWord && <Wordle word={targetWord} />}
            </div>
        </div>
    );
};
export default Start;
