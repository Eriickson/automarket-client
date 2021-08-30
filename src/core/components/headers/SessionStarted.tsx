import { useSelector } from "@/store";
import { Avatar, Box, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { IconBellRinging, IconMessage2 } from "@tabler/icons";
import Link from "next/link";
import { Image } from "@/components";

const WraperSessionStartedStyled = styled.div``;

export const SessionStarted: FC = () => {
  const { user } = useSelector(({ auth }) => auth);

  return (
    <WraperSessionStartedStyled>
      <Box alignItems="center" display="flex">
        <Box mr={3}>
          <Box display={["none", null, "inline"]}>
            <Link href="/me">
              <a>
                <ChakraLink>
                  <Text fontWeight="semibold">{user?.name}</Text>
                </ChakraLink>
              </a>
            </Link>
          </Box>
          <HStack justifyContent="flex-end">
            <Box _hover={{ color: "orange.500", transitionDuration: "150ms" }} cursor="pointer">
              <IconBellRinging />
            </Box>
            <Box _hover={{ color: "blue.500", transitionDuration: "150ms" }} cursor="pointer">
              <IconMessage2 />
            </Box>
          </HStack>
        </Box>
        <Link href="/me">
          <a>
            {user?.profilePictureUrl ? (
              <Box cursor="pointer" w="12">
                <Image alt="" src={user?.profilePictureUrl} />
              </Box>
            ) : (
              <Avatar cursor="pointer" rounded="none" />
            )}
          </a>
        </Link>
      </Box>
    </WraperSessionStartedStyled>
  );
};
