export interface DataDTO {
  isGameOver: boolean;

  gridType: number;
  randomWord: string;
  guesses: string[];
  numAttempts: number;

  played: number;
  numWins: number;
}
