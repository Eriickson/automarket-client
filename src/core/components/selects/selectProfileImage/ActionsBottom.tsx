import React, { FC } from "react";
import { ModalFooter, Button } from "@chakra-ui/react";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export const ActionsBottom: FC = () => {
  const { isLoading, onClose, onReset, onSaveChange } = useSelectProfileImage();

  return (
    <ModalFooter pt="0" px="4">
      <Button
        isDisabled={isLoading}
        mr={3}
        variant="ghost"
        onClick={() => {
          onClose();
          setTimeout(() => {
            onReset();
          }, 250);
        }}
      >
        Cancelar
      </Button>
      <Button colorScheme="success" isLoading={isLoading} loadingText="Guardando" onClick={onSaveChange}>
        Guardar Cambios
      </Button>
    </ModalFooter>
  );
};
