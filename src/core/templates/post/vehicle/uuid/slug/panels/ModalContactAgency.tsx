import React, { FC } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  Box,
  Divider,
} from "@chakra-ui/react";

export const ModalContactAgency: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="pri" w="full" onClick={onOpen}>
        Contactar
      </Button>
      <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Contactos de la Agencía</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="2">
            <Box>
              <Stat>
                <StatLabel>Oficina Principal</StatLabel>
                <StatNumber fontSize="xl">+1 (829) 816-0959</StatNumber>
              </Stat>
              <Divider my="2" />
              <Stat>
                <StatLabel>Alerta principal</StatLabel>
                <StatNumber fontSize="xl">+1 (829) 849-2695</StatNumber>
              </Stat>
            </Box>
            {/* <List spacing={3}>
              <ListItem>
                <ListIcon as={EmailIcon} color="gray.600" />
                erickson01d@gmail.com
              </ListItem> */}
            {/* <ListItem>
                <ListIcon as={EmailIcon} color="gray.600" />
                erickson01d@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color="gray.600" />
                Principal: +1 (829) 816-0959
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color="gray.600" />
                Principal: +1 (829) 816-0959
              </ListItem> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
