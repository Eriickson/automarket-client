import { Box, Button, GridItem, HStack, IconButton, Img, SimpleGrid } from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";
import React, { FC, useState } from "react";
import { EditImageModal } from "./editModal/EditImageModal";
import { ResetImages } from "./ResetImages";
import { ViewImageModal } from "./viewModal/ViewImageModal";

export const GalleryImages: FC = () => {
  const [images] = useState([
    "https://www.teslarati.com/wp-content/uploads/2021/05/next-gen-roadster.jpg",
    "https://www.hdcarwallpapers.com/walls/2014_lamborghini_huracan_lp610_4_3-wide.jpg",
    "https://i.blogs.es/8e40ef/r82/1366_2000.jpg",
    "https://www.motorsgear.com/wp-content/uploads/2019/08/15354402196447-800x445.jpg",
    "https://icdn.dtcn.com/image/digitaltrends_es/mejores-autos-deportivos-aston-martin-2-500x500.jpg",
    "https://cnnespanol.cnn.com/wp-content/uploads/2020/09/200918141427-02-ferrari-f8-spider-full-169.jpg?quality=100&strip=info",
    "https://i.pinimg.com/736x/a6/c1/df/a6c1dfb045df63ee8bc39996be530a41.jpg",
    "https://media.gossipvehiculo.com/wp-content/uploads/2021/07/09103542/imagen-destacada-7.jpg",
    "https://i.pinimg.com/originals/f3/5d/88/f35d88af35493d5c850c64ee1d9396f4.jpg",
    "https://www.hibridosyelectricos.com/media/hibridos/images/2021/05/21/2021052111521271025.jpg",
  ]);
  return (
    <Box>
      <Box bg="gray.200" boxShadow="inner" mb="4" p="2">
        <SimpleGrid columns={[12, null, null, null, 10]} gap={2}>
          {images.map((image, i) => (
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
                <Img filter="blur(5px)" h="full" src={`${image}`} transform="scale(1.1)" userSelect="none" />
                <Box alignItems="center" display="flex" inset="0" pos="absolute">
                  <Img src={`${image}`} />
                </Box>
                <HStack position="absolute" right="2" top="2">
                  <EditImageModal />
                  <IconButton aria-label="" colorScheme="danger" icon={<IconTrash size="1.25rem" />} size="sm" />
                </HStack>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
      <HStack>
        <ResetImages />
        <ViewImageModal />
        <Button colorScheme="success">Agregar</Button>
      </HStack>
    </Box>
  );
};
