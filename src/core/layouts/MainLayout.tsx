import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { MainHeader, MainFooter } from "@/components";
import { TransitionPageFade } from "../animations";

export const MainLayout: FC = ({ children }) => {
  return (
    <TransitionPageFade>
      <Box>
        <MainHeader />
        <Box py="2" bgColor="gray.50" minH="100vh">
          <Container>{children}</Container>
        </Box>
        <MainFooter />
      </Box>
    </TransitionPageFade>
  );
};
