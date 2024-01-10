import { IconButton, Divider, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Logo from "./components/Logo";
import History from "./components/History";
import WordInput from "./components/WordInput";
import { Board, BoardContext } from "./contexts/boardContext";
import { getRandomWord } from "./utils/getRandomWord";
import Keyboard from "./components/Keyboard";
import { RiRestartFill } from "react-icons/ri";
import GameResult from "./components/GameResult";

function App() {
  const [board, setBoard] = useState<Board>({ word: "", guesses: [], ongoing: true, gameResult: [] });

  const restartGame = () => {
    // Reset the game state;
    setBoard({
      word: "rider",
      guesses: [],
      ongoing: true,
      gameResult: []
    });
  };

  useEffect(() => {
    setBoard({
      word: "rider",
      guesses: [],
      ongoing: true,
      gameResult: []
    });
  }, []);

  return (
    <>
      <Logo />
      <HStack justifyContent="center">
        <BoardContext.Provider value={{ board, setBoard }}>
          <GameResult onRestartGame={restartGame} />
          <VStack marginTop={2}>
            <History words={board.guesses} />
            <Divider />
            <WordInput
              guesses={board.guesses} onWordInsert={(value) => setBoard({ ...board, guesses: [...board.guesses, value] })}
            />
            <Keyboard />
            <Tooltip label="Restart game" aria-label="A tooltip">
              <IconButton
                onClick={restartGame}
                position="absolute"
                top="5"
                right="5"
                fontSize={35}
                color="teal"
                aria-label="Call Segun"
                boxSize="50px"
                icon={<RiRestartFill />}
              />
            </Tooltip>
          </VStack>
        </BoardContext.Provider>
      </HStack>
    </>
  );
}

export default App;
