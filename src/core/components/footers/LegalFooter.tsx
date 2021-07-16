import React, { FC } from "react";
import Link from "next/link";
import { Box, Container, Text } from "@chakra-ui/react";

export const LegalFooter: FC = () => {
  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection={["column-reverse", null, "row"]}
      justifyContent="space-between"
    >
      <Text color="gray.500" fontSize={["sm"]} fontWeight="semibold" lineHeight="4" textAlign="center">
        &copy; {new Date().getFullYear()} Automarket RD, Todos los derechos reservados.
      </Text>
      <Box alignItems="center" color="gray.500" display="flex" justifyContent="center">
        <Link href="/">
          <Text _hover={{ color: "pri.400", textDecor: "underline" }} cursor="pointer" fontWeight="semibold">
            Términos y condiciones
          </Text>
        </Link>
        <Text fontSize="xl" mx="3" userSelect="none">
          •
        </Text>
        <Link href="">
          <Text _hover={{ color: "pri.400", textDecor: "underline" }} cursor="pointer" fontWeight="semibold">
            Políticas de privacidad
          </Text>
        </Link>
      </Box>
    </Container>
  );
};
