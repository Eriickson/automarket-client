import { Avatar, UploadFiles, CropImage } from "@/components";
import { IGeneratedFile } from "@/shared";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const SelectProfileImage: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageSelected, setImageSelected] = useState<IGeneratedFile | undefined>();
  const [imageToCrop, setImageToCrop] = useState<IGeneratedFile | undefined>();
  return (
    <Box>
      <Avatar mb="2" size="xl" src={imageSelected?.src} />
      <UploadFiles
        btn={({ isLoading }) => <Button isLoading={isLoading}>Seleccionar Imagen</Button>}
        handleOnlyOneFile={file => {
          setImageToCrop(file);
          onOpen();
        }}
      />
      {imageToCrop && (
        <CropImage
          aspectRatio="1:1"
          image={imageToCrop}
          isOpen={isOpen}
          name="select-profile-image"
          options={{
            showBtnFlip: true,
            showBtnRotation: true,
            showBtnZoom: true,
          }}
          onClose={onClose}
          onSave={newImage => {
            setImageSelected({ ...imageToCrop, ...newImage });
          }}
        />
      )}
    </Box>
  );
};
