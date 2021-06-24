import React, { FC } from "react";

import { Button, HStack } from "@chakra-ui/react";

export const ActionsBottom: FC = () => {
  return (
    <HStack justifyContent="space-between">
      <Button colorScheme="danger" variant="ghost">
        Cerrar Sesión
      </Button>
      <HStack>
        <Button colorScheme="orange">Editar Perfil</Button>
        <Button colorScheme="danger">Cancelar</Button>
        <Button colorScheme="success">Guardar</Button>
      </HStack>
    </HStack>
  );
};
