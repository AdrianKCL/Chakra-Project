import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import { Box } from "@chakra-ui/react";
import background from "../assets/background.jpg";

export default function Home() {
  return (
    <Box backgroundImage={background} backgroundPosition="center" h="100vh">
      <Nav />
      <Landing />
    </Box>
  );
}
