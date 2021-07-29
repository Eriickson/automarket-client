import { InputControl, LabelInput, Select } from "@/components";
import { IOption } from "@/shared";
import { Box, Button, Flex, Textarea, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UploadAttachments } from "./UploadAttachments";

const options: IOption[] = [
  {
    value: 1,
    label: "Solicitud de plan",
  },
  {
    value: 2,
    label: "Dar una queja",
  },
  {
    value: 3,
    label: "Retroalimentación",
  },
  {
    value: 5,
    label: "Reportar fallo",
  },
  {
    value: 0,
    label: "Otros",
  },
];

export const ContactUsForm: FC = () => {
  const methods = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack alignItems="stretch" spacing={3}>
          <InputControl isRequired label="Nombre" name="name" />
          <InputControl isRequired label="Apellido" name="lastname" />
          <InputControl isRequired label="Número telefónico" name="numberPhone" />
          <Select isRequired isSearchable={false} label="Asunto" name="subject" options={options} />
          <UploadAttachments />
          <Box>
            <LabelInput isRequired label="Cómo podemos ayudarte?" />
            <Textarea
              _focus={{ borderWidth: "2px", borderColor: "pri.500" }}
              minH="32"
              placeholder="Describe tu me mensaje"
              px="3"
              resize="none"
              rounded="sm"
              shadow="sm"
            />
          </Box>
          <Flex justifyContent="flex-end">
            <Button colorScheme="pri" type="submit">
              Enviar
            </Button>
          </Flex>
        </VStack>
      </form>
    </FormProvider>
  );
};
