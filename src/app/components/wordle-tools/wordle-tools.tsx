import React, { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import gridArr from '../../../../data/grid.json';
import keyboardArr from '../../../../data/keyboard.json';
import { ToastContainer, toast } from 'react-toastify';

interface KeyColor {
	key: string,
	color: string
}

interface WordleToolsProps {
	word: string
}

enum WORD_STATUS {
	INVALID,
	VALID,
}

export default function wordleTools({ word }: WordleToolsProps) {

	const notify = () => toast.info("Invalid english word!", {autoClose: 1000});
	const notifySuccess = () => toast.success("You Won!", {autoClose: 5000});
	const notifyFalure = () => toast.error("You LOST!", {autoClose: 5000});

	const  [wordsCache, setWordsCache] = useState<{ [key: string]: WORD_STATUS }>({});
	const [history, setHistory] = useState<KeyColor[][]> (gridArr);
	const [solution, setSolution] = useState<string>("");
	const [keyboard, setKeyboard] = useState<KeyColor[]>(keyboardArr);
	const [istrue, setIstrue] = useState<boolean>(false);
	const [tries, setTries] = useState<number>(0);
	const [animate, setAnimate] = useState<boolean>(false);
	const [animateIndex, setAnimateIndex] = useState<number>(0);
	const [popUp, setPopUp] = useState<boolean>(false);

	const craftSolution = (history: KeyColor[][]) => {
		const wordHash = word.split("");

		for (var i = 0;i < solution.length; i++)
		{
			if (wordHash[i] === solution[i])
			{
				history[tries][i] = { key: solution[i], color: "#548d4e" }; // green
				wordHash[i] = "";
			}
			else if (solution[i] !== wordHash[i] && wordHash.includes(solution[i]))
			{
				history[tries][i] = { key: solution[i], color: "#b59f3b" }; // yellow
				wordHash[wordHash.indexOf(solution[i])] = "";
			}
			else
			{
				history[tries][i] = { key: solution[i], color: "#3a3a3c" }; // gray
			}
		}
	}

	function validateSolution() {
		setTries(tries + 1);
		if (solution === word)
		{
			setIstrue(true);
			notifySuccess();
		}
		else if (tries === 5)
		{
			notifyFalure();
		}
		craftSolution(history);
		setSolution("");

		setAnimateIndex(tries);
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 1000);
	}

	const handleInput = async (event: KeyboardEvent) => {
		if (
			istrue === false
			&& tries < 6
			)
		{
			if (
					event.key === "Enter"
					&& solution.length === 5
					&& tries < 6
				)
			{
				try
				{
					if (wordsCache[solution] == WORD_STATUS.INVALID) {
						notify();
						return;
					}

					if (wordsCache[solution] == WORD_STATUS.VALID) {
						validateSolution();
						return;
					}
					
					const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${solution}`)

					if (response.ok)
					{
						wordsCache[solution] = WORD_STATUS.VALID;
						validateSolution();

					}
					else if (response.status === 404)
					{
						wordsCache[solution] = WORD_STATUS.INVALID;
						notify();
					}
					for (let k = 0; k < keyboard.length; k++)
					{
						for (let i = 0; i < history.length; i++)
						{
							const res = history[i].find((item) => item.key === keyboard[k].key)?.color;
							if (res)
								keyboard[k].color = res;
						}
					}
				}
				catch (error)
				{
					console.error(error, "Bad request.");
				}
			}
			else if (event.key === "Backspace")
			{
				setSolution(solution.slice(0, -1));
			}
			else if (event.key.match(/^[A-Za-z]$/))
			{
				if (solution.length < 5)
				{
					setSolution(solution + event.key.toUpperCase());
					setPopUp(true);
					setTimeout(() => {
						setPopUp(false);
					}, 500);
				}
			}
		}
	}

	return { history, solution, keyboard, handleInput, tries, animate, animateIndex, popUp };

};