import React, { FC } from "react";

// NextJS
import { useRouter } from "next/router";
import Link from "next/link";

// Packages
import { Box, Button, HStack, Text, Flex, Avatar } from "@chakra-ui/react";

// My Elements
import { useUIContext } from "@/context";
import { useChangeProfilePicture } from "@/graphql";
import { useSelector } from "@/store";

// My Components
import { Image, onChangeArgsPropType, PrimaryCard } from "@/components";
import { EditProfilePicture } from "./EditProfilePicture";
import { SettingsMenu } from "./settings/SettingsMenu";

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
          <Flex flex="1">
            {profileMe?.profilePictureUrl ? (
              <Box mr="4" w="24">
                <Image alt="" src={profileMe?.profilePictureUrl} />
              </Box>
            ) : (
              <Avatar cursor="pointer" mr="4" rounded="none" size="xl" />
            )}
            <Box>
              <Box mb="3">
                <Text fontSize="xl" fontWeight="semibold" lineHeight="none">
                  {profileMe.name} {profileMe.lastname}
                </Text>
                <Text fontWeight="medium">@{profileMe.username}</Text>
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
