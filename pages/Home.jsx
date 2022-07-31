import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import background from "../assets/background.jpg";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
    >
      <Nav />
      <Landing />
    </Box>
  );
}
