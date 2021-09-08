import React, { FC } from "react";

// NextJS
import Link from "next/link";

// Packages
import { Box, HStack, Text, Flex, Avatar, Link as ChakraLink, Button } from "@chakra-ui/react";

// My Elements
import { useSelector } from "@/store";

// My Components
import { Image, PrimaryCard } from "@/components";
import { EditProfilePicture } from "./EditProfilePicture";
import { SettingsMenu } from "./settings/menu/SettingsMenu";

export const CardPresentation: FC = () => {
  const { profileMe } = useSelector(({ profile }) => profile);
  const { agency } = useSelector(({ auth }) => auth);

  return (
    <>
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
              <HStack>
                <EditProfilePicture />
                {agency && (
                  <Link href="agency/me">
                    <ChakraLink>
                      <Button colorScheme="pri">Ir a mi agencía</Button>
                    </ChakraLink>
                  </Link>
                )}
              </HStack>
            </Box>
          </Flex>
          <SettingsMenu />
        </HStack>
      </PrimaryCard>
    </>
  );
};
