import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import logowhite from "../assets/lilywhite.png";
import logoblack from "../assets/lilyblack.png";
import { ListItem, UnorderedList } from "@chakra-ui/react";

export default function LandingFacts() {
  const logo = useColorModeValue(logoblack, logowhite);
  const bg = useColorModeValue("#f7f3ed", "#2D3748");
  return (
    <Flex pt="24px">
      <Flex
        flexDirection="column"
        maxW="500px"
        m="0 auto"
        alignItems="center"
        mb="100px"
      >
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
          <UnorderedList spacing="1">
            <ListItem>
              Water lilies are found in the Americas, Europe, Asia, Africa and
              Australia.
            </ListItem>
            <ListItem>Water lilies are freshwater plants.</ListItem>
            <ListItem>
              They are native to the temperate and tropical parts of the world.
            </ListItem>
            <ListItem>
              Although most water lily species prefer the still waters of ponds
              and lakes, some can be found growing in slow-flowing rivers and
              creeks.
            </ListItem>
            <ListItem>The Water Lily Is July's Birth Flower.</ListItem>
            <ListItem>The Water Lily Is a Star in the Art World.</ListItem>
            <ListItem>
              They are often grown in aquariums with fish and other aquatic
              animals.
            </ListItem>
            <ListItem>
              Floating on the water surface, water lilies absorb a lot of
              sunlight, which in turn, increases the temperature of the water.
            </ListItem>
            <ListItem>
              When it comes to blooming, the aquatic plants generally flower in
              spring and summer.
            </ListItem>
            <ListItem>
              The stem of a water lily always remains touching the ground and
              provides support to the flower and the leaf.
            </ListItem>
            <ListItem>
              Water lilies have a long history of being used in art, literature,
              and poetry.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
}
