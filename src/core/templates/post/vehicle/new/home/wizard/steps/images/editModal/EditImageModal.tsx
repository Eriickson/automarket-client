import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CropImage } from "./CropImage";

export const EditImageModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton onClick={onOpen} aria-label="" colorScheme="pri" icon={<IconEdit size="1.25rem" />} size="sm" />
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CropImage />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
