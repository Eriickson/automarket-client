import React, { FC } from "react";

import { Heading, Text, HStack, Divider, Box } from "@chakra-ui/react";

import { IconClock, IconMapPin } from "@tabler/icons";

import { PrimaryCard } from "@/components";

export const InfoPanel: FC = () => {
  return (
    <PrimaryCard notBorderTop>
      <HStack justifyContent="space-between">
        <HStack spacing="2.5">
          <HStack spacing="0.5">
            <IconMapPin size="1.25rem" />
            <Text>Santiago / Puñal</Text>
          </HStack>
          <HStack spacing="0.5">
            <IconClock size="1.25rem" />
            <Text>Hace 5 Días</Text>
          </HStack>
        </HStack>
        <Text color="green.600" fontSize="xl" fontWeight="medium">
          RD$ 250,000.00
        </Text>
      </HStack>
      <Divider my="2" />
      <Box flex="2">
        <Heading size="md">Vendo Toyota Corolla Recien importado</Heading>
        <Text maxW="3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit cum! Repellendus dignissimos dolores quo
          blanditiis, atque aut placeat commodi labore debitis voluptatibus harum iusto sequi expedita ut, architecto
          possimus.
        </Text>
      </Box>
    </PrimaryCard>
  );
};
