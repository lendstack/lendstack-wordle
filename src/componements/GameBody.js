import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'
import { Link } from 'react-router-dom'
import CustumInput from '../CustomInput'
import Guess from '../Guess'

export default function GameBody() {
    const start = useStoreActions((store)=> store.Start);
    const tries = useStoreState((store)=> store.tries);

  return (
    <div className='w-full flex flex-col items-center text-center gap-3'>
                <div className='flex flex-col gap-10'>
                    <div>
                      <p className='text-xl text-center	tracking-[0.5em]'>WORDLE</p>
                      <p className='text-xl text-center	tracking-[0.5em]'>GAME</p>
                   </div>
                    <div>
                      <p>Tries :</p>
                      <p>{tries}</p>
                </div>
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
  )
}
