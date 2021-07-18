import { Box, Button, GridItem, HStack, IconButton, Img, SimpleGrid } from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";
import React, { FC, useState } from "react";
import { EditImageModal } from "./editModal/EditImageModal";
import { ResetImages } from "./ResetImages";
import { UploadImages } from "./uploadImages/UploadImages";
import { ViewImageModal } from "./viewModal/ViewImageModal";
import { useSelector, useAction } from "@/store";

export const GalleryImages: FC = () => {
  const { newVehicleRemoveImage } = useAction();
  const { images } = useSelector(({ newVehicle }) => newVehicle.steps.images);
  return (
    <Box>
      <Box bg="gray.200" boxShadow="inner" mb="4" p="2">
        <SimpleGrid columns={[12, null, null, null, 10]} gap={2}>
          {images?.map((image, i) => (
            <GridItem colSpan={[6, null, 4, 3, 2]} key={i}>
              <Box
                alignItems="center"
                bgColor="transparent"
                bgPos="center"
                display="flex"
                h="full"
                overflow="hidden"
                position="relative"
              >
                <Img
                  filter="blur(5px)"
                  h="full"
                  src={`${image.croppedImageSrc}`}
                  transform="scale(1.1)"
                  userSelect="none"
                />
                <Box alignItems="center" display="flex" inset="0" pos="absolute">
                  <Img src={`${image.croppedImageSrc}`} />
                </Box>
                <HStack position="absolute" right="2" top="2">
                  <EditImageModal />
                  <IconButton
                    aria-label=""
                    colorScheme="danger"
                    icon={<IconTrash size="1.25rem" />}
                    size="sm"
                    onClick={() => newVehicleRemoveImage(image.id)}
                  />
                </HStack>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
      <HStack>
        <ResetImages />
        <ViewImageModal />
        <UploadImages />
      </HStack>
    </Box>
  );
};
