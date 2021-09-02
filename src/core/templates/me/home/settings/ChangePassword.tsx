import { MenuItem, Box } from "@chakra-ui/react";
import { IconKey } from "@tabler/icons";
import React, { FC } from "react";

export const ChangePassword: FC = () => {
  return (
    <MenuItem>
      <Box
        alignItems="center"
        bgColor="pri.100"
        color="pri.500"
        display="flex"
        h="6"
        justifyContent="center"
        mr="1.5"
        w="6"
      >
        <IconKey size="1.25rem" strokeWidth={1.5} />
      </Box>
      Cambiar Contraseña
    </MenuItem>
  );
};
