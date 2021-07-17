import React, { FC } from "react";

import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ViewImageCarousel } from "./ViewImageCarousel";

export const ViewImageModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button colorScheme="yellow" onClick={onOpen}>
        Visualizar
      </Button>
      <Modal isCentered isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ViewImageCarousel />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
