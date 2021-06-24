import React, { FC } from "react";

import { Button, HStack } from "@chakra-ui/react";

export const ActionsBottom: FC = () => {
  return (
    <HStack justifyContent="space-between">
      <Button colorScheme="red" variant="ghost">
        Cerrar Sesión
      </Button>
      <HStack>
        <Button colorScheme="orange">Editar Perfil</Button>
        <Button colorScheme="red">Cancelar</Button>
        <Button colorScheme="green">Guardar</Button>
      </HStack>
    </HStack>
  );
};
