import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { CropImage } from "@/components";
import { IGeneratedFile } from "@/shared";
import { useAction } from "@/store";
interface EditImageModalProps {
  image: IGeneratedFile;
}

export const EditImageModal: FC<EditImageModalProps> = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { newVehicleUpdateImage } = useAction();
  return (
    <>
      <IconButton
        aria-label="abrir editor de imagen"
        colorScheme="pri"
        icon={<IconEdit size="1.25rem" />}
        size="sm"
        onClick={onOpen}
      />
      <CropImage
        image={image}
        isOpen={isOpen}
        name="edit"
        options={{ showBtnZoom: true, showBtnAspectRatio: true, showBtnFlip: true, showBtnRotation: true }}
        onClose={onClose}
        onSave={data => newVehicleUpdateImage({ ...image, ...data })}
      />
    </>
  );
};
