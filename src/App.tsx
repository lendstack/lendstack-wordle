import './App.css';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <h1 className='text-3xl font-bold'>The application</h1>
    </ChakraProvider>
  );
}

export default App;
