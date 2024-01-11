'use client';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WordleTools from './wordle-tools/wordle-tools'

export default function wordle(WordleProps : { word: string }) {

	const { solution, handleInput, history, tries, animate, animateIndex, popUp } = WordleTools(WordleProps);
	
	useEffect(() => {
		window.addEventListener('keyup', handleInput);

		return () => {
			window.removeEventListener('keyup', handleInput)
		};
  	}, [handleInput]);

  return (
	<div className='grid gap-[5px]'>
		{
			history.length > 0
			&& history.map((innerArr, outerIndex) => (
				<div key={outerIndex} className='grid grid-cols-5 gap-[5px]'>
					{
						innerArr.map((item, innerIndex) => (
							<div
								key={innerIndex}
								
								style={{ backgroundColor: item.color, border: item.color /* , animationDelay: `${innerIndex * 0.1}s`*/ }} // animation Delay
								className={`w-[62px] h-[62px] font-bold text-[2rem] flex justify-center items-center border-solid border-[2px] border-[#3a3a3c]
									${animateIndex === outerIndex && animate ? 'roller' : ''}
									${tries === outerIndex && innerIndex === solution.length - 1 && popUp ? 'popper' : ''}
								`}
							>
								{ tries === outerIndex && solution[innerIndex] }
								{item.key}
							</div>
						))
					}
				</div>
			))
		}

	</div>
  )
}