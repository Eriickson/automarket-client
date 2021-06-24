import React, { FC } from "react";
import { ModalFooter, Button } from "@chakra-ui/react";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export const ActionsBottom: FC = () => {
  const { onClose, onSaveChange } = useSelectProfileImage();

  return (
    <ModalFooter px="4" pt="0">
      <Button variant="ghost" mr={3} onClick={onClose}>
        Cancelar
      </Button>
      <Button colorScheme="success" onClick={onSaveChange}>
        Guardar Cambios
      </Button>
    </ModalFooter>
  );
};
