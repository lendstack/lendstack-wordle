interface WordleRowProps {
    guess?: any[];
    currentGuess?: string;
}

const WordleRow = (props: WordleRowProps) => {
    if (props.guess && props.guess?.length > 0) {
        return (
            <div className="row past">
                {props.guess.map((g: any, i: number) => {
                    return (
                        <div key={i} className={g.color}>
                            {g.key}
                        </div>
                    );
                })}
            </div>
        );
    }
    if (props.currentGuess) {
        return (
            <div className="row current">
                {props.currentGuess.split('').map((letter, index) => {
                    return (
                        <div key={index} className="filled">
                            {letter}
                        </div>
                    );
                })}
                {[...Array(5 - props.currentGuess.split('').length)].map(
                    (_, index) => {
                        return <div key={index}></div>;
                    }
                )}
            </div>
        );
    }
    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
export default WordleRow;
