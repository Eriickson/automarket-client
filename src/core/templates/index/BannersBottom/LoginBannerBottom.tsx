import React, { FC } from "react";

// NextJS
import Link from "next/link";

// Packages
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const LoginBannerBottom: FC = () => {
  return (
    <Box
      bg="white"
      borderColor="gray.100"
      borderTopColor="pri.500"
      borderTopWidth="2px"
      borderWidth="1px"
      p="12"
      shadow="sm"
    >
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Box>
          <Heading display="flex">
            <Text color="pri.500" mr="1.5">
              Ingresa
            </Text>
            a nuestra página
          </Heading>
          <Text color="gray.500" fontSize="lg">
            Regístrate y crea tu agencía en línea completamente gratis para promocionar tus vehículos.
          </Text>
        </Box>
        <Box display="flex">
          <Link href="/login/signin">
            <Button
              borderColor="gray.100"
              borderWidth="1px"
              colorScheme="pri"
              display={["none", null, "block"]}
              mr="2.5"
              shadow="sm"
              size="lg"
              variant="ghost"
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/login/signup">
            <Button colorScheme="pri" display={["none", "block"]} size="lg">
              Regístrate
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
