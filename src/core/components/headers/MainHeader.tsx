import React from "react";
import { Box, Container, Avatar, Button } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/client";
import Link from "next/link";

import { AutomarketRDLogo, AutomarketRDIsotipo } from "../../../assets";
import { MainMenu } from "./MainMenu";

export const MainHeader = () => {
  return (
    <Box py="6" shadow="sm" borderBottomWidth="1px">
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Box w="56" display={["none", "block"]}>
          <AutomarketRDLogo />
        </Box>
        <Box display={[null, "none"]} w="10">
          <AutomarketRDIsotipo />
        </Box>
        <Box display="flex" alignItems="center">
          <Link href="/login/signup">
            <Button colorScheme="pri" display={["none", "block"]}>
              Regístrate
            </Button>
          </Link>
          <Button
            colorScheme="pri"
            variant="outline"
            ml="2.5"
            display={["none", null, "block"]}
            onClick={() => signIn()}
          >
            Iniciar Sesión
          </Button>
          <Avatar display="none" shadow="md" name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
          <Box ml="2.5" display={[null, null, "none"]} h="max-content">
            <MainMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
