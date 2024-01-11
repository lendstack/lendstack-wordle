import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface KeyColor {
	key: string,
	color: string
}

interface WordleToolsProps {
	word: string
}

export default function wordleTools({ word }: WordleToolsProps) {

	const [history, setHistory] = useState<KeyColor[][]> // i only wrote the grid this way cause i know it's static
		(
			[
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				],
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				],
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				],
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				],
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				],
				[
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""},
					{key: "", color: ""}
				]
			]
		);
	const [solution, setSolution] = useState<string>("");
	const [keyboard, setKeyboard] = useState<KeyColor[]>([]);
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
					const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${solution}`)

					if (response.ok)
					{
						setTries(tries + 1);
						if (solution === word)
							setIstrue(true);
						craftSolution(history);
						setSolution("");

						setAnimateIndex(tries);
						setAnimate(true);
						setTimeout(() => {
							setAnimate(false);
						}, 1000);
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