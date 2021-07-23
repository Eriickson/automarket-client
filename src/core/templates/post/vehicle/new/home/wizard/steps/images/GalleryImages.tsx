import React, { FC } from "react";

// Packages
import { Box, GridItem, HStack, IconButton, Img, SimpleGrid } from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";
import Zoom from "react-medium-image-zoom";

// My Elements
import { useSelector, useAction } from "@/store";

// My Components
import { EditImageModal } from "./editModal/EditImageModal";
import { ResetImages } from "./ResetImages";
import { UploadImages } from "./uploadImages/UploadImages";
import { ViewImageModal } from "./viewModal/ViewImageModal";
import { UploadZone } from "./UploadZone";

export const GalleryImages: FC = () => {
  const { newVehicleRemoveImage } = useAction();
  const { images } = useSelector(({ newVehicle }) => newVehicle.steps.images);
  return (
    <Box>
      <Box bg="gray.200" boxShadow="inner" mb="4" p="2" pos="relative">
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
                {" "}
                <Img filter="blur(5px)" h="full" src={`${image.src}`} transform="scale(1.1)" userSelect="none" />
                <Box alignItems="center" display="flex" inset="0" pos="absolute">
                  <Zoom>
                    <Img src={`${image.src}`} />
                  </Zoom>
                </Box>
                <HStack position="absolute" right="2" top="2">
                  <EditImageModal src={image.src} />
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
        {!images?.length && <UploadZone />}
      </Box>
      {Boolean(images?.length) && (
        <HStack>
          <ResetImages />
          <ViewImageModal />
          <UploadImages />
        </HStack>
      )}
    </Box>
  );
};
