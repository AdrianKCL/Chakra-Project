import React from "react";
import { Flex, Image, List, ListItem } from "@chakra-ui/react";
import logo from "../assets/Creative.png";
import { Link } from "@chakra-ui/react";
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
                Home
              </Link>
            </ListItem>

            <ListItem>
              <Link as={ReactLink} to="/flowers">
                Check flowers
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/adrian-kiedrowicz/"
                isExternal
              >
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/AdrianKCL/Chakra-Project"
                isExternal
              >
                <i className="fa-brands fa-github"></i> Source
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
}
