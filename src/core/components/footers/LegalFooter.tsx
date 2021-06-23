import React from "react";
import Link from "next/link";
import { Box, Container, Text } from "@chakra-ui/react";

export const LegalFooter = () => {
  return (
    <Container display="flex" flexDirection={["column-reverse", null, "row"]} justifyContent="space-between">
      <Text color="gray.500" fontWeight="semibold" fontSize={["sm"]} lineHeight="4" textAlign="center">
        &copy; {new Date().getFullYear()} Automarket RD, Todos los derechos reservados.
      </Text>
      <Box display="flex" justifyContent="center" alignItems="center" color="gray.500">
        <Link href="">
          <Text cursor="pointer" fontWeight="semibold" _hover={{ color: "pri.400", textDecor: "underline" }}>
            Términos y condiciones
          </Text>
        </Link>
        <Text fontSize="xl" userSelect="none" mx="3">
          •
        </Text>
        <Link href="">
          <Text cursor="pointer" fontWeight="semibold" _hover={{ color: "pri.400", textDecor: "underline" }}>
            Políticas de privacidad
          </Text>
        </Link>
      </Box>
    </Container>
  );
};
