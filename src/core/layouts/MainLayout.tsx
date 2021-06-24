import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { MainHeader, MainFooter } from "@/components";
import { TransitionPageFade } from "../animations";

export const MainLayout: FC = ({ children }) => {
  return (
    <TransitionPageFade>
      <Box minH="100vh" display="flex" flexDirection="column" justifyContent="space-between" >
        <MainHeader />
        <Box flex="1" pt="2" pb="5" display="flex" alignItems="center" bgColor="gray.50">
          <Container>{children}</Container>
        </Box>
        <MainFooter />
      </Box>
    </TransitionPageFade>
  );
};
