import { InputControl, LabelInput } from "@/components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Radio,
  RadioGroup,
  VStack,
  Button,
  Stack,
  useDisclosure,
  Badge,
  Box,
} from "@chakra-ui/react";
import React, { useState, FC } from "react";
import { useFieldArray, FormProvider, useForm } from "react-hook-form";

export const NewEmailModal: FC = () => {
  const methods = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [service, setService] = useState("gmail");
  const { prepend, fields } = useFieldArray({ control: methods.control, name: "emails" });

  function generateNewEmmail() {
    const [title, email] = methods.getValues(["emailTitle", "titleNewEmail"]);
    const newEmail = { title, email, service };

    prepend(newEmail, { focusName: "emailTitle" });
    methods.reset({ emailTitle: "", titleNewEmail: "" });
  }

  console.log({ fields });

  return (
    <FormProvider {...methods}>
      <Button colorScheme="pri" onClick={onOpen}>
        Correo Electrónico
      </Button>
      <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader px="4">Nuevo correo electrónico</ModalHeader>
          <ModalBody px="4">
            <VStack alignItems="stretch">
              <InputControl isRequired label="Título" name="emailTitle" />
              <InputControl isRequired label="Correo electrónico" name="titleNewEmail" />
              <Box>
                <LabelInput label="Servicio" />
                <RadioGroup value={service} onChange={setService}>
                  <Stack direction="row">
                    <Radio cursor="pointer" value="gmail">
                      <Badge bgColor="red.200" color="red.600" cursor="pointer" ml="-1">
                        Gmail
                      </Badge>
                    </Radio>
                    <Radio cursor="pointer" value="outlook">
                      <Badge bgColor="blue.300" color="blue.700" cursor="pointer" ml="-1" rounded="base">
                        Outlook
                      </Badge>
                    </Radio>
                    <Radio cursor="pointer" value="other">
                      <Badge bgColor="gray.300" color="gray.600" cursor="pointer" ml="-1" rounded="base">
                        Otro
                      </Badge>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter px="4">
            <Button colorScheme="danger" mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" onClick={generateNewEmmail}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
