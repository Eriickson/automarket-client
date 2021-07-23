import React, { FC } from "react";

import { Text, VStack, Box, Avatar, HStack, Tag } from "@chakra-ui/react";

import { PrimaryCard } from "@/components";
import { ModalContactAgency } from "./ModalContactAgency";
import { IconMap, IconMapPin, IconStar } from "@tabler/icons";

export const AgencyPanel: FC = () => {
  return (
    <PrimaryCard>
      <VStack align="inherit" mb="3">
        <Avatar rounded="sm" size="2xl" />
        <Box>
          <Text fontWeight="semibold" fontSize="xl">
            Erickson Auto Import
          </Text>
          <Text fontWeight="medium" color="gray.600">
            Los más confiados en el negocio
          </Text>
        </Box>
        <HStack spacing={4}>
          <Box display="flex" alignItems="center">
            <Tag bgColor="pri.500" color="white" mr="1">
              596
            </Tag>
            <Box color="orange.500">
              <IconStar size="1.25rem" />
            </Box>
            <Box color="orange.500">
              <IconStar size="1.25rem" />
            </Box>
            <Box color="orange.500">
              <IconStar size="1.25rem" />
            </Box>
            <Box color="orange.500">
              <IconStar size="1.25rem" />
            </Box>
            <Box color="gray.500">
              <IconStar size="1.25rem" />
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <IconMapPin />
            <Text color="gray.700" fontWeight="semibold">
              Puñal, Santiago
            </Text>
          </Box>
        </HStack>
        <Text fontSize="sm" lineHeight="normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eum excepturi odio consectetur eveniet est.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eum excepturi odio consectetur eveniet est.
        </Text>
        <HStack>
          <Tag>Confiados</Tag>
          <Tag>Lideres</Tag>
          <Tag>Mejores vehículos</Tag>
        </HStack>
        <ModalContactAgency />
      </VStack>
    </PrimaryCard>
  );
};

/* <Box>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="normal">
            Erickson Auto Import
          </Text>
          <Text color="gray.400" fontSize="lg" fontWeight="semibold">
            Los más confiados en el negocio
          </Text>
        </Box> */
