import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";
import { PinInput, PinInputField, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { checkResult } from "../utils/checkResult";
import { ATTEMPT_NUMBER, WORD_LENGTH } from "../utils/constants";

interface WordInputProps {
  onWordInsert: (word: string) => void;
  guesses: string[];
}

const WordInput = ({ onWordInsert, guesses }: WordInputProps) => {
  const { board, setBoard } = useBoard();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const styles = useStyleConfig("PinInputField", { variant: "secondary" });

  // ! Should change remaining retries from static to dynamic (constant file)
  const insertWord = () => {
    if (guesses.length < ATTEMPT_NUMBER) {
      // validation
      if (/[0-9]/.test(value)) return setError("Word can only contain letters");
      else if (value.length != WORD_LENGTH) return setError("Word is required to have 5 letters");
      else {
        setError("");
        setValue("");
        onWordInsert(value);
        // prettier-ignore
        if (guesses.length === (ATTEMPT_NUMBER - 1) || checkResult([...guesses, value], board.word).length === board.word.length)
          setBoard({
            word: board.word,
            guesses: [...guesses, value],
            ongoing: false,
            gameResult: checkResult([...guesses, value], board.word),
          });
      }
    }
  };

  return (
    <Box marginTop={5}>
      <VStack>
        {error && <Text color="red.400">{error}</Text>}
        <HStack>
          <HStack>
            <PinInput
              isInvalid={error.length > 0}
              value={value}
              type="alphanumeric"
              focusBorderColor="teal.500"
              onChange={(value) => setValue(value.toLocaleUpperCase())}
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
            onClick={() => setValue(value.slice(0, -1))}
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
