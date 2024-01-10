import React, { ChangeEvent } from 'react'

export default function Wordle() {
    const [wordList, setWordList] = React.useState<string[]>([]);
    const [word, setWord] = React.useState<string>("");
    const [attempts, setAttempts] = React.useState<number>(6);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value);
    }
    const handleOnClick = () => {
      if (!attempts)
        return;
      setWordList([...wordList, word]);
      setWord('');
      setAttempts(attempts - 1);
    }
    return (
    <div>
      <div>
        <h1>Wordle Quest</h1>
        <input placeholder="Enter a word" value={word} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Submit</button>
        <p>Remaining attempts: {attempts}</p>
      </div>
      <div>
        <ul>
          {wordList.map((word, index) => <li key={index}>{word}</li>)}
        </ul>
      </div>
    </div>
  )
}
