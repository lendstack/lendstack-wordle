import { VStack, HStack, Tooltip } from "@chakra-ui/react";
import { KEYBOARD_BUTTONS, KEYBOARD_MESSAGE } from "../utils/constants";
import { useBoard } from "../hooks/useBoard";
import KeyButton from "./KeyButton";

const Keyboard = () => {
  // prettier-ignore
  const { board: { guesses, word } } = useBoard();
  const allCorrectLetters = guesses.map((currentWord) =>
    currentWord.split("").filter((letter) => word.toUpperCase().includes(letter))
  );
  const allWrongLetters = guesses.map((currentWord) =>
    currentWord.split("").filter((letter) => !word.toUpperCase().includes(letter))
  );
  const wrongLetters = [...new Set(allWrongLetters.flat())]
  const correctLetters = [...new Set(allCorrectLetters.flat())];

  const getKeyColor = (key: string) => {
    if (wrongLetters.includes(key.toUpperCase()))
        return 'incorrect';
    else if (correctLetters.includes(key.toUpperCase()))
        return 'correct';
    return 'available'
  }

  return (
    <Tooltip label={KEYBOARD_MESSAGE} fontSize="md">
      <VStack marginTop={5} border="1px solid #ddd" padding={5} borderRadius={10}>
        {KEYBOARD_BUTTONS.map((row, index) => {
          return (
            <HStack key={index}>
              {row.map((key, index) => (
                <KeyButton
                  key={index}
                  button={key}
                  status={getKeyColor(key)}
                />
              ))}
            </HStack>
          );
        })}
      </VStack>
    </Tooltip>
  );
};

export default Keyboard;
