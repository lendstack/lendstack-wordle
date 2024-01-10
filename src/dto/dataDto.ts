export interface DataDTO {
  isGameOver: boolean;

  word: string;
  guesses: string[];
  numAttempts: number;

  played: number;
  numWins: number;
}
