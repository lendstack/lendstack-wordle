import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Square from "../Square";
import words from "../../words";

const correctWord = words[Math.floor(Math.random() * words.length - 1)].toUpperCase();
let defaulBoard: Array<Array<Array<string>>> = new Array<Array<Array<string>>>();
let defaultLetters: any = {};

"abcdefghijklmnopqrstuvwxyz".split("").forEach((i: string) => {
  defaultLetters[i] = "";
});

for (let i = 0; i < 6; i++) {
  defaulBoard.push([]);
  for (let j = 0; j < 5; j++) {
    defaulBoard[i].push(["", ""]);
  }
}

type table = {
  error: Dispatch<SetStateAction<string>>;
  result: Dispatch<SetStateAction<string>>;
  correct: Dispatch<SetStateAction<string>>;
  letter? : string;
  letters?: Dispatch<SetStateAction<object>>;
  clicks? : number;
  remain?: Dispatch<SetStateAction<number>>
}

export default function Table(props: table) {
  const [letters, setLetters] = useState(defaultLetters);
  const [changed, setChanged] = useState(false);
  const [board, setBoard] = useState(defaulBoard);
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  const modifyBoard = (revBoard: any) => {
    if (col < 5) {
      if (props.letter !== "ENTER") {
        revBoard[row][col][0] = props.letter;
        setCol(col + 1);
      } else {
        props.error("Words are 5 letters long!");
        setTimeout(() => {
          props.error("");
        }, 1000);
      }
    } else {
      if (props.letter === "ENTER") {
        let correctLetters = 0;
        let word = "";
        for (let i = 0; i < 5; i++) {
          word += revBoard[row][i][0];
        }
        if (words.includes(word.toLowerCase())) {
          for (let i = 0; i < 5; i++) {
            if (correctWord[i] === revBoard[row][i][0]) {
              revBoard[row][i][1] = "C";
              correctLetters++;
            } else if (correctWord.includes(revBoard[row][i][0]))
              revBoard[row][i][1] = "E";
            else revBoard[row][i][1] = "W";
            setRow(row + 1);
            if (props.remain)
              props.remain(5 - row);
            if (row === 5) {
              setLost(true);
              setTimeout(() => {
                props.result("lose");
                props.correct(correctWord);
              }, 750);
            }

            setCol(0);
            setLetters((prev: any) => {
              prev[board[row][i][0]] = board[row][i][1];
              return prev;
            });
          }
          setChanged(!changed);

          if (correctLetters === 5) {
            setWin(true);
            setTimeout(() => {
              props.result("win");
              props.correct(correctWord);
            }, 750);
          }
          return revBoard;
        } else {
          props.error("Word not in dictionary");
          setTimeout(() => {
            props.error("");
          }, 1000);
        }
      }
    }
    return revBoard;
  }

  useEffect(() => {
    if (win || lost) {
      console.log("Game ended!");
    } else {
      if (props.clicks !== 0) {
        if (props.letter === "REMOVE") {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((revBoard: any) => {
            revBoard[row][col === 0 ? 0 : col - 1][0] = "";
            return revBoard;
          });
        } else {
          setBoard(modifyBoard);
        }
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    if (props.letters)
      props.letters(letters);
  }, [changed]);

  return (
    <div className="px-10 py-5 grid gap-y-1 items-center w-100 justify-center">
      {board.map((row:any, key: any) => {
        return (
          <div key={key} className="flex gap-1 w-fit">
            {row.map((value: any, key: any) => (
              <Square key={key} value={value[0]} state={value[1]} pos={key} />
            ))}
          </div>
        );
      })}
    </div>
  );
}