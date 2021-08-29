import { PrimaryCard } from "@/components";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { IconX } from "@tabler/icons";
import React, { FC } from "react";
import { RequestProfessionalAgencyForm } from "./RequestProfessionalAgencyForm";

export const RequestProfessionalAgency: FC = () => {
  return (
    <Box p="5">
      <PrimaryCard>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Solicita una agencia Profesional
          </Text>
          <Box _hover={{ color: "red.500" }} cursor="pointer" transitionDuration="250ms">
            <IconX size="1.25rem" />
          </Box>
        </Flex>
        <Text lineHeight="none" mb="4" fontSize="sm">
          Obtén grandes beneficios al cambiarte a una agencia profesional
        </Text>
        <RequestProfessionalAgencyForm />
      </PrimaryCard>
    </Box>
  );
};
