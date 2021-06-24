import React, { FC } from "react";

import { VStack } from "@chakra-ui/react";

import { MainLayout } from "@/layouts";
import { Searcher } from "./searcher/Searcher";
import { LoginBannerBottom } from "./BannersBottom";
import { RecientPosts } from "./recientPosts/RecientPosts";

export const IndexTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <Searcher />
        <RecientPosts />
        <LoginBannerBottom />
      </VStack>
    </MainLayout>
  );
};
