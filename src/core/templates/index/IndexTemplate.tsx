import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";

// My Components
import { MainLayout } from "@/layouts";
import { Searcher } from "./searcher/Searcher";
import { LoginBannerBottom } from "./BannersBottom";
import { RecientPosts } from "./recientPosts/RecientPosts";
import { CoverMain } from "./coverMain/CoverMain";

export const IndexTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <CoverMain />
        <Searcher />
        <RecientPosts />
        <LoginBannerBottom />
      </VStack>
    </MainLayout>
  );
};
