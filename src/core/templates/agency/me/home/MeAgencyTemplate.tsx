import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { GridItem, Img, SimpleGrid, VStack, Text, Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { StatisticsPanel } from "./StatisticsPanel";
import { MyAgencyTabs } from "./tabs/MyAgencyTabs";

export const MeAgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columns={12} gap={3}>
        <GridItem colSpan={[12, null, 3]}>
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
            <PrimaryCard notBorderTop>
              <Heading fontSize={["md", null, "lg"]}>Contactos</Heading>
            </PrimaryCard>
          </VStack>
        </GridItem>
        <GridItem colSpan={[12, null, 9]}>
          <MyAgencyTabs />
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};
