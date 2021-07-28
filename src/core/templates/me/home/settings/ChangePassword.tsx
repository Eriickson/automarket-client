import { LockIcon } from "@chakra-ui/icons";
import { MenuItem } from "@chakra-ui/react";
import React, { FC } from "react";

export const ChangePassword: FC = () => {
  return (
    <MenuItem fontWeight="medium" icon={<LockIcon />}>
      Cambiar Contraseña
    </MenuItem>
  );
};
