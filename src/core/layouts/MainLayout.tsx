import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { MainHeader, MainFooter } from "@/components";

export const MainLayout: FC = ({ children }) => {
  return (
    <Box>
      <MainHeader />
      <Box bgColor="gray.50" minH="100vh">
        <Container maxW="container.2xl">{children}</Container>
      </Box>
      <MainFooter />
    </Box>
  );
};
