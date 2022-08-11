import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Facts from "../pages/Facts";
import "./index.css";

function App() {
  return (
    <Box h="100vh" overflow="hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>
      </Router>
      ;
    </Box>
  );
}

export default App;
