import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import logowhite from "../assets/lilywhite.png";
import logoblack from "../assets/lilyblack.png";

export default function LandingFacts() {
  const logo = useColorModeValue(logoblack, logowhite);
  return (
    <Flex width="100%" pt="24px">
      <Flex maxW="500px" m="0 auto">
        <Flex flexDirection="column">
          <Flex w="250px">
            <Image src={logo} />
          </Flex>
          <Text textAlign="center">Facts about Water Lilies</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
