import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import { Button, GridItem, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import { PostCarousel } from "./postCarousel/PostCarousel";
import { MorePost } from "./morePost/MorePost";
import { TabBarPanels } from "./tabBar/TabBarPanels";

export const PostTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columnGap={3} columns={12} rowGap={5}>
        <GridItem colSpan={[12, null, null, 7]}>
          <VStack align="inherit">
            <PostCarousel />
          </VStack>
        </GridItem>

        <GridItem colSpan={[12, null, null, 5]}>
          <TabBarPanels />
          <Flex justifyContent="flex-end" w="full">
            <Button colorScheme="pri" mt="3">
              Contactar Vendedor
            </Button>
          </Flex>
        </GridItem>

        <GridItem colSpan={12}>
          <MorePost />
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};
