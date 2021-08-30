import React from "react";
import { IconButton, useDisclosure, Button, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
        aria-label="Abrir el menu"
        borderRadius="sm"
        colorScheme="pri"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Menú</ModalHeader>
          <ModalBody>
            <Flex>
              <Button flex="1" mr="2">
                Regístrate
              </Button>
              <Button colorScheme="pri" flex="1" variant="ghost">
                Iniciar Sesión
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="danger" mr={3} variant="ghost" width="full" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
