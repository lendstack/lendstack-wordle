# Landstack Wordle Game

This project is a web-based implementation of the popular Wordle game. The game is built using React and TypeScript, and utilizes the Context API for state management.

## Approach

The game was developed with a focus on clean, maintainable code. The main game logic is encapsulated within a `WordleContext`, which manages the state of the game, including the current word, guesses, and game result.

The game progress is also saved using the browser's `localStorage` API. This allows players to resume their game from where they left off, even if they close the browser or refresh the page.

The game also uses a `UtilityContext` to manage additional game states such as exact matches, partial matches, and no matches. This context also handles the display of game result notifications using the `Swal.fire` function from the SweetAlert2 library. 

## Decisions Made

1. **Use of Context API**: The Context API was chosen for state management due to its simplicity and ease of use. It allows for easy passing of state and functions between components without prop drilling.

2. **Separation of Concerns**: Functions such as `removeCharacter`, `submitGuess`, and `insertGuess` were kept within the context file as they are specific to this context and share the same dependencies. This decision was made to keep the code DRY (Don't Repeat Yourself) and maintainable.

3. **Use of SweetAlert2 for Notifications**: SweetAlert2 was chosen for displaying game result notifications due to its rich feature set and ease of use. It provides a more engaging user experience compared to standard JavaScript alerts.

## Additional Features

1. **Game Reset**: The game can be easily reset after each round, allowing players to play multiple rounds without refreshing the page.

2. **On-Screen keyboard**: This project includes an on-screen keyboard that allows players to easily input their guesses by clicking on the letters instead of typing them manually.

3. **Fun Notifications**: each time a game is won or lost a notification will pop with a fun GIF on the side that changes with each round.

3. **Saving Game Progress**: The game progress can be saved using the browser's `localStorage` API.



## Future Improvements

1. **Code Refactoring**: As the project grows, the context file may become large and difficult to maintain. The functions could be moved to separate utility files to improve readability and maintainability.

2. **Unit Testing**: Unit tests could be added to ensure the game logic is working as expected and to prevent regressions in future updates.

3. **Additional Game Modes**: More game modes could be added to provide a more varied and challenging experience for players.

3. **LeaderBoard and Game history**: Adding a leaderboard and game history feature would enhance the game experience. Players can compete with each other and track their progress over time. The leaderboard can display the top scores and the game history can show past games and their outcomes.

## Installation

To install and run the game locally, clone the repository and run `npm install` to install the necessary dependencies. Then run `npm run build` to start the development sever.
