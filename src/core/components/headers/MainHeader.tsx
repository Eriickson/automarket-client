import React, { FC } from "react";
import { Box, Container, Avatar, Button, HStack, Text, Divider } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import Link from "next/link";
import Headroom from "react-headroom";

import { AutomarketRDLogo } from "../../../assets";
import { MainMenu } from "./MainMenu";
import styled from "@emotion/styled";
import { IconChevronRight, IconHome } from "@tabler/icons";
import { Breadcrumb } from "./Breadcrumb";

const StyledMainHeaderWrapper = styled.header`
  width: 100%;
  .headroom {
    z-index: 30 !important;
  }
`;

const NavBarItems = [
  {
    url: "/",
    label: "Inicio",
  },
  {
    url: "/post/vehicle/searcher",
    label: "Buscar",
  },
  {
    url: "/agency/all",
    label: "Agencías",
  },
];

export const MainHeader: FC = () => {
  return (
    <StyledMainHeaderWrapper>
      <Headroom>
        <Box bg="white" borderBottomWidth="1px" pt={[4, 6]} pb="1.5" shadow="sm">
          <Container alignItems="center" display="flex" justifyContent="space-between">
            <Link href="/">
              <a>
                <Box cursor="pointer" w="56">
                  <AutomarketRDLogo />
                </Box>
              </a>
            </Link>
            <HStack display={["none", null, null, "flex"]}>
              {NavBarItems.map((item, i) => (
                <Box key={i}>
                  <Link href={item.url}>
                    <Text
                      _hover={{ color: "pri.500" }}
                      cursor="pointer"
                      fontWeight="medium"
                      p="1"
                      size="lg"
                      transition="150ms"
                    >
                      <a>{item.label}</a>
                    </Text>
                  </Link>
                </Box>
              ))}
            </HStack>
            <Box alignItems="center" display="flex">
              <Link href="/login/signup">
                <a>
                  <Button colorScheme="pri" display={["none", "block"]}>
                    Regístrate
                  </Button>
                </a>
              </Link>
              <Button
                colorScheme="pri"
                display={["none", null, "block"]}
                ml="2.5"
                variant="outline"
                onClick={() => signIn()}
              >
                Iniciar Sesión
              </Button>
              <Avatar display="none" name="Kola Tioluwani" shadow="md" src="https://bit.ly/tioluwani-kolawole" />
              <Box display={[null, null, "none"]} h="max-content" ml="2.5">
                <MainMenu />
              </Box>
            </Box>
          </Container>
          <Divider mt="6" mb="1" />
          <Breadcrumb />
        </Box>
      </Headroom>
    </StyledMainHeaderWrapper>
  );
};
