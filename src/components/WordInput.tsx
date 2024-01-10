import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";
import { PinInput, PinInputField, useStyleConfig } from "@chakra-ui/react";
import { useBoard } from "../hooks/useBoard";
import { checkResult } from "../utils/checkResult";
import {
  ATTEMPT_NUMBER,
  ONLY_LETTERS_ALLOWED_MSG,
  WORD_LENGTH,
  LETTERS_REQUIRED_MSG,
} from "../utils/constants";
import { useInput } from "../hooks/useInput";

interface WordInputProps {
  onWordInsert: (word: string) => void;
  guesses: string[];
}

const WordInput = ({ onWordInsert, guesses }: WordInputProps) => {
  const { board, setBoard } = useBoard();
  const { input, setInputField } = useInput();
  const styles = useStyleConfig("PinInputField", { variant: "secondary" });

  const insertWord = () => {
    if (guesses.length < ATTEMPT_NUMBER) {
      // validation
      if (/[0-9]/.test(input.value))
        return setInputField({ ...input, error: ONLY_LETTERS_ALLOWED_MSG });
      else if (input.value.length != WORD_LENGTH)
        return setInputField({ ...input, error: LETTERS_REQUIRED_MSG });
      else {
        setInputField({ value: "", error: "" });
        onWordInsert(input.value);
        // prettier-ignore
        if (guesses.length === (ATTEMPT_NUMBER - 1) || checkResult([...guesses, input.value], board.word).length === board.word.length)
          setBoard({
            word: board.word,
            guesses: [...guesses, input.value],
            ongoing: false,
            gameResult: checkResult([...guesses, input.value], board.word),
          });
      }
    }
  };

  return (
    <Box marginTop={5}>
      <VStack>
        {input.error && <Text color="red.400">{input.error}</Text>}
        <HStack>
          <HStack>
            <PinInput
              isInvalid={input.error.length > 0}
              value={input.value}
              type="alphanumeric"
              focusBorderColor="teal.500"
              onChange={(value) => setInputField({ ...input, value: value.toUpperCase() })}
            >
              <PinInputField sx={styles} />
              <PinInputField sx={styles} />
              <PinInputField sx={styles} />
              <PinInputField sx={styles} />
              <PinInputField sx={styles} />
            </PinInput>
          </HStack>
          <IconButton
            width={90}
            height="60px"
            colorScheme="teal"
            aria-label="Delete"
            fontSize={35}
            onClick={() =>
              setInputField({ ...input, value: input.value.slice(0, -1) })
            }
            icon={<FaDeleteLeft />}
          />
        </HStack>
        <Button
          marginTop={4}
          width={170}
          height="50px"
          colorScheme="teal"
          size="lg"
          fontSize={26}
          onClick={() => insertWord()}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default WordInput;
