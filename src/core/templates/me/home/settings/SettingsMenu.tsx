import React, { FC } from "react";

// Packages
import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

// My Components
import { DisableAccount } from "./DisableAccount";
import { DeleteAccount } from "./DeleteAccount";
import { ChangePassword } from "./ChangePassword";

export const SettingsMenu: FC = () => {
  return (
    <>
      <Menu placement="bottom-end">
        <MenuButton
          aria-label="Ajustes del perfil de usuario"
          as={IconButton}
          colorScheme="sec"
          icon={<SettingsIcon />}
          variant="outline"
        />
        <MenuList>
          <ChangePassword />
          <DisableAccount />
          <DeleteAccount />
        </MenuList>
      </Menu>
    </>
  );
};
