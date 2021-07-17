import React, { FC } from "react";

import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IconInfoCircle } from "@tabler/icons";
import { ModalInfoTabs } from "./tabs/ModalInfoTabs";

export const VehicleModalInfo: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Open modal info vehicle"
        colorScheme="info"
        icon={<IconInfoCircle size="1.25rem" />}
        size="sm"
        onClick={onOpen}
      />
      <Modal isCentered size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx="2">
          <ModalHeader>Vendo Honda Civic Recién importado 2020</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalInfoTabs />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Editar
            </Button>
            <Button variant="ghost">Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
