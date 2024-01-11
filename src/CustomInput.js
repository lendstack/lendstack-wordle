import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";

function CustumInput() {
  const [first, SetFirst] = useState(''); 
  const [second, SetSecond] = useState(''); 
  const [third, SetThird] = useState('');
  const [forth, SetForth] = useState(''); 
  const [fifth, SetFifth] = useState('');
  const Verify = useStoreActions((state)=> state.Verify);
  // var checkWord = require('check-if-word');
  // var words = checkWord('en');
  const check = (word)=> {
    // if (words.check(word) === true)
      Verify(word);
  }

    return (
      <div className="flex flex-col gap-2">
        <div className='flex flex-row gap-1'>
           <div>
             <input value={first} onInput={e => SetFirst(e.target.value)} id="0" maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
           </div>
           <div>
             <input value={second} onInput={e => SetSecond(e.target.value)} id="1" maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
           </div>
           <div>
             <input value={third} onInput={e => SetThird(e.target.value)} id="2" maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
           </div>
           <div>
             <input value={forth} onInput={e => SetForth(e.target.value)} id="3" maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
           </div>
           <div>
             <input value={fifth} onInput={e => SetFifth(e.target.value)} id="4" maxLength={1} className='h-[40px] w-[40px] border-black border-[1px] rounded-md text-center' type='text'></input>
           </div>
          </div>
          <div className='py-2 w-52 bg-black text-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
            <button onClick={()=> check(first + second + third + forth + fifth)} >SUBMIT</button>
          </div>
      </div>
    )
}

export default CustumInput;