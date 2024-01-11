'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import Wordle from './components/wordle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// let word: string = "";

export default function Home() {

  const [word, setWord] = useState<string>("");

  async function fetchWord() {
      try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
        const data = await response.json();
        // word = data[0];
        setWord(data[0].toUpperCase());
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
  } {
    ;
  }
  
  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start min-w-[500px] font-ny">
      <Wordle word={word} />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark" />
    </main>
  )
}
