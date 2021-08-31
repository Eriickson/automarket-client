import {
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";

export const EditBranchInformation: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem py="1.5" onClick={onOpen}>
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
          <IconEdit size="1.25rem" strokeWidth={1.5} />
        </Box>
        Editar información
      </MenuItem>
      <Modal isCentered isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>
            <Text lineHeight="none">Editar Sucursal</Text>
            <Text fontSize="sm">Erickson Auto Import - Puñal, Santiago</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>JHola a todos</ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" ml={3}>
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
