import { InputControl, LabelInput, InputMask } from "@/components";
import { Contact } from "@/shared";
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
import React, { useState, FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
interface NewPhoneNumbersProps {
  getNewPhoneNumber(newPhoneNumber: Contact): void;
}

export const NewPhoneNumbers: FC<NewPhoneNumbersProps> = ({ getNewPhoneNumber }) => {
  const methods = useForm();
  const [use, setUse] = useState(["calls"]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function generateNewPhoneNumber() {
    const [label, value] = methods.getValues(["title", "value"]);

    getNewPhoneNumber({ label, value });
    methods.setFocus("title");
    methods.reset(["title", "value"]);
  }

  return (
    <FormProvider {...methods}>
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
              {/* <Box>
                <LabelInput label="Uso" />
                <CheckboxGroup
                  colorScheme="pri"
                  defaultValue={["calls"]}
                  onChange={value => setUse(value.map(value => String(value)))}
                >
                  <HStack>
                    <Checkbox value="calls">
                      <Badge colorScheme="green" ml="-1">
                        Llamadas
                      </Badge>
                    </Checkbox>
                    <Checkbox value="whatsapp">
                      <Badge colorScheme="whatsapp" ml="-1">
                        Whatsapp
                      </Badge>
                    </Checkbox>
                    <Checkbox value="telegram">
                      <Badge colorScheme="telegram" ml="-1">
                        Telegram
                      </Badge>
                    </Checkbox>
                  </HStack>
                </CheckboxGroup>
              </Box> */}
            </VStack>
          </ModalBody>
          <ModalFooter px="4">
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" onClick={generateNewPhoneNumber}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
