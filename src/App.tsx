import { Box, VStack } from "@chakra-ui/react";
import Logo from "./components/Logo";
import WordInput from "./components/WordInput";

function App() {
  return (
    <>
      <VStack>
        <Logo />
        <WordInput onAddWord={() => {}}/>
      </VStack>
    </>
  );
}

export default App;
