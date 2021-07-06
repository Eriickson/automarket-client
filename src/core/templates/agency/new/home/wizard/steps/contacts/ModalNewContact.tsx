import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { TabNewContact } from "./TabNewContact";

export const ModalNewContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w="full" onClick={onOpen}>
        Nuevo contacto
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agrega un nuevo contacto</ModalHeader>
          <ModalBody>
            <TabNewContact />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button form="form-new-contact-modal" colorScheme="blue" type="submit" ml={3}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
