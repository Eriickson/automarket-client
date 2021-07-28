import { IconButton, Link as LinkChakra } from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons";
import React, { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { NewSucursalDrawer } from "./NewSucursalDrawer/NewSucursalDrawer";

export const MenuNew: FC = () => {
  return (
    <Menu placement="bottom-end">
      <MenuButton aria-label="Options" as={IconButton} icon={<IconPlus />} />
      <MenuList>
        <NewSucursalDrawer />
        <MenuItem>
          <Link href="/post/vehicle/new">
            <LinkChakra>
              <a>Nuevo Vehículo</a>
            </LinkChakra>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
