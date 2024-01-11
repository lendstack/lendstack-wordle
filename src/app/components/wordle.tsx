'use client';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WordleTools from './wordle-tools/wordle-tools'

interface WordleProps {
	word: string
}

export default function wordle(WordleProps : { word: string }) {

	const [rows, setRows] = useState<number>(0);
	const [animate, setAnimate] = useState<boolean>(false);
	const { solution, handleInput, history, tries } = WordleTools(WordleProps); 


	const handleKeyUp = (event: KeyboardEvent) => {
		handleInput(event);
		if (event.key === 'Enter') {
			setAnimate(true);
			setTimeout(() => {
				setAnimate(false);
			}, 1000);
		}
	  };
	
	useEffect(() => {
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp)
		};
  	}, [handleKeyUp]);

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
								style={{ backgroundColor: item.color, border: item.color }}
								className={`w-[62px] h-[62px] font-bold text-[2rem] flex justify-center items-center border-solid border-[2px] border-[#3a3a3c]`}
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