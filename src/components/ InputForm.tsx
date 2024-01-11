import  { ChangeEvent } from "react";
import "../App.css";


export default function InputForm(props: {
  guessedWord: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: () => void;
}) {
  return (
    <div className="input-button-container">
      <input
        placeholder="Guess the hidden word"
        value={props.guessedWord}
        onChange={props.handleOnChange}
      />
      <button onClick={props.handleOnClick}>Submit</button>
    </div>
  );
}
