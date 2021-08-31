import React, { FC } from "react";
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
import { PrimaryCard } from "@/components";
import { IconBuildingStore, IconCar } from "@tabler/icons";
import { VehiclesPanel } from "../tabs/panels";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </PrimaryCard>
        </VStack>
      </Accordion>
    </div>
  );
};
