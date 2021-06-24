import React from "react";

import { MainLayout } from "@/layouts";
import { Searcher } from "./searcher/Searcher";
import { LoginBannerBottom } from "./BannersBottom";
import { VStack } from "@chakra-ui/react";

export const IndexTemplate = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <Searcher />
        <LoginBannerBottom />
      </VStack>
    </MainLayout>
  );
};
