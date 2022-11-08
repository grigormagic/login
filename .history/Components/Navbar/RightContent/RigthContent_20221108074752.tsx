import { Divider, Flex } from "@chakra-ui/react";
import React, { use } from "react";
import AuthModal from "../../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RigthContentProps = {
  user: any;
};

const RigthContent: React.FC<RigthContentProps> = ({user}) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? Divider}
        {user ? <div>This is a user</div> : }
      </Flex>
    </>
  );
};
export default RigthContent;
