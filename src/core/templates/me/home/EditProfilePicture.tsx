import React, { FC, useState } from "react";

// NextJS
import router from "next/router";

// Packages
import axios from "axios";
import { Button, useDisclosure } from "@chakra-ui/react";

// My Elements
import { useUIContext } from "@/context";
import { useUpdateProfilePicture } from "@/graphql";
import { IGeneratedImage } from "@/shared";

// My Components
import { UploadFiles, CropImage } from "@/components";

export const EditProfilePicture: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const [imageToCrop, setImageToCrop] = useState<IGeneratedImage | undefined>();
  const { updateProfilePicture } = useUpdateProfilePicture();

  async function onChangeProfilePicture(newProfilePicture: IGeneratedImage) {
    activateLoadingScreen("Actualizando imagen");

    try {
      const { data } = await updateProfilePicture({ variables: { input: { profilePicture: newProfilePicture } } });

      if (data && data.updateProfilePicture.successful) {
        const { data } = await axios.post("/api/auth/refreshtoken");

        if (data.successful) router.reload();
      } else {
        closeLoadingScreen();
      }
    } catch (err) {
      closeLoadingScreen();
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
            onChangeProfilePicture({ ...imageToCrop, ...newImage });
          }}
        />
      )}
    </>
  );
};
