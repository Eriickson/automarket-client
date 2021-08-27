import { Avatar, Box, Button } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import React, { FC } from "react";
import { MainMenu } from "./MainMenu";
import Link from "next/link";

export const SessionLogin: FC = () => {
  return (
    <Box alignItems="center" display="flex">
      <Link href="/login/signup">
        <a>
          <Button colorScheme="pri" display={["none", "block"]}>
            Regístrate
          </Button>
        </a>
      </Link>
      <Button colorScheme="pri" display={["none", null, "block"]} ml="2.5" variant="outline" onClick={() => signIn()}>
        Iniciar Sesión
      </Button>
      <Avatar display="none" name="Kola Tioluwani" shadow="md" src="https://bit.ly/tioluwani-kolawole" />
      <Box display={[null, null, "none"]} h="max-content" ml="2.5">
        <MainMenu />
      </Box>
    </Box>
  );
};
