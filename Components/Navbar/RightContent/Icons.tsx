import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFutbol, FaBasketballBall, FaRunning } from "react-icons/fa";
import { GiTennisRacket, GiFrisbee, GiHockey } from "react-icons/gi";
import {} from "react-icons";

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex
          ml={1.5}
          mr={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={FaRunning} />
        </Flex>
      </Flex>
      <></>
    </Flex>
  );
};

export default Icons;
