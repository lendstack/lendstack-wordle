import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider, Flex, IconButton } from '@chakra-ui/react';
import GetRandomWord from './components/GetRandomWord';
import Wordle from './components/Wordle';
import { PatchQuestionFill } from 'react-bootstrap-icons';

function App() {
    const [targetWord, setTargetWord] = useState(null);
    const [isExist, setIsExist] = useState<Boolean>(false);

    useEffect(() => {
        const fetchInitialWord = async () => {
            const word = await GetRandomWord();
            if (word) {
                setTargetWord(word.toLowerCase());
            }
            // const exist: boolean = await CheckIfWordExist(word.toLowerCase());
            // console.log('exist:', exist);
            // setIsExist(exist);
        };
        fetchInitialWord();
    }, []);
    const theme = {
        styles: {
            global: {
                body: {
                    bg: '#F8F4EC'
                }
            }
        }
    };
    return (
        <ChakraProvider theme={theme}>
            <>
                <header className="flex justify-between	p-10">
                    <h1 className="text-3xl font-bold text-center main-header">
                        My Wordle
                    </h1>
                    <IconButton
                        aria-label="Star"
                        icon={<PatchQuestionFill />}
                        size="2xl"
                        fontSize={40}
                        variant="outline"
                        colorScheme="black"
                        onClick={() => {
                            // Handle button click
                        }}
                    />
                </header>
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