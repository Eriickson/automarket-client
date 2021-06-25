import React, { FC } from "react";

import { Text, HStack, Box, Avatar } from "@chakra-ui/react";

import { PrimaryCard } from "@/components";
import { ModalContactAgency } from "./ModalContactAgency";

export const AgencyPanel: FC = () => {
  return (
    <PrimaryCard>
      <HStack align="inherit" mb="3">
        <Avatar rounded="sm" size="2xl" />
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" lineHeight="normal">
            Erickson Auto Import
          </Text>
          <Text color="gray.400" fontSize="lg" fontWeight="semibold">
            Los más confiados en el negocio
          </Text>
        </Box>
      </HStack>
      <ModalContactAgency />
    </PrimaryCard>
  );
};
