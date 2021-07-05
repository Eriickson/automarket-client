import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AutomarketRDLogo } from "../../../assets";
import Link from "next/link";
import { useWindowSize } from "@/hooks";


export const MainMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { height } = useWindowSize();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme="pri"
        borderRadius="sm"
        aria-label="Abrir el menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
        motionPreset="scale"
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.50" h={height}>
          <DrawerHeader bg="white" shadow="sm" borderBottomWidth="1px">
            <Box w="44">
              <AutomarketRDLogo />
            </Box>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" justifyContent="center">
            <Link href="/login/signin">
              <Button w="full" colorScheme="pri" mb="4">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/login/signup">
              <Button w="full" colorScheme="pri" mb="4">
                Regístrate
              </Button>
            </Link>
            <Link href="/search/vehicles">
              <Button w="full" colorScheme="pri" mb="4">
                Buscar
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter padding="0">
            <Button w="full" colorScheme="red" onClick={onClose}>
              Cerrar Menú
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
