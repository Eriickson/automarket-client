import React, { FC } from "react";

import { signOut } from "next-auth/client";
import { Button, HStack, Fade } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";

export const ActionsBottom: FC = () => {
  const { toggleEditing } = useAction();
  const { isEditing } = useSelector(({ profile }) => profile);

  return (
    <HStack justifyContent="space-between">
      <Button colorScheme="danger" variant="ghost" onClick={() => signOut()}>
        Cerrar Sesión
      </Button>
      {isEditing ? (
        <Fade in={true}>
          <HStack>
            <Button variant="outline" onClick={toggleEditing}>
              Cancelar
            </Button>
            <Button colorScheme="success" form="form-edit-profile" type="submit">
              Guardar Cambios
            </Button>
          </HStack>
        </Fade>
      ) : (
        <Fade in={true}>
          <Button colorScheme="orange" onClick={toggleEditing}>
            Editar Perfil
          </Button>
        </Fade>
      )}
    </HStack>
  );
};
