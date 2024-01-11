import "../App.css";
import LetterDisplay from "./LetterDisplay";

export default function WordDisplay(props:{ guessedWord:string; targetWord:string }) {
    const lowerCaseTargetWord = props.targetWord.toLowerCase();
    const letterCounts = new Map();
    let colorArray = new Array(props.guessedWord.length).fill("black");


    for (const letter of lowerCaseTargetWord) {
        letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
    }

    props.guessedWord.split('').forEach((letter, index) => {
        const lowerCaseLetter = letter.toLowerCase();
        if (lowerCaseTargetWord[index] === lowerCaseLetter) {
            colorArray[index] = "green";
            letterCounts.set(lowerCaseLetter, letterCounts.get(lowerCaseLetter) - 1);
        }
    });

    props.guessedWord.split('').forEach((letter, index) => {
        const lowerCaseLetter = letter.toLowerCase();
        if (colorArray[index] !== "green" && letterCounts.get(lowerCaseLetter) > 0) {
            colorArray[index] = "yellow";
            letterCounts.set(lowerCaseLetter, letterCounts.get(lowerCaseLetter) - 1);
        }
    });

    return (
        <div className="word-container">
            {props.guessedWord.split('').map((letter, index) => {
                return <LetterDisplay key={index} letter={letter} color={colorArray[index]} />;
            })}
        </div>
    );
}

