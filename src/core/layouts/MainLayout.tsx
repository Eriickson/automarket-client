import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { MainHeader, MainFooter, BannerBottom } from "@/components";
import { TransitionPageFade } from "../animations";

export const MainLayout: FC = ({ children }) => {
  return (
    <TransitionPageFade>
      <Box display="flex" flexDirection="column" justifyContent="space-between" minH="100vh">
        <MainHeader />
        <Box bgColor="gray.50" display="flex" flex="1" pb="5" pt="2">
          <Container>{children}</Container>
          <BannerBottom />
        </Box>
        <MainFooter />
      </Box>
    </TransitionPageFade>
  );
};
