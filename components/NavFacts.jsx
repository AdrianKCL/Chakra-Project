import React from "react";
import {
  Flex,
  Image,
  List,
  ListItem,
  Button,
  Link,
  color,
} from "@chakra-ui/react";
import logoblack from "../assets/CreativeBlack.png";
import logowhite from "../assets/Creative.png";
import { Link as ReactLink } from "react-router-dom";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function NavFacts() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#f7f3ed", "gray-800");
  const logo = useColorModeValue(logoblack, logowhite);
  const hover = useColorModeValue("purple.700", "orange.300");
  return (
    <Flex alignItems="center" background={bg}>
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
            color="gray-800"
            display="flex"
            fontSize="20px"
            alignItems="center"
          >
            <ListItem>
              <Link as={ReactLink} to="/">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="gray-800"
                  _hover={{ bg: "white", color: "black" }}
                  transition="all 0.3s "
                >
                  Home
                </Button>
              </Link>
            </ListItem>

            <ListItem pl="16px">
              <Link as={ReactLink} to="/facts">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="gray-800"
                  _hover={{ bg: "white", color: "black" }}
                  transition="all 0.3s "
                >
                  Check facts
                </Button>
              </Link>
            </ListItem>

            <ListItem pl="16px">
              <Link
                href="https://www.linkedin.com/in/adrian-kiedrowicz/"
                isExternal
              >
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="gray-800"
                  _hover={{ bg: "white", color: "black" }}
                  transition="all 0.3s "
                >
                  <i className="fa-brands fa-linkedin"></i>&nbsp;Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem pl="16px">
              <Link
                href="https://github.com/AdrianKCL/Chakra-Project"
                isExternal
              >
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="gray-800"
                  _hover={{ bg: "white", color: "black" }}
                  transition="all 0.3s "
                >
                  <i className="fa-brands fa-github"></i> &nbsp;Source
                </Button>
              </Link>
            </ListItem>
            <ListItem pl="16px">
              <Button
                onClick={toggleColorMode}
                background={colorMode === "light" ? "purple.500" : "orange.200"}
                color={colorMode === "light" ? "white" : "black"}
                transition="all 300ms ease"
                _hover={{
                  bg: hover,
                }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
}
