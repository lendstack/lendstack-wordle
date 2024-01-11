import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useStoreActions } from "easy-peasy";
import React, { useRef, useState } from "react";

function CustumInput() {
  const [UserGuess, SetUserGuess] = useState(['','','','',''])
  const UserInput = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]
  const handleKeyPress = (key, value, index)=> {
    if (!value.length && key === 'Backspace' && index > 0)
      UserInput[index - 1].current.focus();
  }
  const handleChange = (char, index)=> {
    const newInput = [...UserGuess];
    newInput[index] = char.substring(char.length - 1);
    SetUserGuess(newInput);
    if (char && index < 4){
      console.log("char : ", char, " index : ", index);
      UserInput[index + 1].current.focus();
    }
  }
  const Verify = useStoreActions((state)=> state.Verify);
  var checkWord = require('check-if-word');
  var words = checkWord('en');
  const check = (word)=> {
    if (words.check(word) === true)
      Verify(word);
    else
      toast("PLEASE ENTET A VALID WORD !!!!")
  }
    return (
      <div className="flex flex-col gap-2">
        <ToastContainer />
        <div className='flex flex-row gap-1'>
          {
            UserGuess.map((box ,index)=> {
              return (
                <input key={index} index={index} ref={UserInput[index]} value={UserGuess[index]} onKeyDown={(e)=> handleKeyPress(e.key, e.target.value, index)} onChange={(e)=> handleChange(e.target.value,index)} maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
                )
            })
          }
          </div>
          <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#7d7777]'>
            <button onClick={()=> {
              check(UserGuess.join(''));}}>SUBMIT</button>
          </div>
      </div>
    )
}

export default CustumInput;