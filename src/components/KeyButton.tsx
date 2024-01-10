import { Text, Box } from "@chakra-ui/react";

interface KeyProp {
  button: string;
  status: "available" | "correct" | "incorrect";
}

const KeyButton = ({ button, status }: KeyProp) => {
  return (
    <Box
      height="60px"
      width="60px"
      boxSize={{ md: "60px", sm: "40px"}}
      borderRadius={10}
      border="1px solid #DDD"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={status === "available" ? "gray.400" : status === "correct" ? "green.500" : "red.400"}
    >
      <Text fontWeight="600" color="#fff" fontSize={{ md: 24, sm: 14}}>
        {button.toUpperCase()}
      </Text>
    </Box>
  );
};

export default KeyButton;
