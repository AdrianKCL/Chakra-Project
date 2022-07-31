import React from "react";
import { Flex, Image, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import logo from "../assets/Creative.png";
import { Link } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex borderBottom="1px" borderColor="white" alignItems="center">
      <Flex
        h={100}
        w="100%"
        p="24px 48px"
        maxW="1200px"
        m="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logo} h="75px"></Image>
        <Flex>
          <List
            textDecoration="none"
            color="white"
            display="flex"
            justifyContent="space-between"
          >
            <ListItem>Home</ListItem>
            <ListItem ml="32px">Check flowers</ListItem>
            <ListItem ml="32px">Contact</ListItem>

            <ListItem ml="32px">
              <i className="fa-brands fa-github"></i> Source
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
}
