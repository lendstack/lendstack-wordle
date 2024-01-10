import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Table from "../Tables";

type game = {
    error: Dispatch<SetStateAction<string>>;
    result: Dispatch<SetStateAction<string>>;
    correct: Dispatch<SetStateAction<string>>;
}

export default function Game(props: game) {
    const [letter, setLetter] = useState<string>();
    const [changed, setChanged] = useState<boolean>(false);
    const [, setLetters] = useState({});
    const [clicked, setClicked] = useState<number>(0);
    const [remain, setRemain] = useState<number>(6);
    const [remaining, setRemaining] = useState<string>("You have " + remain + " remaining chances! 😊");

    const onClickDown = (event: any): void => {
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

    useEffect(() => {
        setTimeout(() => {
            if (remain != 0) {
                if (remain >= 3)
                setRemaining("You have " + remain + " remaining chances! 😊");
                else {
                    setRemaining("You have " + remain + " remaining chances! 🤔");
                } 
            } else {
                setRemaining("No remaining chances! 😟");
            }
        }, 750);
    }, [remain])

    const handleClickSubmit = () => {
        setLetter("ENTER");
        setClicked(clicked + 1);
    }

    const LettersHandler = (lettersValue: any) => {
        setLetters(lettersValue);
        setChanged(!changed);
    };

    return (
        <div className="justify-between items-center pt-5 py-3 justify-items-center dark:text-slate-200">
            <Table
            letter={letter}
            clicks={clicked}
            letters={LettersHandler}
            error={props.error}
            result={props.result}
            correct={props.correct}
            remain={setRemain}
            />
            <p className="font-bold dark:text-slate-200 py-2">{remaining}</p>
            <button className="text-slate-100 bg-green-600 dark:text-black hover:bg-blue-400" onClick={handleClickSubmit}>Submit</button>
        </div>

    );
}
