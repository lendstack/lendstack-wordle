import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    const [Rules, SetRules] = useState(false);
  return (
    //parent container
    <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
      {/* logo container */}
      <div className='w-full flex flex-col items-center gap-5'>
        <div className='flex flex-col gap-2'>
          <div><p className='text-4xl text-center	tracking-[0.5em]'>WORDLE</p></div>
          <div><p className='text-4xl text-center	tracking-[0.5em]'>GAME</p></div>
        </div>
        {/* GAME MENU */}
        {Rules && <div className='flex flex-col items-center gap-2 bg-[#1A1A1A] border border-black rounded-[16px] mt-10 text-white p-6'>
            <div className='flex flex-row gap-4'>
              <div>
                <h3>How To Play</h3>
              </div>
              <div className='self-end'>
                <button onClick={()=> SetRules(false)} className='border border-white px-1 rounded-full'>X</button>
              </div>
            </div>
            {/* put inside a componement */}
            <Rules></Rules>
          </div>
        }
        {!Rules && <div className='flex gap-3 flex-col px-8 py-8 space-bettween bg-[#1A1A1A] border border-black rounded-[16px] mt-10'>
          <div className='py-2 w-52 text-center bg-white m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
            <button onClick={()=> SetRules(true)}>How To Play</button>
          </div>
          <div className='py-2 w-52 bg-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
          <Link to={'/Game'}>
            <button>Play</button>
          </Link>
          </div>
        </div>}
      </div>
      {/* Signature Div */}
      <div className='text-center'>
        <p>Created By Ismail</p>
        <p>El Bakkouchi</p>
      </div>
    </div>
  );

}

export default Home;
