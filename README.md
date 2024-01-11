
## Game Objective

The goal is to correctly guess a randomly generated five-character word within six tries.

## How to Play

- Navigate to the Home page to start the game.
- You will be taken to the Game page where a word is generated and stored.
- Enter your guess and submit.
- The guess must be a valid five-character word from the English dictionary.
- You have six attempts to guess correctly.

## Game Over Conditions

The game ends when:

- The correct word is guessed (win state), or
- The user runs out of tries (lose state).

## Project Structure

This project consists of two main pages:

- **Home Page**: The starting point of the game.
- **Game Page**: Where the gameplay occurs.

The app's state is managed using easy-peasy, which stores the random word, the win/lose boolean flags, and the number of attempts remaining.

## Validations

Each guess is subjected to the following checks:

- Must be exactly five characters long.
- Must be a valid word in the English dictionary.

## Winning and Losing

- Upon a correct guess, the win state is set to `true`.
- If the user fails to guess the word after six attempts, the lose state is set to `true`.

## Running the Game

To run the game locally, use:
    - npm i .
    - npm run start .