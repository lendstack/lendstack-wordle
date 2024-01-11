import React from 'react'

export default function GameRules({handleClick}) {
  return (
    <div className='flex flex-col items-center gap-2 bg-[#1A1A1A] border border-black rounded-[16px] mt-10 text-white p-6'>
    <div className='flex flex-row gap-4'>
      <div>
        <h3>How To Play</h3>
      </div>
      <div className='self-end'>
        <button onClick={()=> handleClick(false)} className='border border-white px-1 rounded-full'>X</button>
      </div>
    </div>
    <div>
      <ol>
        <li>
          <p>. The word that you have to guess Contains 5 characters</p>
        </li>
        <li>
          <p>. You have 6 tries to guess the word.</p>
        </li>
        <li>
          <p>. ON each guess you make you will get the following  :</p>
        </li>
        <li>
          <p>. If the character is in the right place it will be painted in<span className='text-green-600'> GREEN</span>.</p>
        </li>
        <li>
          <p>. If the character is in the WRONG place it will be painted in <span className='text-yellow-600'> YELLOW</span>.</p>
        </li>
        <li>
          <p>. If the character is not part of the word it will be painted in <span className='text-red-600'> RED</span>.</p>
        </li>
      </ol>
  </div>
  </div>
  )
}
