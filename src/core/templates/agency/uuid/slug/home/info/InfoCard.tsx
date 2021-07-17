import React, { FC } from "react";

import { Box, Heading, HStack, Tag, VStack, Text } from "@chakra-ui/react";
import { IconMapPin, IconStar } from "@tabler/icons";
import { RankingModal } from "./rankingModal/RankingModal";
import { ContactsModal } from "./contactsModal/ContactsModal";
import { UbicationModal } from "./ubicationModal/UbicationModal";
import { AgencyLogo } from "./AgencyLogo";

export const InfoCard: FC = () => {
  return (
    <VStack alignItems="flex-start" flex="1">
      <Box display="flex">
        <AgencyLogo />
        <Box alignItems="flex-start" display="flex">
          <Box lineHeight="normal" mb="2">
            <Heading size="lg">Erickson auto import</Heading>
            <Text fontSize="lg">Los mejores en el asunto.</Text>
          </Box>
          <Box alignItems="center" display="flex" mb="2">
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
          <Box alignItems="center" display="flex">
            <IconMapPin />
            <Text color="gray.700" fontWeight="semibold">
              Puñal, Santiago
            </Text>
          </Box>
        </Box>
      </Box>
      <Text fontSize="sm" maxW="lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eum excepturi odio consectetur eveniet est. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <HStack>
        <ContactsModal />
        <UbicationModal />
        <RankingModal />
      </HStack>
    </VStack>
  );
};
