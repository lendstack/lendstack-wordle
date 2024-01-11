import { ReactComponent as Enter } from "./Enter.svg";
import { ReactComponent as BackSpace } from "./BackSpace.svg";

const rows = ["QWERTYUIOP", "ASDFGHJKL+", "ZXCVBNM-"];

const getColor = (letter, solution, guesses) => {
  const ind = solution.indexOf(letter);
  if (ind === -1) return "wrong";
  if (guesses.find((guess) => guess[ind] === letter)) return "correct";
  return "semi-correct";
};

const Keyboard = ({ letters, solution, guesses, onClick }) => (
  <div className="keyboard">
    {rows.map((row, rowIdx) => (
      <div key={rowIdx} className="keyboard__row">
        {row.split("").map((letter, letterIdx) => {
          if (letter === "+")
            return (
              <div className="keyboard__letter">
                <Enter onClick={() => onClick("+")}/>
              </div>
            );
          if (letter === "-")
            return (
              <div className="keyboard__letter">
                <BackSpace onClick={() => onClick("-")}/>
              </div>
            );
          const displayValue = letter;
          return (
            <div
              key={letterIdx}
              className={`keyboard__letter ${
                letters.includes(letter) && getColor(letter, solution, guesses)
              }`}
              onClick={() => onClick(letter)}
            >
              {displayValue}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default Keyboard;
