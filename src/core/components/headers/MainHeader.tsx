import React from "react";
import { Box, Container, Avatar, Button } from "@chakra-ui/react";
import { AutomarketRDLogo, AutomarketRDIsotipo } from "../../../assets";
import Link from "next/link";
import { MainMenu } from "./MainMenu";

export const MainHeader = () => {
  return (
    <Box py="6" shadow="sm" borderBottomWidth="1px">
      <Container display="flex" alignItems="center" justifyContent="space-between">
        {/* <Box w="56">
          <AutomarketRDLogo />
        </Box> */}
        <Box w="10">
          <AutomarketRDIsotipo />
        </Box>
        <Box display="flex" alignItems="center">
          <Link href="/login/signin">
            <Button colorScheme="pri" variant="outline" mr="2.5" display={["none", null, "block"]}>
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/login/signup">
            <Button colorScheme="pri" display={["none", "block"]}>
              Regístrate
            </Button>
          </Link>
          <Avatar display="none" shadow="md" name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
          <Box ml="2.5" display={[null, null, "none"]} h="max-content">
            <MainMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
