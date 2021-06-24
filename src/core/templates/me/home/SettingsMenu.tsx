import React from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { SettingsIcon, LockIcon, DeleteIcon, SmallCloseIcon } from "@chakra-ui/icons";

export const SettingsMenu = () => {
  return (
    <>
      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          aria-label="Ajustes del perfil de usuario"
          icon={<SettingsIcon />}
          variant="outline"
          colorScheme="blue"
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
