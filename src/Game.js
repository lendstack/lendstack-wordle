import './App.css';
import React from 'react';
import { useStoreState } from 'easy-peasy';
import Win from './win';
import Lose from './Lose';
import GameBody from './componements/GameBody';


function Game() {
    const win = useStoreState((store)=> store.win);
    const lose = useStoreState((store)=> store.lose);
    
    if (win)
      return (<Win></Win>)
    else if (lose)
      return (<Lose></Lose>)
    return (
        <div className='w-full h-screen flex flex-col items-center justify-between pt-35 pb-6'>
          <GameBody></GameBody>
        </div>
      )
}

export default Game;