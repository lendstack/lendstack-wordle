import { IconButton, Divider, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

import Logo from "./components/Logo";
import History from "./components/History";
import WordInput from "./components/WordInput";
import { Board, BoardContext } from "./contexts/boardContext";
import { getRandomWord } from "./utils/getRandomWord";
import Keyboard from "./components/Keyboard";
import { RiRestartFill } from "react-icons/ri";
import GameResult from "./components/GameResult";
import { InputContext, InputField } from "./contexts/inputContext";

function App() {
  const [input, setInputField] = useState<InputField>({ value: "", error: "" });
  const [board, setBoard] = useState<Board>({
    word: getRandomWord(),
    guesses: [],
    ongoing: true,
    gameResult: [],
  });

  const restartGame = () => {
    setInputField({
      error: "",
      value: "",
    });
    setBoard({
      word: getRandomWord(),
      guesses: [],
      ongoing: true,
      gameResult: [],
    });
  };

  return (
    <>
      <Logo />
      <HStack justifyContent="center">
        <BoardContext.Provider value={{ board, setBoard }}>
          <InputContext.Provider value={{ input, setInputField }}>
            <GameResult onRestartGame={restartGame} />
            <VStack marginTop={2}>
              <History words={board.guesses} />
              <Divider />
              <WordInput
                guesses={board.guesses}
                onWordInsert={(value) =>
                  setBoard({ ...board, guesses: [...board.guesses, value] })
                }
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
          </InputContext.Provider>
        </BoardContext.Provider>
      </HStack>
    </>
  );
}

export default App;
