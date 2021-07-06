import React, { FC } from "react";

import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { SettingsMenu } from "./SettingsMenu";
import {
  SelectProfileImage,
  SelectProfileImageProvider,
  Image,
  ConfirmPasswordModal,
  onChangeArgsPropType,
} from "@/components";
import { useChangeProfilePicture } from "@/graphql";
import { useSelector } from "@/store";
import { useUIContext } from "@/context";
import { useRouter } from "next/router";

export const CardPresentation: FC = () => {
  const { profileMe } = useSelector(({ profile }) => profile);
  const { changeProfilePicture, loading } = useChangeProfilePicture();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const { reload } = useRouter();

  async function onChangeProfilePicture(newProfilePicture: onChangeArgsPropType) {
    activateLoadingScreen("Cambiando imagen de perfil");
    const { file, rotation, croppedAreaPixels } = newProfilePicture;

    try {
      await changeProfilePicture({
        variables: {
          newProfilePicture: {
            file,
            croppedArea: croppedAreaPixels,
            rotation,
          },
          password: "123456789t",
        },
      });
      reload();
    } catch (err) {
      console.log(err);
      closeLoadingScreen();
    }
  }

  return (
    <>
      <Button colorScheme="sec" w="full">
        Crea tu agencia
      </Button>
      <Box
        bg="white"
        borderColor="gray.100"
        borderTopColor="pri.500"
        borderTopWidth="2px"
        borderWidth="1px"
        display="flex"
        justifyContent="space-between"
        p="5"
        shadow="sm"
      >
        <HStack alignItems="center" spacing="4">
          <Box w="28">{/* <Image alt="" src={profileMe.profilePicture} /> */}</Box>
          <SelectProfileImageProvider>
            <Box mb="3">
              <Heading fontSize={[null, null, "md"]}>
                {profileMe.name} {profileMe.lastname}
              </Heading>
              <Heading color="gray.500" size="sm" mb="2.5">
                @{profileMe.username}
              </Heading>
              <SelectProfileImage labelButton="Cambiar Imagen" onChange={onChangeProfilePicture} />
            </Box>
          </SelectProfileImageProvider>
        </HStack>
        <SettingsMenu />
      </Box>
    </>
  );
};
