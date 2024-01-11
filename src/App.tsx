import { useEffect, useState } from 'react';
import './App.css';
import {
    ChakraProvider,
    Flex,
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import { PatchQuestionFill } from 'react-bootstrap-icons';
import HowTo from './components/HowTo';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Start from './components/Start';

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <BrowserRouter>
                <header className="flex justify-between	p-10">
                    <Link to={'/'}>
                        <h1 className="text-3xl font-bold text-center main-header">
                            My Wordle
                        </h1>
                    </Link>
                    <IconButton
                        aria-label="Star"
                        icon={<PatchQuestionFill />}
                        size="2xl"
                        fontSize={40}
                        variant="outline"
                        border={'none'}
                        colorScheme="black"
                        onClick={onOpen}
                    />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/play" element={<Start />} />
                </Routes>

                {isOpen && (
                    <HowTo onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
                )}
            </BrowserRouter>
        </>
    );
}

export default App;
