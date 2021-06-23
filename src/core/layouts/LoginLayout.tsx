import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { IconHelp, IconHome } from "@tabler/icons";
import { MainFooter } from "@/components";
import { AutomarketRDLogo } from "../../assets";
import Link from "next/link";
import { TransitionPageFade } from "@/animations";

export const LoginLayout: FC = ({ children }) => {
  return (
    <TransitionPageFade>
      <Box bgColor="gray.50" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
        <Box bgColor="white" py="6" shadow="sm">
          <Container display="flex" alignItems="center" justifyContent="space-between">
            <Link href="/">
              <Box cursor="pointer" >
                <IconHome />
              </Box>
            </Link>
            <Link href="/">
              <Box w="48" cursor="pointer">
                <AutomarketRDLogo />
              </Box>
            </Link>
            <Box>
              <IconHelp />
            </Box>
          </Container>
        </Box>
        <Container>{children}</Container>
        <MainFooter />
      </Box>
    </TransitionPageFade>
  );
};
