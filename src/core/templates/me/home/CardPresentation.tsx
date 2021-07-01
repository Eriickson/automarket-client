import React, { FC } from "react";

import { Box, Button, HStack, Heading, Img } from "@chakra-ui/react";
import { SettingsMenu } from "./SettingsMenu";
import { SelectProfileImage, SelectProfileImageProvider, Image } from "@/components";
import { useSelector } from "@/store";

export const CardPresentation: FC = () => {
  const { profileMe } = useSelector(({ profile }) => profile);

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
          <Box w="28">
            <Image alt="" src={profileMe.profilePicture} />
          </Box>
          <SelectProfileImageProvider>
            <Box mb="3">
              <Heading size="md">
                {profileMe.name} {profileMe.lastname}
              </Heading>
              <Heading color="gray.500" size="sm" mb="2.5">
                @{profileMe.username}
              </Heading>
              <SelectProfileImage
                labelButton="Cambiar Imagen"
                onChange={() => {
                  // console.log(value);
                }}
              />
            </Box>
          </SelectProfileImageProvider>
        </HStack>
        <SettingsMenu />
      </Box>
    </>
  );
};
