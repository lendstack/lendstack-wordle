import { Box, Text } from "@chakra-ui/react";

interface LetterProps {
  letter: string;
  status: "normal" | "correct" | "included";
}

const LetterDisplay = ({ letter, status }: LetterProps) => {
  return (
    <Box
      backgroundColor={
        status === "normal"
          ? "gray.400"
          : status === "correct"
          ? "green.500"
          : "yellow.500"
      }
      height="55px"
      width="55px"
      margin={2}
      borderRadius={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={36} color="white" fontWeight="600">
        {letter}
      </Text>
    </Box>
  );
};

export default LetterDisplay;
