import Home from "../pages/Home";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import { Box } from "@chakra-ui/react";
import background from "../assets/background.jpg";
import Flowers from "../pages/Flowers";
import "./index.css";

function App() {
  return (
    <Box backgroundImage={background} backgroundPosition="center" h="100vh">
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<Flowers />} />
        </Routes>
      </Router>
      ;
    </Box>
  );
}

export default App;
