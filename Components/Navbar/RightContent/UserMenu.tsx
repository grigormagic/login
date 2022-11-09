import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import {
  MdAccountCircle,
  MdNoAccounts,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModal";
import { auth } from "../../../firebase/clientApp";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        cursor="ponter"
        padding="0px 6px "
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  fontSize={26}
                  as={MdAccountCircle}
                  mr={1}
                  color="gray.200"
                />
                <Box
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.displayName || user?.email?.split("@")[0]}
                  </Text>
                </Box>
              </>
            ) : (
              <Icon as={MdNoAccounts} mr={1} fontSize={26} color="gray.200" />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontWeight={500}
              fontSize="10pt"
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center">
                <Icon as={MdOutlineManageAccounts} fontSize={20} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontWeight={500}
              fontSize="10pt"
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center">
                {/* <Icon as={MdOutlineManageAccounts} fontSize={20} /> */}
                Sell
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontWeight={500}
              fontSize="10pt"
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center" onClick={() => signOut(auth)}>
                <Icon as={RiLogoutBoxRLine} fontSize={20} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <MenuItem
            fontWeight={500}
            fontSize="10pt"
            _hover={{ bg: "blue.500", color: "white" }}
          >
            <Flex
              align="center"
              onClick={() =>
                setAuthModalState({
                  open: true,
                  view: "login",
                })
              }
            >
              <Icon as={RiLogoutBoxRLine} fontSize={20} />
              Log In / Sign Up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
