import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import RigthContent from "./RightContent/RigthContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white">
      <Flex>logo image</Flex>
      <SearchInput />
      <RigthContent user={user} />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
