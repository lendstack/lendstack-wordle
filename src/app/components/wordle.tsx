'use client';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WordleTools from './wordle-tools/wordle-tools'
import HowToPlay from './wordle-tools/howToPlay';
import WordleNav from './wordle-tools/wordle-nav';
import GameStats from './wordle-tools/gameStats';


export default function wordle(WordleProps : { word: string }) {

	const [showHowTo, setShowHowTo] = useState<boolean>(true);
	const [showStats, setShowStats] = useState<boolean>(false);

	const { solution, handleInput, history, tries, animate, animateIndex, popUp, keyboard } = WordleTools(WordleProps);
	
	useEffect(() => {
		window.addEventListener('keyup', handleInput);

		return () => {
			window.removeEventListener('keyup', handleInput)
		};
  	}, [handleInput]);

	const handleMouseClick = (e: MouseEvent) => {
		if (
			e.target instanceof Element &&
			e.target.className === 'absolute w-full h-[calc(100%-68px)] min-h-[1032px] flex items-center justify-center bg-[#00000099]'
		) {
			setShowHowTo(false);
		}
	};
	  
	  useEffect(() => {
		document.addEventListener('mousedown', handleMouseClick);
	  
		return () => {
		  document.removeEventListener('mousedown', handleMouseClick);
		};
	  }, []);


  return (
	<div className='w-full'>
		{/* wordle title */}
		<WordleNav
			setShowHowTo={setShowHowTo}
			setShowStats={setShowStats}
			showHowTo={showHowTo}
			showStats={showStats}
		/>
		<div className='min-w-fit'>
			{/* how to play popup */}
			{showHowTo && !showStats && <div className='flex justify-center'>{HowToPlay(setShowHowTo)}</div>}
			{/* game stats popup */}
			{showStats && !showHowTo && <div className='flex justify-center'>{GameStats(setShowStats)}</div>}
			{/* wordle game grid */}
			<div className='w-fit m-auto min-w-fit'>
				<div className='h-[820px] flex flex-row items-center'>
					<div className='grid gap-[5px] w-fit m-auto'>
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
				</div>
				{/* wordle game keyboard */}
				<div className='grid grid-cols-10 gap-[6px] mt-[20px]'>
					{keyboard
					&& keyboard.map((item, index) => (
						<div
							key={index}
							style={{ backgroundColor: item.color }}
							className='w-[43px] h-[58px] mb-[2px] font-bold text-[1.25em] flex justify-center items-center bg-[#818384] rounded'
						>
							{item.key}
						</div>
					))
				}
				</div>
			</div>
		</div>
	</div>
  )
}