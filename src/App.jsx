import Home from "../pages/Home";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";

function App() {
  return (
    <>
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      ;
    </>
  );
}

export default App;
