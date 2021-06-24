import React from "react";
import { Avatar, Box, useDisclosure } from "@chakra-ui/react";
import { LabelInput } from "@/components";
import { UploadButton } from "./UploadButton";
import { TransformImageModal } from "./TransformImageModal";

import { useSelectProfileImage } from "./SelectProfileImageContext";

export const SelectProfileImage = () => {
  const { isOpen, onOpen, onClose } = useSelectProfileImage();

  return (
    <>
      <Box>
        <LabelInput isRequired label="Imagen de perfil" />
        <Box display="flex" alignItems="center" mt="1.5">
          <Avatar rounded="sm" size="xl" mr={[0, 5]} />
          <UploadButton />
        </Box>
      </Box>
      <TransformImageModal />
    </>
  );
};
