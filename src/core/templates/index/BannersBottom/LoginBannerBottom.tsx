import React, { FC } from "react";

// NextJS
import Link from "next/link";

// Packages
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const LoginBannerBottom: FC = () => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.100"
      shadow="sm"
      p="12"
      borderTopWidth="2px"
      borderTopColor="pri.500"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading display="flex">
            <Text color="pri.600" mr="1.5">
              Ingresa
            </Text>
            a nuestra página
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Regístrate y crea tu agencía en línea completamente gratis para promocionar tus vehículos.
          </Text>
        </Box>
        <Box display="flex">
          <Link href="/login/signin">
            <Button
              size="lg"
              colorScheme="pri"
              variant="ghost"
              shadow="sm"
              borderWidth="1px"
              borderColor="gray.100"
              mr="2.5"
              display={["none", null, "block"]}
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/login/signup">
            <Button size="lg" colorScheme="pri" display={["none", "block"]}>
              Regístrate
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
