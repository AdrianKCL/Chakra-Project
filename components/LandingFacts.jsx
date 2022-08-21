import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import logowhite from "../assets/lilywhite.png";
import logoblack from "../assets/lilyblack.png";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function LandingFacts() {
  const logo = useColorModeValue(logoblack, logowhite);
  const bg = useColorModeValue("#f7f3ed", "#2D3748");
  return (
    <Flex width="100%" pt="24px" h="100vh">
      <Flex flexDirection="column" margin="0 auto" maxW="500px" m="0 auto">
        <Flex w="50%">
          <Image src={logo} w="100%" />
        </Flex>
        <Text
          w="50%"
          textAlign="center"
          background={bg}
          borderRadius="0.5rem"
          p="0.75rem"
          mt="24px"
        >
          Facts about Water Lillies
        </Text>
        <Flex background={bg} mt="24px" borderRadius="0.5rem" p="0.75rem">
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
}
