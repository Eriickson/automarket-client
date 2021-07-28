import React, { FC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@chakra-ui/react";
import { TabNewContact } from "./TabNewContact";

export const ModalNewContact: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pri" w="full" onClick={onOpen}>
        Nuevo Contacto
      </Button>
      <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Agrega un nuevo contacto</ModalHeader>
          <ModalBody>
            <TabNewContact onClose={onClose} />
          </ModalBody>
          {/* <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" form="form-new-contact-modal" ml={3} type="submit">
              Guardar
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
