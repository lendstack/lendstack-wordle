import React from 'react'

export default function Rules() {
  return (
    <div className='flex flex-col py-2 gap-4'>
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
                  <p>. If the character isn’t part of the word it will be painted in <span className='text-red-600'> RED</span>.</p>
                </li>
              </ol>
            </div>
  )
}
