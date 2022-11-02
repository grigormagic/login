import { Flex } from "@chakra-ui/react";
import React from "react";
import RigthContent from "./RightContent/RigthContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white">
      <Flex>logo image</Flex>
      <SearchInput />
      <RigthContent />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
