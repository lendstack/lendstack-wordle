import { useEffect, useState } from "react";
import GetRandomWord from "./GetRandomWord";
import Wordle from "./Wordle";

const Start = () => {
    const [targetWord, setTargetWord] = useState(null);

    useEffect(() => {
        const fetchInitialWord = async () => {
            const word = await GetRandomWord();
            if (word) {
                setTargetWord(word.toLowerCase());
            }
        };
        fetchInitialWord();
    }, []);
    return (
        <div className="flex justify-center">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-center">{targetWord}</h2>
                {targetWord && <Wordle word={targetWord} />}
            </div>
        </div>
    );
};
export default Start;
