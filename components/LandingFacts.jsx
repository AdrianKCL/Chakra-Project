import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import logowhite from "../assets/lilywhite.png";
import logoblack from "../assets/lilyblack.png";

export default function LandingFacts() {
  const logo = useColorModeValue(logoblack, logowhite);
  const bg = useColorModeValue("#f7f3ed", "#2D3748");
  return (
    <Flex width="100%" pt="24px" h="100vh">
      <Flex maxW="500px" m="0 auto">
        <Flex flexDirection="column">
          <Flex w="250px">
            <Image src={logo} />
          </Flex>
          <Text
            textAlign="center"
            background={bg}
            borderRadius="0.5rem"
            p="0.75rem"
            mt="24px"
          >
            Facts about Water Lilies
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
