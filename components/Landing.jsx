import React from "react";
import { Box, Text, Flex, Button, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export default function Landing() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex left="5%" top="30%" position="absolute" textAlign="center">
        <Text as="cite" color="white" fontSize="2xl" maxW="300px">
          "In a marshland amongst the crocodiles, there float beautiful water
          lilies! Even in the Hell, one can find the good and the beauty."
        </Text>
      </Flex>
      <Flex
        right="5%"
        position="absolute"
        flexDirection="column"
        alignItems="center"
        top="25%"
      >
        <Text color="white" fontSize="8xl" letterSpacing="8px">
          Creative
        </Text>
        <Text color="white" fontSize="18px">
          The Water Lily Is a Star in the Art World
        </Text>
        <Link as={ReactLink} to="/facts">
          <Button
            size="lg"
            variant="outline"
            color="white"
            mt="5"
            _hover={{ bg: "white", color: "black" }}
            transition="all 0.3s "
          >
            Learn More
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
