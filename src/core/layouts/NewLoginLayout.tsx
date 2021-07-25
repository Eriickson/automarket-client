import { AutomarketRDLogo } from "@/assets";
import { Text, Box, Button } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { LegalFooter } from "../components/footers/LegalFooter";
import { AsideLeft } from "../templates/login/signup/home/AsideLeft";

interface NewLoginLayoutProps {
  ButtonRight?: ReactElement;
}

export const NewLoginLayout: FC<NewLoginLayoutProps> = ({ children }) => {
  return (
    <Box bg="gray.100" display="flex" flexDir="column" minHeight="100vh">
      <Box alignItems="stretch" display="flex" flex="1">
        <AsideLeft />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="space-between">
          <Box
            alignItems="center"
            bg="white"
            display="flex"
            justifyContent="space-between"
            px={[3, null, 6, 10]}
            py={4}
            shadow="sm"
            w="full"
          >
            <Box w={[56, null, null, 44, 64]}>
              <AutomarketRDLogo />
            </Box>
            <Button colorScheme="pri">Inicia Sesión</Button>
          </Box>
          <Box h="auto" maxW={[null, null, null, "max-content"]} pl={[3, null, 6, 10, 8]} pr={[3, null, 6, 0]}>
            <Text
              color="pri.600"
              fontSize={["3xl", null, "4xl", "5xl", "6xl"]}
              fontWeight="black"
              lineHeight={1}
              mb={8}
            >
              Bienvenido de nuevo
              <Text color="gray.800" fontSize={["xl", null, "2xl", "3xl"]}>
                Regístrate para continuar
              </Text>
            </Text>
            <Box>{children}</Box>
          </Box>
          <Box h="20"></Box>
        </Box>
      </Box>
      <Box alignItems="center" bgColor="white" display="flex" h="20">
        <LegalFooter />
      </Box>
    </Box>
  );
};
