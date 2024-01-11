# lendstack-wordle

## Game logic
**Wordle** is a famous game where the user should guess the word in 6 tries or less.
* Each guess must be a valid 5-letter word.
* The color of the tiles will change to show how close your guess was to the word.
* ***Examples:***
    * If the letter in <span style="color: #E3651D; font-weight: bold">orange</span>, then it is in the word and in the correct spot.
    * If the letter in **black**, then it is in the word but in the wrong spot.
    * If the letter in <span style="color: #A9A9A9; font-weight: bold">grey</span>, then it is not in the word  in any spot.

## Approach
***This app built using React***<br>
The app starts by generating a random word of 5 letters using a [third party API](https://random-word-api.herokuapp.com/). Then we start listening on the keyup event so we can store the the guessed word in *currentGuess* state.<br>
After the user clicks **Enter** we first check the existence of the guessed word using [this API](https://dictionaryapi.dev/) if this word exist and not previously guessed and the user still has enough turns then we format this word as objects of `{letter, color}` while *letter* represents each letter of this word and *color* respresent the color of each letter based on the status of your guess as described in [Game logic](#game-logic) section, and store the formatted word in *guesses* state then we loop through guesses to display words.


## Usage
You can Run this app using the following steps:<br>
1. First you need to clone the project in your local machine:<br>
`git clone git@github.com:het-tale/lendstack-wordle.git`
2. Go to the app Directory:<br>
`cd [Directory-Name]`
3. Install dependencies:<br>
`npm install`
4. Run the applicatiom:<br>
`npm run start`

## Demo
