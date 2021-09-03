import { InputControl, LabelInput, InputMask } from "@/components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  VStack,
  Button,
  useDisclosure,
  Badge,
  CheckboxGroup,
  HStack,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

export const NewPhoneNumbers: FC = () => {
  const [value, setValue] = React.useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="pri" onClick={onOpen}>
        Número telefónico
      </Button>
      <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader px="4">Nuevo Número telefónico</ModalHeader>
          <ModalBody px="4">
            <VStack alignItems="stretch">
              <InputControl isRequired label="Título" name="title" />
              <Box>
                <LabelInput isRequired label="Número telefónico" />
                <InputMask mask="+1 (999) 999-9999" name="value" />
              </Box>
              <Box>
                <LabelInput label="Uso" />
                <CheckboxGroup colorScheme="pri" defaultValue={["naruto", "kakashi"]}>
                  <HStack>
                    <Checkbox value="kakashi">
                      <Badge colorScheme="green" ml="-1">
                        Llamadas
                      </Badge>
                    </Checkbox>
                    <Checkbox value="naruto">
                      <Badge colorScheme="whatsapp" ml="-1">
                        Whatsapp
                      </Badge>
                    </Checkbox>
                    <Checkbox value="sasuke">
                      <Badge colorScheme="telegram" ml="-1">
                        Telegram
                      </Badge>
                    </Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter px="4">
            <Button colorScheme="danger" mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri">Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
