import { UploadFiles, CropImage } from "@/components";
import { useUpdateProfilePicture } from "@/graphql";
import { IGeneratedImage } from "@/shared";
import { Button, useDisclosure } from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const EditProfilePicture: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageSelected, setImageSelected] = useState<IGeneratedImage | undefined>();
  const [imageToCrop, setImageToCrop] = useState<IGeneratedImage | undefined>();
  const { updateProfilePicture, loading, data } = useUpdateProfilePicture();

  async function onChangeProfilePicture() {
    if (!imageSelected) {
      console.log("No hay imagen de perfil seleccionada");

      return;
    }

    try {
      const { data } = await updateProfilePicture({ variables: { input: { profilePicture: imageSelected } } });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <UploadFiles
        btn={({ isLoading }) => (
          <Button isLoading={isLoading} loadingText="Subiendo...">
            Cambiar imagen
          </Button>
        )}
        handleOnlyOneFile={file => {
          setImageToCrop(file);
          onOpen();
        }}
      />
      {imageToCrop && (
        <CropImage
          defaultValue={{ aspectRatio: "1:1" }}
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
            onChangeProfilePicture();
          }}
        />
      )}
    </>
  );
};
