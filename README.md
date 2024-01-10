# LENDSTACK WORDLE

## About

Wordle is a popular word puzzle game that challenges players to guess a secret five-letter word within a limited number of attempts. 

## Installation

- Make sure to have `Node.js` and `npm` already installed in your computer, otherwise you can check this [`link`](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) to explain how to install them. And please make sure to install typescript globally, to run typescript code as well, with the following command: `npm install -g typescript`.

- Now, you can start by cloning the repository with the following command: 
```git clone git@github.com:dependentmadani/lendstack-wordle.git -b wordle-madani```

- After that, you can enter the folder with `cd lendstack-wordle`. And run the following command to install all necessary modules to run the application `npm install` or simply `npm i`

- Finally, you can run and start the application with `npm run dev`. A local url will be prompt to you in the terminal to access it. Have fun ✅.

## Approach and Decisions

- The application follows a simple yet effective component-based architecture. React's component structure made it easy to break down the application into manageable and reusable parts, enhancing maintainability. I also used a very simple state management using state hooks, and global variables, to check keep in track with the user guesses and keep track of the remaining guesses.

- I started with defining the UI of the game, where it has been decided to be almost identical to the original one. Then, started with definning the possible components that will allow to build a clean web application.

- Then, it has been decided to work with Tailwind and MUI, as it will minimize for me the work on CSS. As Tailwind contains latest and greatest CSS features, and MUI has different UI tools to help use new features at ease.

- Since we are not working with database, I used an array of string containing multiple words in `words.ts` file inside `src` folder.

- First, the web application is splitted on two, `navbar` and `game` components.

- The `navbar` component will give the user the ability to interact with the web application by checking of how to play the wordle game, with the help MUI components. As well as, the dark mode ability, which will help the user with resting his eyes from the flashed white screen.

- The `game` component is where the game logic is. It starts with picking a random word from the array of words. The complete `table` is a set of different `square` components, where each five alphabetic character entered from the user will set on each square. Making a function to check if the word does contain five letter after hitting the key enter or clicking on enter button, with the help of window event listener and onClick parameter of button element. Otherwise, an error will be prompts if there are missing characters or the word being not available in the array, with the help of `error` component.

- A result of the user attempts will be prompt if the user win or lose with the help of `result` components. 

## Additional features

- <b>Dark mode</b>: A small color switcher from almost white to almost black color, with switching all other colors to make life easier for user eyes 😅.

- <b>How to play pop up</b>: just in case someone never played this game, he can find the help withing the navbar 😂.
