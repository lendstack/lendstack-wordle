import { GlobalContextProvider } from "./context/store";
import Game from "./pages/game";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
