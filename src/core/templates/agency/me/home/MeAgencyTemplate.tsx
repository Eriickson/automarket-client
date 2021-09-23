import React, { FC } from "react";

// Packages
import { GridItem, SimpleGrid, VStack, Text, Box, Flex } from "@chakra-ui/react";
import StickyBox from "react-sticky-box";

// My Elements
import { useSelector } from "@/store";
import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";

// My Components
import { ContactsList } from "./contacts/ContactsList";
import { CoverSwiper } from "./cover/CoverSwiper";
import { MenuNew } from "./menu/MenuNew";
import { ContainerPanel } from "./panels/ContainerPanel";
import { StatisticsPanel } from "./StatisticsPanel";
import { AgencyLogo } from "./logo/AgencyLogo";
import { IconMapPin } from "@tabler/icons";

export const MeAgencyTemplate: FC = () => {
  const { name, slogan, selectedBranch } = useSelector(store => store.agency.myAgency);

  return (
    <MainLayout>
      <Box>
        <SimpleGrid columns={12} gap={2}>
          <GridItem colSpan={[12, null, 3]}>
            <StickyBox offsetTop={8}>
              <VStack alignItems="stretch">
                <AgencyLogo />
                <PrimaryCard notBorderTop>
                  <Box lineHeight="normal">
                    <Text fontSize="2xl" fontWeight="semibold">
                      {name}
                    </Text>
                    <Text fontWeight="medium">{slogan}</Text>
                  </Box>
                </PrimaryCard>
                <StatisticsPanel />
                <ContactsList />
              </VStack>
            </StickyBox>
          </GridItem>
          <GridItem colSpan={[12, null, 9]}>
            <VStack alignItems="stretch">
              <CoverSwiper />
              <PrimaryCard notBorderTop>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box fontWeight="semibold">
                    Oficina: {selectedBranch.name}
                    <Flex color="gray.500">
                      <IconMapPin size="1.25rem" />{" "}
                      <Text fontSize="sm" fontWeight="medium" ml="1">
                        {selectedBranch.ubication?.direction.reference},{" "}
                        {selectedBranch.ubication?.direction.sector?.label},{" "}
                        {selectedBranch.ubication?.direction.municipality.label},{" "}
                        {selectedBranch.ubication?.direction.province.label}
                      </Text>
                    </Flex>
                  </Box>
                  <MenuNew />
                </Flex>
              </PrimaryCard>
              <ContainerPanel />
            </VStack>
            {/* <MyAgencyTabs /> */}
          </GridItem>
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
