import React, { FC } from "react";

// Packages
import { Box, Button, Divider, Text } from "@chakra-ui/react";

// My Elements
import { IGeneratedFile } from "@/shared";
import { useAction } from "@/store";

// My Components
import { UploadFiles as UploadZoneComponent } from "@/components";
import { IconCirclePlus, IconPhoto } from "@tabler/icons";

export const UploadZone: FC = () => {
  const { setNewVehicle } = useAction();

  async function handleFiles(acceptedFiles: IGeneratedFile[]) {
    setNewVehicle(acceptedFiles);
  }

  return (
    <Box mb="2">
      <UploadZoneComponent
        btn={({ isLoading }) => (
          <>
            <Box
              alignItems="center"
              border="2px"
              borderColor="pri.500"
              borderStyle="dashed"
              cursor="pointer"
              display={["none", null, "flex"]}
              flexDir="column"
              inset="0"
              justifyContent="center"
              m="3"
              minH="52"
              p="3"
            >
              <Box pos="relative">
                <IconPhoto size="5rem" strokeWidth="1.5" />
                <Box bg="gray.200" bottom={0} pos="absolute" right={0} rounded="full">
                  <IconCirclePlus size="2.5rem" strokeWidth="1.5" />
                </Box>
              </Box>
              <Text color="gray.600" fontWeight="medium" textAlign="center">
                Arrastra tus imágenes aquí dentro para ser agregadas
              </Text>
              <Box alignItems="center" display="flex" maxW="3xl" my="3" w="full">
                <Divider border="1px solid" borderColor="gray.300" flex="1" />
                <Text fontWeight="semibold" mx="3">
                  O
                </Text>
                <Divider border="1px solid" borderColor="gray.300" flex="1" />
              </Box>
              <Button colorScheme="pri" isLoading={isLoading} loadingText="Subiendo imágenes">
                Haz Click para agregar tus imágenes
              </Button>
            </Box>
            <Box display={[null, null, "none"]} inset="0" pos="absolute">
              <Button colorScheme="pri" isLoading={isLoading} loadingText="Subiendo imágenes" w="full">
                Agregar tus imágenes
              </Button>
            </Box>
          </>
        )}
        dropZoneOptions={{ multiple: true }}
        handleMultipleFiles={handleFiles}
      />
    </Box>
  );
};
