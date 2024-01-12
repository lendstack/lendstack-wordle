export interface DataDTO {
  isAuthenticated: boolean;
  isGameOver: boolean;

  gridType: number;

  randomWord: string;
  definition: string;

  guesses: string[];
  numAttempts: number;

  played: number;
  numWins: number;
}

export interface DataScoreDTO {
  id: string;

  user_id: string;
  name: string;
  user_avatar: string;

  played: number;
  numWins: number;

  created_at: string;
}
