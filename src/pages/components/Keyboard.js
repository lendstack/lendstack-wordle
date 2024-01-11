import React, { useContext, useCallback, useEffect } from 'react'
import { AppContext} from "../_app"
import Key from "./key"

function Keyboard() {
    const keys1 = ["Q" ,"W" ,"E" ,"R" ,"T" ,"Y" ,"U" ,"I" ,"O" ,"P"];
    const keys2 = ["A" ,"S" ,"D" ,"F" ,"G" ,"H" ,"J" ,"K" ,"L"];
    const keys3 = ["Z" ,"X" ,"C" ,"V" ,"B" ,"N" ,"M"];
    const { onDelete, onEnter, onSelectLetter, disabledLetters } = useContext(AppContext);

    const handleKeyboaerd = useCallback((event) =>{
        if (event.key === "Enter"){
            onEnter();
        }else if (event.key === "Backspace"){
            onDelete();
        }else {
            keys1.forEach((key) =>{
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            });
            keys2.forEach((key) =>{
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            });
            keys3.forEach((key) =>{
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            });
        }
    });
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboaerd)
        return () => {
            document.removeEventListener("keydown", handleKeyboaerd)
        }
    }, [handleKeyboaerd])

  return(
    <div className='keyboard' onKeyDown={handleKeyboaerd}>
        <div className='line1'>{keys1.map((key) => {
            return <Key  key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}</div>
        <div className='line2'>{keys2.map((key) => {
            return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}</div>
        <div className='line3'>
            <Key keyVal={"ENTER"} bigKey />
            {keys3.map((key) => {
            return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
        </div>
    </div>
  ) 
}

export default Keyboard