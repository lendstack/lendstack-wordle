# lendstack-wordle
Welcome to HixCoder Wordle, a web-based Wordle game built with React!

## Overview

HixCoder Wordle is a fun word-guessing game where players try to guess a hidden word within a limited number of attempts. The game features a clean and intuitive user interface, robust state management, and engaging gameplay.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Approach](#approach)
  
## Installation

To compile and run lendstack-wordle, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd lendstack-wordle`
3. Compile the source code: `npm i && npm run dev`
4. Check the link: `http://localhost:5173/`
5. Or you can check deployed site: [lendstack-wordle](https://lendstack-wordle-hixcoder.vercel.app)
   
## Features
1. Input field for guessing words.
2. Submit button to submit guesses.
3. Display area for previous guesses.
4. Indication of correct letters in correct positions.
5. Indication of correct letters in the wrong positions.
6. Display of remaining attempts.
7. End game state UI upon winning or losing.

## Bonus Features
1. Game information modal with additional details.
2. Use of local storage to persist game data between sessions.

# Approach
## Code Structure
The code is organized in a clean and maintainable structure, with reusable components and efficient state management. Key files include:

1. GamePage.tsx: Main component for the game page.
2. word-utils.ts: Utility functions for words-related operations.
3. GameEnd.tsx and GameInfo.tsx: Components for displaying end of game Modal and game information for show how to play Modal.
    
## Technology Stack

1. React: Chosen for its component-based architecture and efficient state management.
2. TypeScript: To bring type safety and enhance the development experience.
3. CSS: Utilized for styling to maintain a clean and responsive UI.

## State Management

1. Leveraged React's useState hook for managing the game state, including user guesses, game statistics, and the selected word.
2. Used local storage and encryption for persisting game data between sessions.

## User Interface (UI)
1. Designed a clean and intuitive UI with input fields, submission buttons, and a feedback display for guesses.
2. Incorporated modal components for displaying game information and end game states.

## Game Logic
1. Implemented game logic to compare user guesses against the target word.
2. Provided feedback on the correctness of guessed words and tracked remaining attempts.
3. Ended the game when the correct word was guessed or when attempts reached zero.
