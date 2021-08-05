import { useSelector } from "@/store";
import { capitalizeString } from "@/utils";
import { Box, Flex, Text, StackDivider, VStack, Img } from "@chakra-ui/react";
import React, { FC } from "react";

export const VerifyStep: FC = () => {
  const { agencyData, ubication } = useSelector(({ agency }) => agency.new);
  return (
    <Box>
      <VStack alignItems="stretch" divider={<StackDivider borderColor="gray.200" />}>
        <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Logo
          </Text>
          <Text flex="1" fontWeight="semibold">
            <Img src={agencyData.logo.src} />
          </Text>
        </Flex>
        <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Nombre
          </Text>
          <Text flex="1" fontWeight="semibold">
            {agencyData.name}
          </Text>
        </Flex>
        <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Agencia Profesional
          </Text>
          <Text flex="1" fontWeight="semibold">
            {agencyData.isProfessional ? "SÍ" : "NO"}
          </Text>
        </Flex>
        <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Eslogan
          </Text>
          <Text flex="1" fontWeight="semibold">
            {agencyData.slogan}
          </Text>
        </Flex>
        <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Dirección
          </Text>
          <Text flex="1" fontWeight="semibold">
            {[
              ubication.reference,
              capitalizeString(ubication.sector.label),
              capitalizeString(ubication.municipality.label),
              ubication.province.label,
            ].join(" / ")}
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};
