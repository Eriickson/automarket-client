import React, { FC, useEffect, useRef } from "react";

import { useRouter } from "next/router";

// Packages
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IconFilter } from "@tabler/icons";

// My Components
import { SeacherVehicleAccordion } from "./SeacherVehicleAccordion/SeacherVehicleAccordion";

export const FilterVehicleDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { query } = useRouter();

  useEffect(() => {
    query.advancedSearch && query.advancedSearch == "true" && onOpen();
  }, []);
  return (
    <>
      <Button
        aria-label="Abrir el filtro"
        colorScheme="pri"
        leftIcon={<IconFilter />}
        pl="1"
        ref={btnRef}
        size="sm"
        onClick={onOpen}
      >
        Filtrar
      </Button>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent px="0">
          <DrawerCloseButton />
          <DrawerHeader mb="2">Encuentra tu vehículo</DrawerHeader>
          <DrawerBody px="0">
            <SeacherVehicleAccordion />
          </DrawerBody>
          <DrawerFooter>
            <Button mr={3} variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri">Aplicar Filtro</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
