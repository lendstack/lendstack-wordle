import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import LetterDisplay from "./LetterDisplay";

import { useBoard } from "../hooks/useBoard";
import { GAME_MESSAGE, LOST_MESSAGE, WIN_MESSAGE } from "../utils/constants";
import { getColors } from "../utils/getColors";

interface GameResultProps {
  onRestartGame: () => void;
}

const GameResult = ({onRestartGame}: GameResultProps) => {
  // prettier-ignore
  const { board: { ongoing, word, gameResult, guesses }, setBoard } = useBoard();

  const cancelRestart = () => {
    setBoard({
        ongoing: true,
        word,
        gameResult,
        guesses
    })
  }

  return (
    <Box>
      <Modal isOpen={!ongoing} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontSize="34px">
            {word.length === gameResult.length ? "Victory 🎉" : "Game over"}
          </ModalHeader>
          <ModalBody>
            <Text fontSize="18" fontWeight="600" textAlign="center">{word.length === gameResult.length ? WIN_MESSAGE : LOST_MESSAGE}</Text>
            <HStack marginY={3}>
              {getColors(word.split(""), gameResult).map((data, index) => (
                <LetterDisplay
                  key={index}
                  letter={data.letter.toUpperCase()}
                  status={data.exists ? "correct" : "normal"}
                />
              ))}
            </HStack>
            <Text color="orange.600" textAlign="center" fontSize="16" fontWeight="600">{GAME_MESSAGE[gameResult.length]}</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={cancelRestart}>Cancel</Button>
            <Button colorScheme="teal" ml={3} onClick={onRestartGame}>
              Restart game
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GameResult;
