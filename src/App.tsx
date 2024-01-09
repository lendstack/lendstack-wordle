import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import GetRandomWord from './components/GetRandomWord';
import Wordle from './components/Wordle';
import CheckIfWordExist from './components/CheckIfWordExist';

function App() {
    const [targetWord, setTargetWord] = useState(null);
    const [isExist, setIsExist] = useState<Boolean>(false);

    useEffect(() => {
        const fetchInitialWord = async () => {
            const word = await GetRandomWord();
            if (word) {
                setTargetWord(word.toLowerCase());
            }
            const exist : boolean = await CheckIfWordExist(word.toLowerCase());
            console.log('exist:', exist);
            setIsExist(exist);
        };
        fetchInitialWord();
    }, []);

    return (
        <ChakraProvider>
            <>
                <h1 className="text-3xl font-bold text-center">My Wordle</h1>
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <h2 className="text-2xl font-bold text-center">
                            {targetWord}
                        </h2>
                        {targetWord && <Wordle word={targetWord} />}
                        
                    </div>
                </div>
            </>
        </ChakraProvider>
    );
}

export default App;
