import React, { FC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { CropImage } from "./CropImage";
import { ActionsBottom } from "./ActionsBottom";
import { useSelectProfileImage } from "./SelectProfileImageContext";
import { EditControllers } from "./EditControllers";

interface TransformImageModalProps {}

export const TransformImageModal: FC<TransformImageModalProps> = () => {
  const { isOpen, onClose } = useSelectProfileImage();

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent mx="1" rounded="sm">
        <ModalBody p="4">
          <CropImage />
          <EditControllers />
        </ModalBody>
        <ActionsBottom />
      </ModalContent>
    </Modal>
  );
};
