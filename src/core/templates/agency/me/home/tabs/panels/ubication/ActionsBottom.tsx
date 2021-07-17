import React, { FC } from "react";

import { Button, HStack, Fade } from "@chakra-ui/react";

import { useAction, useSelector } from "@/store";

export const ActionsBottom: FC = () => {
  const { toggleMyAgencyUbicationEdit } = useAction();
  const { isEditing } = useSelector(({ meAgency }) => meAgency.tabs.ubication);

  return (
    <HStack justifyContent="flex-end">
      {isEditing ? (
        <Fade in={true}>
          <HStack>
            <Button colorScheme="danger" type="reset" onClick={toggleMyAgencyUbicationEdit}>
              Cancelar
            </Button>
            <Button colorScheme="success" form="me-agency-ubication-edit-form" type="submit">
              Guardar
            </Button>
          </HStack>
        </Fade>
      ) : (
        <Fade in={true}>
          <Button colorScheme="orange" onClick={toggleMyAgencyUbicationEdit}>
            Editar Ubicación
          </Button>
        </Fade>
      )}
    </HStack>
  );
};
