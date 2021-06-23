import React from "react";
import { Box, Container, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";
import { AutomarketRDLogo, AutomarketRDIsotipo } from "../../../assets";
import { NavBar } from "./NavBar";
import { SocialMedias } from "./SocialMedias";
import { LegalFooter } from "./LegalFooter";

export const MainFooter = () => {
  return (
    <Box bg="white" py="8" shadow="sm" borderBottomWidth="1px">
      <Container >
        <SimpleGrid columns={12} gap={5} mb={[3.5]}>
          <GridItem colSpan={[6, null, 3]}>
            <Box w="12">
              <AutomarketRDIsotipo />
            </Box>
          </GridItem>
          <GridItem display={["none", null, "block"]} colSpan={6}>
            <NavBar />
          </GridItem>
          <GridItem colSpan={[6, null, 3]}>
            <SocialMedias />
          </GridItem>
        </SimpleGrid>
        <Box display={[null, null, "none"]}>
          <NavBar />
        </Box>
      </Container>
      <Divider my="6" />
      <LegalFooter />
    </Box>
  );
};
