import React from 'react'
import WordColor from './WordColor';
import { useStoreState } from 'easy-peasy';

export default function Guess() {
    const guess = useStoreState((state)=> state.words);
    return (
        <div className=' text-white gap-1'>
        {Array.isArray(guess) && guess.map((word, index)=>{
            return (
                <div key={index + 10} className="flex flex-row gap-1 justify-center p-2">
                    {word.toUpperCase().split('').map((char, place)=>{
                        return (
                            <WordColor char={char} index={place}></WordColor>
                        )
                    })}
                </div>
            )
            })}
        </div>
    )
}
