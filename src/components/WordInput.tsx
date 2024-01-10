import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";
import { PinInput, PinInputField, useStyleConfig } from "@chakra-ui/react";
import { useState } from "react";

interface WordInputProps {
  onAddWord: (word: string) => void;
}

const WordInput = ({ onAddWord }: WordInputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const styles = useStyleConfig("Box", { variant: "secondary" });

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
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default WordInput;
