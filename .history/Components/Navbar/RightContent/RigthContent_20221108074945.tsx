import { Button, Divider, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React, { use } from "react";
import { auth } from "../../../firebase/clientApp";
import AuthModal from "../../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RigthContentProps = {
  user: any;
};

const RigthContent: React.FC<RigthContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RigthContent;
