import { HStack, Text, VStack } from "@chakra-ui/react";

import LetterDisplay from "./LetterDisplay";
import { useBoard } from "../hooks/useBoard";

interface WordProps {
  display: string;
  active: boolean;
  attempt: number;
}

const Word = ({ active, display, attempt }: WordProps) => {
  const { board } = useBoard();

  const getColor = (letter: string, index: number) => {
    if (board.word[index].toUpperCase() === letter)
      return 'correct';
    else if (board.word.toUpperCase().split('').includes(letter))
      return 'included';
    return 'normal';
  };

  return (
    <VStack>
      <HStack
        border={active ? "5px solid" : "none"}
        borderColor="teal.400"
        borderRadius={12}
      >
        {display.split("").map((letter, index) => (
          <LetterDisplay
            letter={letter}
            key={index}
            status={getColor(letter, index)}
          />
        ))}
      </HStack>
      {active && <Text fontWeight="600" color="teal.400">Remaining attemps: {4 - attempt}</Text>}
    </VStack>
  );
};

export default Word;
