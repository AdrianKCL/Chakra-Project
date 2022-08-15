import React from "react";
import NavFacts from "../components/NavFacts";
import { Box } from "@chakra-ui/react";
import LandingFacts from "../components/LandingFacts";
import { useColorModeValue } from "@chakra-ui/react";

export default function Facts() {
  const bg = useColorModeValue("#f0e7db", "gray-800");
  return (
    <Box height="100vh" background={bg} transition="300ms all ease">
      <NavFacts />
      <LandingFacts />
    </Box>
  );
}
