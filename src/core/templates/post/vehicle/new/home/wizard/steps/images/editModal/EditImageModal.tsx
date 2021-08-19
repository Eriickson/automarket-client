import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";
import { useDisclosure, Flex } from "@chakra-ui/react";
import { CropImage } from "@/components";
import { IGeneratedImage } from "@/shared";
import { useAction } from "@/store";
interface EditImageModalProps {
  image: IGeneratedImage;
}

export const EditImageModal: FC<EditImageModalProps> = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { newVehicleUpdateImage } = useAction();
  return (
    <>
      <Flex
        alignItems="center"
        color="gray.100"
        cursor="pointer"
        h="8"
        justifyContent="center"
        style={{ backgroundColor: "#000000A4" }}
        w="8"
        onClick={onOpen}
      >
        <IconEdit size="1.25rem" />
      </Flex>
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
