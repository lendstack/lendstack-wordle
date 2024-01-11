import './App.css';
import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Win from './win';
import Lose from './Lose';
import GameBody from './componements/GameBody';


function Game() {
    const win = useStoreState((store)=> store.win);
    const lose = useStoreState((store)=> store.lose);
    const correct = useStoreState((store)=> store.correctWord);
    const start = useStoreActions((store)=> store.Start)

    if (!correct.length)
      start();
    if (win)
      return (<Win/>)
    else if (lose)
      return (<Lose/>)
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between pt-20 pb-6'>
          <GameBody/>
        </div>
      )
}

export default Game;