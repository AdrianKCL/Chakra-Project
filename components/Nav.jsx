import React from "react";
import { Flex, Image, List, ListItem, Button, Link } from "@chakra-ui/react";
import logo from "../assets/Creative.png";

import { Link as ReactLink } from "react-router-dom";

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
          <List color="white" display="flex" fontSize="20px">
            <ListItem>
              <Link as={ReactLink} to="/">
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
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
                  color="white"
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
                  color="white"
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
                  color="white"
                  _hover={{ bg: "white", color: "black" }}
                  transition="all 0.3s "
                >
                  <i className="fa-brands fa-github"></i> &nbsp;Source
                </Button>
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
}
