import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";

// My Components
import { MainLayout } from "@/layouts";
import { Searcher } from "./searcher/Searcher";
import { LoginBannerBottom } from "./BannersBottom";
import { RecientPosts } from "./recientPosts/RecientPosts";
import { CoverMain } from "./coverMain/CoverMain";
import Benefit from "./Benefit";
import { useSelector } from "@/store";

export const IndexTemplate: FC = () => {
  const { isAuth } = useSelector(store => store.auth);
  return (
    <MainLayout>
      <VStack align="stretch">
        <CoverMain />
        <Searcher />
        <Benefit />
        <RecientPosts />
        {!isAuth && <LoginBannerBottom />}
      </VStack>
    </MainLayout>
  );
};
