import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { AutomarketRDLogo } from "../../../assets";
import { Button } from "../Button";

export const MainHeader = () => {
  return (
    <Box py="6" shadow="sm" borderBottomWidth="1px">
      <Container maxW="container.2xl" display="flex" justifyContent="space-between">
        <Box w="56">
          <AutomarketRDLogo />
        </Box>
        <Box>
          <Button colorScheme="pri" variant="outline" mr="2">
            Iniciar Sesión
          </Button>
          <Button colorScheme="pri">Regístrate</Button>
        </Box>
      </Container>
    </Box>
  );
};
