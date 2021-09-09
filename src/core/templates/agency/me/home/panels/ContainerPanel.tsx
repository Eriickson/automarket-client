import React, { FC } from "react";

// Packages
import {
  VStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  chakra,
} from "@chakra-ui/react";
import { IconBuildingStore, IconCar } from "@tabler/icons";

// My Components
import { PrimaryCard } from "@/components";
import { VehiclesPanel } from "../tabs/panels";
import { BranchesTable } from "./branches/BranchesTable";

export const ContainerPanel: FC = () => {
  return (
    <div>
      <Accordion allowMultiple defaultIndex={[0]}>
        <VStack alignItems="stretch">
          <PrimaryCard noPadding notBorderTop>
            <AccordionItem border="none">
              <h2>
                <AccordionButton _focus={{ shadow: "none" }}>
                  <Box flex="1" textAlign="left">
                    <Text display="flex" fontSize="lg" fontWeight="medium">
                      <IconCar />
                      <chakra.p ml="2">Vehículos</chakra.p>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel mt="1" p="0" pb={4}>
                <VehiclesPanel />
              </AccordionPanel>
            </AccordionItem>
          </PrimaryCard>
          <PrimaryCard noPadding notBorderTop>
            <AccordionItem border="none">
              <h2>
                <AccordionButton _focus={{ shadow: "none" }}>
                  <Box flex="1" textAlign="left">
                    <Text display="flex" fontSize="lg" fontWeight="medium">
                      <IconBuildingStore />
                      <chakra.p ml="2">Sucursales</chakra.p>
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <BranchesTable />
              </AccordionPanel>
            </AccordionItem>
          </PrimaryCard>
        </VStack>
      </Accordion>
    </div>
  );
};
