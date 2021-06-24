import React, { FC } from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { SettingsIcon, LockIcon, DeleteIcon, SmallCloseIcon } from "@chakra-ui/icons";

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
          <MenuItem icon={<LockIcon />}>Cambiar Contraseña</MenuItem>
          <MenuItem icon={<SmallCloseIcon />}>Desactivar Cuenta</MenuItem>
          <MenuItem icon={<DeleteIcon />}>Eliminar Cuenta</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
