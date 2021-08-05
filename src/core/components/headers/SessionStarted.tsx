import { useSelector } from "@/store";
import { Avatar, Box, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { IconBellRinging, IconMessage2 } from "@tabler/icons";
import Link from "next/link";

const WraperSessionStartedStyled = styled.div``;

export const SessionStarted: FC = () => {
  const { user } = useSelector(({ auth }) => auth);

  return (
    <WraperSessionStartedStyled>
      <Box display={"flex"}>
        <Box mr={3}>
          <Link href="/me">
            <a>
              <ChakraLink>
                <Text fontWeight="semibold">{user?.name}</Text>
              </ChakraLink>
            </a>
          </Link>
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
          <Avatar cursor="pointer" rounded="none" />
        </Link>
      </Box>
    </WraperSessionStartedStyled>
  );
};