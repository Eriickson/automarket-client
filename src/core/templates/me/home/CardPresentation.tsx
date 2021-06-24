import React, { FC } from "react";

import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { SettingsMenu } from "./SettingsMenu";
import { SelectProfileImage, SelectProfileImageProvider } from "@/components";

export const CardPresentation: FC = () => {
  return (
    <>
      <Button colorScheme="sec" w="full">
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
          {/* <Avatar bgColor="gray.300" borderWidth="2px" borderColor="pri.500" size="xl" rounded="sm" /> */}
          <SelectProfileImageProvider>
            <SelectProfileImage
              buttonTopContent={
                <Box mb="3">
                  <Heading size="md">Erickson Manuel Holguín</Heading>
                  <Heading color="gray.500" size="sm">
                    @erickson01d
                  </Heading>
                </Box>
              }
              labelButton="Cambiar Imagen"
              onChange={value => {
                console.log(value);
              }}
            />
          </SelectProfileImageProvider>
        </HStack>
        <SettingsMenu />
      </Box>
    </>
  );
};
