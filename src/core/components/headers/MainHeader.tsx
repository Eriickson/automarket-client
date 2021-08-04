import React, { FC } from "react";
import { Box, Container, HStack, Text, Divider, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Headroom from "react-headroom";

import { AutomarketRDLogo } from "../../../assets";
import { MainMenu } from "./MainMenu";
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
    url: "/agency/searcher",
    label: "Agencías",
  },
];

export const MainHeader: FC = () => {
  const { breadcrumb } = useUIContext();
  const { isAuth } = useSelector(store => store.auth);
  console.log(isAuth);

  return (
    <StyledMainHeaderWrapper>
      <Headroom>
        <Box bg="white" borderBottomWidth="1px" pb={breadcrumb.show ? 1.5 : [4, 6]} pt={[4, 6]} shadow="sm">
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
                <HStack justifyContent="center" display={["none", null, null, "flex"]}>
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
              </GridItem>
              <GridItem colSpan={3}>
                <Flex justifyContent="flex-end">{isAuth ? <SessionStarted /> : <SessionLogin />}</Flex>
              </GridItem>
            </SimpleGrid>
          </Container>
          {breadcrumb.show && (
            <>
              <Divider mb="1" mt="6" />
              <Breadcrumb items={breadcrumb.items} />
            </>
          )}
        </Box>
      </Headroom>
    </StyledMainHeaderWrapper>
  );
};
