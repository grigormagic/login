import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RigthContentProps = {};

const RigthContent: React.FC<RigthContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RigthContent;
