import React, { FC } from "react";

// Packages
import { Button, HStack, Fade } from "@chakra-ui/react";

// My Elements
import { useAction, useSelector } from "@/store";
import { useUIContext } from "@/context";
import axios from "axios";

export const ActionsBottom: FC = () => {
  const { toggleEditing } = useAction();
  const { isEditing } = useSelector(({ profile }) => profile);
  const { activateLoadingScreen } = useUIContext();

  async function signOut() {
    await axios.post("/api/auth/logout");

    window.location.href = "/";
  }

  return (
    <HStack justifyContent="space-between">
      <Button
        colorScheme="danger"
        variant="ghost"
        onClick={() => {
          activateLoadingScreen("Cerrando sesión");
          signOut();
        }}
      >
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
