import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { CropImage } from "@/components";

interface EditImageModalProps {
  src: string;
}

export const EditImageModal: FC<EditImageModalProps> = ({ src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton aria-label="" colorScheme="pri" icon={<IconEdit size="1.25rem" />} size="sm" onClick={onOpen} />
      <CropImage
        isOpen={isOpen}
        name="edit"
        options={{ showBtnZoom: true, showBtnAspectRatio: true, showBtnFlip: true, showBtnRotation: true }}
        src={src}
        onClose={onClose}
      />
    </>
  );
};
