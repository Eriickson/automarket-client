import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  MenuItem,
  Button,
  useDisclosure,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { IconNewSection } from "@tabler/icons";
import React, { FC } from "react";
import { NewSucursalForm } from "./NewSucursalForm";

export const NewSucursalDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <MenuItem colorScheme="teal" py="1.5" ref={btnRef} onClick={onOpen}>
        <Box
          alignItems="center"
          bgColor="pri.100"
          color="pri.500"
          display="flex"
          h="6"
          justifyContent="center"
          mr="1.5"
          w="6"
        >
          <IconNewSection size="1.25rem" strokeWidth={1.5} />
        </Box>
        Nueva Sucursal
      </MenuItem>
      <Drawer
        closeOnOverlayClick={false}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading size="md">Nueva Sucursal</Heading>
            <Text color="gray.400" fontSize="sm" fontWeight="normal" lineHeight="normal" pr="6">
              Crea una nueva sucursal rellenando el formulario que se muestra a continuación
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <NewSucursalForm onSubmit={onSubmit} />
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" form="form-new-sucursal" type="submit">
              Crear sucural
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
