import React, { FC } from "react";
import { Box, Container, HStack, Text, Divider, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Headroom from "react-headroom";

import { AutomarketRDLogo } from "../../../assets";
// import { MainMenu } from "./MainMenu";
import styled from "@emotion/styled";
import { Breadcrumb } from "..";
import { useUIContext } from "@/context";
import { SessionLogin } from "./SessionLogin";
import { SessionStarted } from "./SessionStarted";
import { useSelector } from "@/store";

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
    url: "/pricing/plans",
    label: "Precios",
  },
  {
    url: "/agency/searcher",
    label: "Agencías",
  },
];

export const MainHeader: FC = () => {
  const { breadcrumbs } = useUIContext();
  const { isAuth } = useSelector(store => store.auth);

  return (
    <StyledMainHeaderWrapper>
      <Headroom>
        <Box bg="white" borderBottomWidth="1px" pb={breadcrumbs.show ? 1.5 : [2, 4]} pt={[2, 4]} shadow="sm">
          <Container>
            <SimpleGrid alignItems="center" columns={12}>
              <GridItem colSpan={3}>
                <Link href="/">
                  <a>
                    <Box cursor="pointer" w="56">
                      <AutomarketRDLogo />
                    </Box>
                  </a>
                </Link>
              </GridItem>
              <GridItem colSpan={6}>
                <HStack display={["none", null, null, "flex"]} justifyContent="center">
                  {NavBarItems.map((item, i) => (
                    <Box key={i}>
                      <Link href={item.url}>
                        <a>
                          <Text
                            _hover={{ color: "pri.500" }}
                            cursor="pointer"
                            fontWeight="medium"
                            p="1"
                            size="lg"
                            transition="150ms"
                          >
                            {item.label}
                          </Text>
                        </a>
                      </Link>
                    </Box>
                  ))}
                </HStack>
              </GridItem>
              <GridItem colSpan={3}>
                <Flex justifyContent="flex-end">{isAuth ? <SessionStarted /> : <SessionLogin />}</Flex>
              </GridItem>
            </SimpleGrid>
          </Container>
          {breadcrumbs.show && (
            <>
              <Divider mb="1" mt="6" />
              <Breadcrumb />
            </>
          )}
        </Box>
      </Headroom>
    </StyledMainHeaderWrapper>
  );
};
