import WordleRow from './WordleRow';

interface WordleGridProps {
    currentGuess: string;
    guesses: any[];
    round: number;
}

export const WordleGrid = (props: WordleGridProps) => {
    return (
        <div>
            {props.guesses.map((guess, index) => {
                if (props.round === index) {
                    return (
                        <WordleRow
                            key={index}
                            currentGuess={props.currentGuess}
                        />
                    );
                }
                return <WordleRow key={index} guess={guess} />;
            })}
        </div>
    );
};
