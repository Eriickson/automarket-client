import React, { FC } from "react";

import { IconMarquee2, IconCircleCheck, IconCirclePlus, IconStars } from "@tabler/icons";

import { MainLayout } from "@/layouts";
import { GridItem, Img, SimpleGrid, VStack } from "@chakra-ui/react";
import { PostCarousel } from "./postCarousel/PostCarousel";
import { AgencyPanel, InfoPanel, DescriptiveInformationPanel, PanelListing } from "./panels";
import { MorePost } from "./morePost/MorePost";
import StickyBox from "react-sticky-box";

export const PostTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columns={12} gap={2}>
        <GridItem colSpan={[12, null, null, 8]}>
          <VStack align="inherit">
            <PostCarousel />
            <InfoPanel />
            <DescriptiveInformationPanel />
            <SimpleGrid columns={12} gap={2}>
              <PanelListing
                listing={[
                  { IconList: IconMarquee2, label: "Nuevo" },
                  { IconList: IconMarquee2, label: "Recien importado" },
                  { IconList: IconMarquee2, label: "Aire Acondicionador" },
                  { IconList: IconMarquee2, label: "No se Moja" },
                ]}
                title="Características"
              />
              <PanelListing
                listing={[
                  { IconList: IconCircleCheck, label: "Nuevo" },
                  { IconList: IconCircleCheck, label: "Recien importado" },
                  { IconList: IconCircleCheck, label: "Aire Acondicionador" },
                  { IconList: IconCircleCheck, label: "No se Moja" },
                ]}
                title="Accesorios"
              />
              <PanelListing
                listing={[
                  { IconList: IconCirclePlus, label: "Nuevo" },
                  { IconList: IconCirclePlus, label: "Recien importado" },
                  { IconList: IconCirclePlus, label: "Aire Acondicionador" },
                  { IconList: IconCirclePlus, label: "No se Moja" },
                ]}
                title="Añadidos"
              />
              <PanelListing
                listing={[
                  { IconList: IconStars, label: "Nuevo" },
                  { IconList: IconStars, label: "Recien importado" },
                  { IconList: IconStars, label: "Aire Acondicionador" },
                  { IconList: IconStars, label: "No se Moja" },
                ]}
                title="Puntuaciones"
              />
            </SimpleGrid>
          </VStack>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]}>
          <StickyBox offsetBottom={20} offsetTop={20}>
            <VStack align="inherit"></VStack>
          </StickyBox>
        </GridItem>
        <GridItem colSpan={12}>
          <MorePost />
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};
