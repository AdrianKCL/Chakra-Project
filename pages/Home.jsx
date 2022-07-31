import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Nav />
      <Landing />
    </Box>
  );
}
