import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import { PrimaryCard } from "@/components";
import { GridItem, Img, SimpleGrid, VStack } from "@chakra-ui/react";

export const PostTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columns={12} gap={3}>
        <GridItem colSpan={[8]}>
          <VStack>
            <Img
              src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
              alt="x"
            />
            <Img
              src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
              alt="x"
            />
          </VStack>
        </GridItem>
        <GridItem colSpan={[4]}>
          <PrimaryCard>Hola, llegué yo</PrimaryCard>
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};
