import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { GridItem, Img, SimpleGrid, VStack, Text, Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { MyAgencyTabs } from "./tabs/MyAgencyTabs";

export const MeAgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columns={12} gap={3}>
        <GridItem colSpan={3}>
          <VStack alignItems="stretch">
            <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Aspect-ratio-4x3.svg/1280px-Aspect-ratio-4x3.svg.png" />
            <PrimaryCard notBorderTop>
              <Box lineHeight="normal">
                <Text fontSize="2xl" fontWeight="semibold">
                  Erickson Auto import
                </Text>
                <Text fontWeight="medium">Los más confiable en el negocio</Text>
              </Box>
            </PrimaryCard>
            <PrimaryCard notBorderTop>
              <Heading fontSize={["md", null, "lg"]}>Contactos</Heading>
            </PrimaryCard>
          </VStack>
        </GridItem>
        <GridItem colSpan={9}>
          <MyAgencyTabs />
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};
