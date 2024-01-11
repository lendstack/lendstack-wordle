

# Wordle Quest

Wordle Quest is a clone of the popular word-guessing game. It challenges players to guess a hidden word within six attempts, with feedback provided for each guess in the form of color changes to the letter tiles.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have [Node.js](https://nodejs.org/en/) installed on your system. This project was built using Node.js version `18.18.1`.

### Installing

1. Clone the repository to your local machine using `git clone`:

```bash
git clone git@github.com:slahrach/lendstack-wordle.git wordle-quest 
```
1. Navigate to the project directory:
```bash
cd wordle-quest
```
1. Install the required dependencies:
```bash
npm install
```
1. Start the development server:
```bash
npm start
```
The application will be available at http://localhost:3000/ in your web browser.

## Features and Development Approach
Wordle Quest offers an interactive and engaging word-guessing game experience, designed with user accessibility and application performance in mind. Here's an overview of the features and the development approach that shaped them:

- Dynamic Word Generation: Utilizing the faker library, a new five-letter word is generated at the start of each game, ensuring a unique challenge every time.
- Real-Time Word Validation: Incorporating Zod for structured input validation and the Dictionary API for verifying real English words, the game ensures that all guesses are legitimate.
- Interactive Feedback System: The application provides immediate visual feedback for each guess; letters are color-coded-green for correct placement, yellow for a correct letter in the wrong spot, and black for incorrect guesses.
- Attempts Tracking: The game's UI includes a dynamic display of remaining attempts, with the color transitioning from black to red as the player's opportunities decrease, adding to the game's excitement and challenge.
- Robust State Management: React's state management is adeptly used to track game status, attempts, and user input, ensuring responsive and consistent gameplay.
- Conditional Rendering: Elements are rendered based on the game state, allowing the interface to present context-sensitive components such end-of-game messages.
- Performance Optimization: By minimizing re-renders and optimizing state updates, the game maintains high performance even on low-powered devices.
- Maintainability and Scalability: Clean, documented code practices make it easy to update and extend the game, ensuring Wordle Quest can grow and improve over time.

