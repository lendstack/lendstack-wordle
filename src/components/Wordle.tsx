import React, { ChangeEvent } from 'react'
import { EnglishWordSchema } from '../utils/validation';
import { ZodError } from 'zod';

export default function Wordle() {
    const [wordList, setWordList] = React.useState<string[]>([]);
    const [word, setWord] = React.useState<string>("");
    const [attempts, setAttempts] = React.useState<number>(6);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value);
      setErrorMessage(null);
    }
    const handleOnClick = async () => {
      if (!attempts)
        return;
      try
      {
        await EnglishWordSchema.parseAsync(word);
        setWordList([...wordList, word]);
        setWord('');
        setAttempts(attempts - 1);
      }catch(error: ZodError | any){
        setErrorMessage(error.errors[0].message ?? error.message ?? "Unknown error");
        setWord('');
      }
    }
    return (
    <div>
      <div>
        <h1>Wordle Quest</h1>
        <input placeholder="Enter a word" value={word} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Submit</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
