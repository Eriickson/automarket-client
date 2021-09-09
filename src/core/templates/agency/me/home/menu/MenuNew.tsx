import React, { FC } from "react";

// Packages
import { Menu, MenuButton, MenuList, IconButton, MenuGroup, MenuDivider } from "@chakra-ui/react";
import { IconDotsVertical } from "@tabler/icons";

// My Elements
import styled from "@emotion/styled";

// My Components
import { NewSucursalDrawer, EstablishAsHeadquarters, EditBranchInformation, ChangeBranch } from "./groups";
import { EditAgencyInformation } from "./groups/agency/EditAgencyInformation/EditAgencyInformation";
import { NewPost } from "./groups/posts/NewPost/NewPost";

const WraperMenuNewStyled = styled.div`
  p {
    margin-bottom: 0;
  }
`;

export const MenuNew: FC = () => {
  return (
    <WraperMenuNewStyled>
      <Menu placement="bottom-end">
        <MenuButton
          aria-label="Options"
          as={IconButton}
          colorScheme="pri"
          icon={<IconDotsVertical size="1.5rem" />}
          size="sm"
          variant="outline"
        />
        <MenuList borderTop="2px solid" borderTopColor="pri.500" pt="0" rounded="sm">
          <MenuGroup title="Agencia">
            <EditAgencyInformation />
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Sucursales">
            <NewSucursalDrawer />
            <EstablishAsHeadquarters />
            <ChangeBranch />
            <EditBranchInformation />
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Publicaciones">
            <NewPost />
          </MenuGroup>
        </MenuList>
      </Menu>
    </WraperMenuNewStyled>
  );
};
