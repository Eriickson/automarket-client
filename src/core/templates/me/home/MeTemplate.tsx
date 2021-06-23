import { MainLayout } from "@/layouts";
import React from "react";
import { Box, Button, VStack, Avatar, HStack, Heading } from "@chakra-ui/react";
import { SettingsMenu } from "./SettingsMenu";

export const MeTemplate = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <Button colorScheme="orange" w="full">
          Crea tu agencia
        </Button>
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.100"
          shadow="sm"
          p="5"
          borderTopWidth="2px"
          borderTopColor="pri.500"
          display="flex"
          justifyContent="space-between"
        >
          <HStack spacing="4" alignItems="center">
            <Avatar bgColor="gray.300" borderWidth="2px" borderColor="pri.500" size="xl" rounded="sm" />
            <Box h="full" display="flex" flexDirection="column" justifyContent="space-between">
              <Heading size="md">Erickson Manuel Holguín</Heading>
              <Heading color="gray.500" size="sm">
                @erickson01d
              </Heading>
              <Button colorScheme="blue" mt="3">
                Cambiar Imagen
              </Button>
            </Box>
          </HStack>
          <SettingsMenu />
        </Box>
      </VStack>
    </MainLayout>
  );
};
