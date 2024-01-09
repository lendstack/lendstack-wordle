import { useEffect, useState } from 'react';
import './App.css'
import styles from "./style.module.css";
import Game from './components/Game'
import Navbar from './components/Navbar'
import Help from './components/Help';
import Error from './components/Error';
import Result from './components/Result';

function App() {
    const [result, setResult] = useState("");
    const [correct, setCorrect] = useState("");
    const [help, setHelp] = useState(false);
    const [dark, setDark] = useState(false);
    const [error, setError] = useState("");

    const darkMode = (darkPosition: boolean) => {
      if (darkPosition) {
        document.documentElement.classList.add("dark");
      }
      else {
        document.documentElement.classList.remove("dark");
      }
    };

    useEffect( () => {
      darkMode(dark);
      setDark(dark)
    }, [dark]) 

    return (
      <div className={'app dark:bg-slate-800'}>
        {help && <Help help={setHelp} />}
        {error && <Error> {error} </Error>}
        {result && <Result state={result} correct={correct} result={setResult}/>}
        <div className={styles.game}>
          <Navbar help={setHelp} dark={dark} darkness={setDark}/>
          <hr className="border-1 border-black"/>
          <Game error={setError} result={setResult} correct={setCorrect}/>
        </div>
      </div>
    )
}

export default App
