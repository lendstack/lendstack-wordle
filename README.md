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
   Create a `.env` file in the root of your project and add environment variables.
   like this:

```
# https://rapidapi.com/dpventures/api/wordsapi/pricing
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

## Technologies:

- ReactJS
- TypeScript
- Tailwind CSS
- Supabase

## Features Implemented

This Wordle game project includes several key features:

- **Login**: Users can log in to their accounts.
- **Leaderboard**: Ranks users based on their game performance.
- **Grid Customization**: Offers 5x6, 5x5, and 5x4 grid options for varied challenges.
- **Tutorial Alert**: Provides a guide on how to play the game.
- **Persistent Attempts**: Saves game progress, even when the page is refreshed.
