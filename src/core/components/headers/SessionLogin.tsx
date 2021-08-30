import { Avatar, Box, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { MainMenu } from "./MainMenu";
import Link from "next/link";
import { useRouter } from "next/router";

export const SessionLogin: FC = () => {
  const router = useRouter();

  return (
    <Box alignItems="center" display="flex">
      <Link href={{ pathname: "/login/signin", query: { callbackUrl: router.asPath } }}>
        <a>
          <Button colorScheme="pri" display={["none", null, "block"]} variant="outline">
            Iniciar Sesión
          </Button>
        </a>
      </Link>
      <Link href="/login/signup">
        <a>
          <Button colorScheme="pri" display={["none", "block"]} ml="2.5">
            Regístrate
          </Button>
        </a>
      </Link>

      <Avatar display="none" name="Kola Tioluwani" shadow="md" src="https://bit.ly/tioluwani-kolawole" />
      <Box display={[null, null, "none"]} h="max-content" ml="2.5">
        <MainMenu />
      </Box>
    </Box>
  );
};
