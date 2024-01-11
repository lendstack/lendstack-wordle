import { useStoreState } from 'easy-peasy'
import React from 'react'

export default function WordColor({char, index}) {
    const correct = useStoreState((state)=> state.correctWord);

    if (char === correct[index])
        return (
        <div key={index} className="p-1 border border-white bg-green-600">
            {char}
        </div>
        )
    else if (correct.includes(char))
        return (
        <div key={index} className="p-1 border border-white bg-yellow-600">
            {char}
        </div>
        ) 
    else
        return (
        <div key={index} className="p-1 border border-white bg-red-600">
            {char}
        </div>
        )
}
