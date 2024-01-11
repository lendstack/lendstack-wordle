import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div className=' w-80 bg-indigo-500 rounded-md text-white mx-auto p-6 mt-60'>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
        </div>
      )}
      {!isCorrect && (
        <div className=' w-80 bg-rose-500 rounded-md text-white mx-auto p-6 mt-60'>
          <h1>You Lose</h1>
          <p className=" text-green-500 text-xl">{solution}</p>
        </div>
      )}
    </div>
  )
}
