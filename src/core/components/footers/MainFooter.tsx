import React from "react";
import { Box, Container, SimpleGrid, GridItem, Divider, Text } from "@chakra-ui/react";
import { AutomarketRDLogo } from "../../../assets";
import { NavBar } from "./NavBar";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons";

export const MainFooter = () => {
  return (
    <Box py="8" shadow="sm" borderBottomWidth="1px">
      <Container maxW="container.2xl">
        <SimpleGrid columns={12} gap={5}>
          <GridItem colSpan={3}>
            <Box w="56">
              <AutomarketRDLogo />
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <NavBar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box height="full" display="flex" justifyContent="flex-end" alignItems="center">
              <Box
                ml="2.5"
                p="1"
                cursor="pointer"
                rounded="sm"
                color="gray.500"
                transition="250ms"
                _hover={{ color: "blue.500", bgColor: "blue.200" }}
              >
                <IconBrandFacebook />
              </Box>
              <Box
                ml="2.5"
                p="1"
                cursor="pointer"
                rounded="sm"
                color="gray.500"
                transition="250ms"
                _hover={{ color: "pink.500", bgColor: "pink.200" }}
              >
                <IconBrandInstagram />
              </Box>
              <Box
                ml="2.5"
                p="1"
                cursor="pointer"
                rounded="sm"
                color="gray.500"
                transition="250ms"
                _hover={{ color: "green.500", bgColor: "green.200" }}
              >
                <IconBrandWhatsapp />
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Divider my="6" />
      <Container maxW="container.2xl" display="flex" justifyContent="space-between">
        <Text color="gray.500" fontWeight="semibold">
          &copy; {new Date().getFullYear()} Automarket RD, Todos los derechos reservados.
        </Text>
        <Box display="flex" alignItems="center" color="gray.500">
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
    </Box>
  );
};
