import { MainLayout } from "@/layouts";
import {
  Box,
  Button,
  GridItem,
  HStack,
  IconButton,
  Img,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { PrimaryCard } from "@/components";
import { Seacher } from "./Seacher";
import { IconCar, IconDeviceFloppy, IconStars } from "@tabler/icons";

export const AllAgenciesTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack alignItems="stretch">
        <Seacher />
        <Text display="flex">
          <Text fontWeight="semibold" mr="1">
            250
          </Text>
          Agencias Encontradas
        </Text>
        <SimpleGrid columns={12} gap={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(item => (
            <GridItem colSpan={[6, null, 4, 3]} key={item}>
              <PrimaryCard notBorderTop>
                <Box alignItems="center" display="flex" flexDir="column" textAlign="center">
                  <Box maxW="40" mx="auto">
                    <Img src="https://thumbs.dreamstime.com/b/car-sale-logo-template-design-vector-eps-82119214.jpg" />
                  </Box>
                  <Text fontSize={["xl", null, "2xl"]} fontWeight="semibold">
                    Card Shop
                  </Text>
                  <Text color="gray.400" fontSize="sm" fontWeight="medium" lineHeight="normal" maxW="56" mb="2">
                    Los mejores en la venta de vehículos hoy por hoyww.
                  </Text>
                  <HStack mb="3">
                    <Tag colorScheme="warning" size="sm" variant="solid">
                      <TagLeftIcon as={IconStars} />
                      <TagLabel>+99</TagLabel>
                    </Tag>
                    <Tag colorScheme="pri" size="sm" variant="solid">
                      <TagLeftIcon as={IconCar} />
                      <TagLabel>355</TagLabel>
                    </Tag>
                    <Tag colorScheme="success" size="sm" variant="solid">
                      <TagLeftIcon as={IconStars} />
                      <TagLabel>+99</TagLabel>
                    </Tag>
                  </HStack>
                  <HStack w="full">
                    <IconButton aria-label="" colorScheme="red" icon={<IconDeviceFloppy />} size="sm"></IconButton>
                    <Button colorScheme="pri" size="sm" w="full">
                      Visitar
                    </Button>
                  </HStack>
                </Box>
              </PrimaryCard>
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </MainLayout>
  );
};
