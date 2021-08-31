import { IconButton, MenuGroup, MenuDivider } from "@chakra-ui/react";
import { IconDotsVertical } from "@tabler/icons";
import React, { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { NewSucursalDrawer, EstablishAsHeadquarters, EditBranchInformation, ChangeBranch } from "./groups";
import styled from "@emotion/styled";
import { NewPost } from "./groups/posts/NewPost/NewPost";
import { EditAgencyInformation } from "./groups/agency/EditAgencyInformation/EditAgencyInformation";

const WraperMenuNewStyled = styled.div`
  p {
    margin-bottom: 0;
  }
`;

export const MenuNew: FC = () => {
  return (
    <WraperMenuNewStyled>
      <Menu placement="bottom-end">
        <MenuButton as={IconButton} colorScheme="pri">
          <IconDotsVertical />
        </MenuButton>
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
