import { Button, useDisclosure } from "@chakra-ui/react";
import { IconFilter } from "@tabler/icons";
import React, { FC, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SeacherVehicleAccordion } from "./SeacherVehicleAccordion/SeacherVehicleAccordion";

export const FilterVehicleDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        size="sm"
        aria-label="Abrir el filtro"
        colorScheme="pri"
        pl="1"
        leftIcon={<IconFilter />}
      >
        Filtrar
      </Button>
      <Drawer isOpen={isOpen} size="sm" placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent px="0">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <SeacherVehicleAccordion />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue">Aplicar Filtro</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
