import { Avatar, UploadFiles, CropImage } from "@/components";
import { IGeneratedImage } from "@/shared";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const SelectProfileImage: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageSelected, setImageSelected] = useState<IGeneratedImage | undefined>();
  const [imageToCrop, setImageToCrop] = useState<IGeneratedImage | undefined>();
  const { control } = useFormContext();

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
        <Controller
          control={control}
          name="profilePicture"
          render={({ field }) => (
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
                const image = { ...imageToCrop, ...newImage };
                field.onChange(image);
                setImageSelected(image);
              }}
            />
          )}
        />
      )}
    </Box>
  );
};
