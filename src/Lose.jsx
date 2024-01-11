import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

function Lose() {
  const Start = useStoreActions((state)=> state.Start);
  const CorrectWord = useStoreState((state)=> state.correctWord)
  const Tries = useStoreState((state)=> state.tries)

  return (
    <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
      <div className='w-full flex flex-col items-center gap-5'>
        <div className='flex flex-col gap-2'>
          <div><p className='text-4xl text-center tracking-[0.5em]'>WORDLE</p></div>
          <div><p className='text-4xl text-center tracking-[0.5em]'>GAME</p></div>
        </div>
        <div className='flex gap-3 flex-col px-8 py-8 space-bettween text-white bg-[#1A1A1A] border border-black rounded-[16px] mt-10'>
            <div><p className='text-2xl text-center tracking-[0.5em]'>YOU LOSE !</p></div>
            <div><p className='text-xl text-center'>TRIES TAKEN :</p></div>
            <div><p className='text-center'>{6 - Tries}</p></div>
            <div><p className='text-xl text-center'>CORRECT WORD :</p></div>
            <div><p className='text-center'>{CorrectWord}</p></div>
        </div>
        <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
        <Link to={'/Game'}>
          <button onClick={()=> {
            Start();
          }}>Play AGAIN</button>
        </Link>
        </div>
        <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
        <Link to={'/'}>
            <button onClick={()=> Start()}>Back To Home</button>
          </Link>
        </div>
      </div>
      <div className='text-center'>
        <p>Created By Ismail</p>
        <p>El Bakkouchi</p>
      </div>
    </div>
  );
}

export default Lose;
