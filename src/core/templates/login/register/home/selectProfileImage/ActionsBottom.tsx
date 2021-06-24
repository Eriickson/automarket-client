import React, { FC } from "react";
import { ModalFooter, Button } from "@chakra-ui/react";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export const ActionsBottom: FC = () => {
  const { onClose, onReset, onSaveChange } = useSelectProfileImage();

  return (
    <ModalFooter px="4" pt="0">
      <Button
        variant="ghost"
        mr={3}
        onClick={() => {
          onClose();
          setTimeout(() => {
            onReset();
          }, 250);
        }}
      >
        Cancelar
      </Button>
      <Button colorScheme="success" onClick={onSaveChange}>
        Guardar Cambios
      </Button>
    </ModalFooter>
  );
};
