import { useState } from 'react';
import './App.css';
import React from 'react';
import GameRules from './GameRules';
import WordleLogo from './componements/WordleLogo';
import HomePageMenu from './componements/HomePageMenu';

function Home() {
    const [Rules, SetRules] = useState(false);
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between pt-32 pb-10'>
      <div className='w-full flex flex-col items-center gap-5'>
        <WordleLogo></WordleLogo>
        {Rules && <GameRules handleClick={SetRules}></GameRules>}
        {!Rules && <HomePageMenu SetRules={SetRules}></HomePageMenu>}
      </div>
      <div className='text-center'>
        <p>Created By Ismail</p>
        <p>El Bakkouchi</p>
      </div>
    </div>
  );

}

export default Home;
