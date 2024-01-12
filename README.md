# Ahammam-wordle

## About

Wordle is a popular online word game where players have a limited number of attempts to guess a secret word, with feedback provided for each guess in the form of colored tiles indicating correct and incorrect letters and positions.

## Installation

Follow these steps to run the app on your local machine:

1. **Clone the Project**:

```
git clone https://github.com/ahammamlho/Lendstack-Wordle ahammam-wordle
```

2. **Navigate to the App Directory**:

```
cd lendstack-wordle
```

3. **Configure Environment Variables**:
   <br>
   Create a `.env` file in the root of your project and add environment variables.
   like this:

```
# https://rapidapi.com/dpventures/api/wordsapi
VITE_API_KEY=
VITE_API_HOST=

# https://supabase.com/
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# crypto-js random key
VITE_CRYPTO_KEY=

```

3. **Install Dependencies**:

```
npm install
```

5. **Run the Application**:

```
npm run dev
```

Open http://localhost:5173 with your browser to see the result.
<br>
Or you can check deployed site: [ahammam-wordle](https://lendstack-wordle-gar6u103r-ahammamlhos-projects.vercel.app/)

## Technologies:

- ReactJS
- TypeScript
- Tailwind CSS
- Supabase

## Features Implemented

This Wordle game project includes several key features:

- **User Authentication**: Users can log in to their accounts.
- **Leaderboard**: Ranks users based on their game performance.
- **Grid Customization**: Offers 5x6, 5x5, and 5x4 grid options for varied challenges.
- **Tutorial Alert**: Provides a guide on how to play the game.
- **Persistent Attempts**: Saves game progress, even when the page is refreshed.

## approach

- **React Router**: Utilizes react-router-dom for efficient navigation throughout the application.
- **State Management**: Implements state management using the useContext API and useState hook for responsive UI updates.
- **Supabase Authentication**: Integrates Google Sign-In option for user authentication,
- **Local Storage**: Utilizes browser's local storage to persistently save user data such as number of attempts, games played, and wins.
- **Data Encryption**: Enhances data security by using crypto-js to encrypt data stored in local storage.
- [**Word API**](https://rapidapi.com/dpventures/api/wordsapi/): Incorporates a third-party API for generating random words and validating user guesses

## Screenshot

- Home Page
  ![Welcome](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/pageHome.png?raw=true)

- How to play Alert
  ![TutoAlert](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/AlertTuto.png?raw=true)

- Game Page
  ![game](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/gamePage.png?raw=true)

- Leaderboard Page
  ![Leaderboard](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/leaderboardPage.png?raw=true)

- Statistics Alert
  ![Statistics](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/AlertStatisticsWin.png?raw=true)

- Statistics Alert
  ![Statistics](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/AlertStatisticsLose.png?raw=true)

- Settings Alert
  ![Settings](https://github.com/ahammamlho/Lendstack-Wordle/blob/worlde-ahammam/screen-shot/AlertSettings.png?raw=true)
