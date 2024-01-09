import { useState, useEffect } from "react";
import Board from "../Tables";

export default function Game(props: any) {
    const [letter, setLetter] = useState<string>();
    const [changed, setChanged] = useState(false);
    const [letters, setLetters] = useState({});
    const [clicked, setClicked] = useState(0);

    const onClickDown = (event: any) => {
        if (event.key == "Enter") {
        setLetter("ENTER");
        setClicked(clicked + 1);
        } else if (event.key == "Backspace") {
        setLetter("REMOVE");
        setClicked(clicked + 1);
        } else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
        setLetter(event.key.toUpperCase());
        setClicked(clicked + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", onClickDown);

        return () => window.removeEventListener("keydown", onClickDown);
    });

    const keyHandler = (letterValue: any) => {
        setLetter(letterValue);
        setClicked(clicked + 1);
    };
    const LettersHandler = (lettersValue: any) => {
        setLetters(lettersValue);
        setChanged(!changed);
    };

    return (
        <>
            <Board
            letter={letter}
            clicks={clicked}
            letters={LettersHandler}
            error={props.error}
            result={props.result}
            correct={props.correct}
            />
        </>

    );
}
