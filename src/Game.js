import './App.css';
import React from 'react';
import CustumInput from './CustomInput';
import Guess from './Guess';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Win from './win';
import Lose from './Lose';
import { Link } from 'react-router-dom';


function Game() {
    const tries = useStoreState((store)=> store.tries);
    const win = useStoreState((store)=> store.win);
    const lose = useStoreState((store)=> store.lose);
    const start = useStoreActions((store)=> store.Start);

    if (win){
      return (
        <Win></Win>
        )
      }
      else if (lose) {
      return (
        <Lose></Lose>
      )
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between pt-35 pb-6'>
            {/* logo container */}
            <div className='w-full flex flex-col items-center text-center gap-3'>
                <div className='flex flex-col gap-10'>
                    <div>
                      <p className='text-xl text-center	tracking-[0.5em]'>WORDLE</p>
                      <p className='text-xl text-center	tracking-[0.5em]'>GAME</p>
                   </div>
                    {/* number of tries */}
                    <div>
                      <p>Tries :</p>
                      <p>{tries}</p>
                    </div>
                    {/* input feild */}
                      <CustumInput></CustumInput>
                <div className='bg-black text-white rounded'>
                  <Guess></Guess>
                </div>
                </div>
                <div className='py-2 w-40 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#7d7777]'>
                  <Link to={'/'}>
                    <button onClick={()=> start()}>BACK TO HOME</button>
                  </Link>
                </div>
            </div>
        </div>
      )
}

export default Game;