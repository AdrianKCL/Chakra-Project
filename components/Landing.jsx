import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex left="5%" top="25%" position="absolute" textAlign="center">
        <Text as="cite" color="white" fontSize="2xl" maxW="300px">
          "In a marshland amongst the crocodiles, there float beautiful water
          lilies! Even in the Hell, one can find the good and the beauty."
        </Text>
      </Flex>
      <Flex right="5%" position="absolute" flexDirection="column">
        <Text color="white" fontSize="8xl" letterSpacing="8px">
          Creative
        </Text>
        <Text>The Water Lily Is a Star in the Art World</Text>
      </Flex>
    </Flex>
  );
}
