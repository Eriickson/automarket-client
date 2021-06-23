import React from "react";
import { Box } from "@chakra-ui/react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons";

export const SocialMedias = () => {
  return (
    <Box height="full" display="flex" justifyContent="flex-end" alignItems="center">
      <Box
        ml="2.5"
        p="1"
        cursor="pointer"
        rounded="sm"
        color="gray.500"
        transition="250ms"
        _hover={{ color: "blue.500", bgColor: "blue.200" }}
      >
        <IconBrandFacebook />
      </Box>
      <Box
        ml="2.5"
        p="1"
        cursor="pointer"
        rounded="sm"
        color="gray.500"
        transition="250ms"
        _hover={{ color: "pink.500", bgColor: "pink.200" }}
      >
        <IconBrandInstagram />
      </Box>
      <Box
        ml="2.5"
        p="1"
        cursor="pointer"
        rounded="sm"
        color="gray.500"
        transition="250ms"
        _hover={{ color: "green.500", bgColor: "green.200" }}
      >
        <IconBrandWhatsapp />
      </Box>
    </Box>
  );
};
