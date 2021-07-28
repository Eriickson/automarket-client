import React, { FC } from "react";

import { Box, Button, HStack, Text, Img, Flex } from "@chakra-ui/react";
import { SettingsMenu } from "./SettingsMenu";
import { UploadFiles, onChangeArgsPropType, PrimaryCard } from "@/components";
import { useChangeProfilePicture } from "@/graphql";
import { useSelector } from "@/store";
import { useUIContext } from "@/context";
import { useRouter } from "next/router";
import Link from "next/link";
import { EditProfilePicture } from "./EditProfilePicture";

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
      <Link href="/agency/new">
        <a>
          <Button colorScheme="sec" w="full">
            Crea tu agencia
          </Button>
        </a>
      </Link>
      <PrimaryCard>
        <HStack alignItems="flex-start" spacing="4">
          <Flex flex="1" >
            <Img
              mr="4"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              w="36"
            />
            <Box>
              <Box mb="3">
                <Text fontSize="xl" fontWeight="semibold" lineHeight="none">
                  Erickson Manuel Holguín
                </Text>
                <Text fontWeight="medium">@Erickson01d</Text>
              </Box>
              <EditProfilePicture />
            </Box>
          </Flex>
          <SettingsMenu />
        </HStack>
      </PrimaryCard>
    </>
  );
};

/*   */
