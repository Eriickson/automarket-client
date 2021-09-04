import React, { FC } from "react";

// Packages
import { IconButton, Menu, MenuButton, MenuList, MenuGroup } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

// My Components
import { DisableAccount } from "../DisableAccount";
import { DeleteAccount } from "../DeleteAccount";
import { ChangePassword } from "../changeUserPassword/ChangeUserPassword";
import styled from "@emotion/styled";
import { IconDotsVertical } from "@tabler/icons";

const WraperMenuNewStyled = styled.div`
  p {
    margin-bottom: 0;
  }
`;

export const SettingsMenu: FC = () => {
  return (
    <WraperMenuNewStyled>
      <Menu placement="bottom-end">
        <MenuButton
          aria-label="Ajustes del perfil de usuario"
          as={IconButton}
          colorScheme="pri"
          icon={<IconDotsVertical size="1.5rem" />}
          size="sm"
          variant="outline"
        />
        <MenuList borderTop="2px solid" borderTopColor="pri.500" pt="0" rounded="sm">
          <MenuGroup title="Cuenta">
            <ChangePassword />
            <DisableAccount />
            <DeleteAccount />
          </MenuGroup>
        </MenuList>
      </Menu>
    </WraperMenuNewStyled>
  );
};
