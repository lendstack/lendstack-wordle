import { useEffect } from 'react';
import WordleRow from './WordleRow';

interface WordleGridProps {
    currentGuess: string;
    guesses: any[];
    round: number;
}

export const WordleGrid = (props: WordleGridProps) => {
    // console.log('WordleGrid props:', props.guesses);
    // useEffect(() => {
    //     console.log('wordleGrid guesses:', props.guesses[0]);//array of objects === guesse
    // }, [props.guesses]);
    return (
        <div>
            {props.guesses.map((guess, index) => {
                if (props.round === index) {
                    return <WordleRow key={index} currentGuess={props.currentGuess} />;
                }
                return <WordleRow key={index} guess={guess} />;
                // return <div style={{ color: 'black' }}>hey: {guess && guess[0].key}</div>;
            })}
        </div>
    );
};
