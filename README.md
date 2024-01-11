# Wordle Game

This project is a web-based implementation of the popular Wordle game. The game is built using React and TypeScript, and utilizes the Context API for state management.

## Approach

The game was developed with a focus on clean, maintainable code. The main game logic is encapsulated within a `WordleContext`, which manages the state of the game, including the current word, guesses, and game result.

The game also uses a `UtilityContext` to manage additional game states such as exact matches, partial matches, and no matches. This context also handles the display of game result notifications using the `Swal.fire` function from the SweetAlert2 library.

## Decisions Made

1. **Use of Context API**: The Context API was chosen for state management due to its simplicity and ease of use. It allows for easy passing of state and functions between components without prop drilling.

2. **Separation of Concerns**: Functions such as `removeCharacter`, `submitGuess`, and `insertGuess` were kept within the context file as they are specific to this context and share the same dependencies. This decision was made to keep the code DRY (Don't Repeat Yourself) and maintainable.

3. **Use of SweetAlert2 for Notifications**: SweetAlert2 was chosen for displaying game result notifications due to its rich feature set and ease of use. It provides a more engaging user experience compared to standard JavaScript alerts.

## Additional Features

1. **Game Reset**: The game can be easily reset after each round, allowing players to play multiple rounds without refreshing the page.

2. **Delayed Win Notification**: A delay was added before displaying the win notification to enhance the suspense and excitement of the game.

## Future Improvements

1. **Code Refactoring**: As the project grows, the context file may become large and difficult to maintain. The functions could be moved to separate utility files to improve readability and maintainability.

2. **Unit Testing**: Unit tests could be added to ensure the game logic is working as expected and to prevent regressions in future updates.

3. **Additional Game Modes**: More game modes could be added to provide a more varied and challenging experience for players.

## Installation

To install and run the game locally, clone the repository and run `npm install` to install the necessary dependencies. Then run `npm start` to start the game.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License.