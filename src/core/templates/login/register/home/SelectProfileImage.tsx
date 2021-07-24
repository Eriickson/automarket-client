import { Avatar, UploadFiles, CropImage } from "@/components";
import { IGeneratedFile } from "@/shared";
import { Box, Button, Img, useDisclosure } from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const SelectProfileImage: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageSelected, setImageSelected] = useState<IGeneratedFile | undefined>();

  return (
    <Box>
      <Avatar src={imageSelected?.src} />
      <UploadFiles
        btn={({ isLoading }) => <Button isLoading={isLoading}>Seleccionar Imagen de perfil</Button>}
        handleOnlyOneFile={file => {
          setImageSelected(file);
          onOpen();
        }}
      />
      {imageSelected && (
        <CropImage
          image={imageSelected}
          isOpen={isOpen}
          name="select-profile-image"
          onClose={onClose}
          aspectRatio="1:1"
          options={{
            showBtnFlip: true,
            showBtnRotation: true,
            showBtnZoom: true,
          }}
          onSave={newImage => {
            setImageSelected({ ...imageSelected, ...newImage });
          }}
        />
      )}
    </Box>
  );
};
