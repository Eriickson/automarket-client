import React, { FC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { CropImage } from "./CropImage";
import { ActionsBottom } from "./ActionsBottom";
import { useSelectProfileImage } from "./SelectProfileImageContext";
import { EditControllers } from "./EditControllers";
import { useEffect } from "react";
import { onChangeArgsPropType } from "./SelectProfileImage";

interface TransformImageModalProps {
  onChange(newFile: onChangeArgsPropType): void;
}

export const TransformImageModal: FC<TransformImageModalProps> = ({ onChange }) => {
  const { isOpen, onClose, fileSelected, croppedAreaPixels, rotation } = useSelectProfileImage();

  useEffect(() => {
    if (fileSelected.file) onChange({ file: fileSelected.file, src: fileSelected.src, croppedAreaPixels, rotation });
  }, [fileSelected]);

  return (
    <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" size="xl" onClose={onClose}>
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
