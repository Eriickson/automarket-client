import React, { FC } from "react";

import { Heading, Text, HStack, Divider, Box, Tag } from "@chakra-ui/react";

import { IconClock, IconMapPin } from "@tabler/icons";

export const InfoTab: FC = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <HStack spacing="2.5">
          <HStack spacing="0.5">
            <IconMapPin size="1.25rem" />
            <Text fontSize={["sm", null, "md"]}>Santiago / Puñal</Text>
          </HStack>
          <HStack spacing="0.5">
            <IconClock size="1.25rem" />
            <Text fontSize={["sm", null, "md"]}>Hace 5 Días</Text>
          </HStack>
        </HStack>
        <Text color="green.500" fontSize={["md", null, "lg"]} fontWeight="semibold">
          RD$ 250,000.00
        </Text>
      </HStack>
      <Divider my="2" />
      <Box flex="2">
        <Heading fontSize={["md", null, "lg"]}>Vendo Toyota Corolla Recien importado</Heading>
        <HStack flexWrap="wrap" mb="2" mt="1">
          <Tag mb="1">Nuevo</Tag>
          <Tag mb="1">Recién importado</Tag>
          <Tag mb="1">Nuevo</Tag>
          <Tag mb="1">Recién importado</Tag>
          <Tag mb="1">Nuevo</Tag>
        </HStack>
        <Text fontSize={["sm", null, "md"]} maxW="3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit cum! Repellendus dignissimos dolores quo
          blanditiis, atque aut placeat commodi labore debitis voluptatibus harum iusto sequi expedita ut, architecto
          possimus.
        </Text>
      </Box>
    </>
  );
};
