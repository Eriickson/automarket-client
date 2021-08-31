import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import StickyBox from "react-sticky-box";
import { GridItem, Img, SimpleGrid, VStack, Text, Box, Heading, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { ContactsList } from "./contacts/ContactsList";
import { CoverSwiper } from "./cover/CoverSwiper";
import { MenuNew } from "./menu/MenuNew";
import { ContainerPanel } from "./panels/ContainerPanel";
import { StatisticsPanel } from "./StatisticsPanel";
import { MyAgencyTabs } from "./tabs/MyAgencyTabs";

export const MeAgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <Box>
        <SimpleGrid columns={12} gap={2}>
          <GridItem colSpan={[12, null, 3]}>
            <StickyBox>
              <VStack alignItems="stretch">
                <Box>
                  <Img shadow="sm" src="https://upload.wikimedia.org/wikipedia/en/6/68/TLS_Agency_logo.jpg" />
                </Box>
                <PrimaryCard notBorderTop>
                  <Box lineHeight="normal">
                    <Text fontSize="2xl" fontWeight="semibold">
                      Erickson Auto import
                    </Text>
                    <Text fontWeight="medium">Los más confiable en el negocio</Text>
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
                  <Box fontWeight="semibold">Oficina: Erickson Auto import - Santiago, Puñal</Box>
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
