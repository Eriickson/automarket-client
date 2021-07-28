import { InputControl } from "@/components";
import React, { FC } from "react";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Box, Button, Checkbox, Flex, Tag, VStack } from "@chakra-ui/react";

interface NewNumberPhoneFormProps {
  onClose(): void;
}

export const NewNumberPhoneForm: FC<NewNumberPhoneFormProps> = ({ onClose }) => {
  const { register, getValues, setValue, setFocus } = useFormContext();
  const { append } = useFieldArray({ name: "numberPhone" });

  return (
    <Box>
      <VStack alignItems="stretch" mb="5">
        <InputControl label="Título" {...register("title")} />
        <InputControl label="Valor" {...register("value")} />
        <Checkbox {...register("hasWhatsapp")} colorScheme="whatsapp">
          <Tag colorScheme="whatsapp">Cuenta con Whatsapp</Tag>
        </Checkbox>
      </VStack>
      <Flex justifyContent="flex-end">
        <Button mr="2" variant="outline" onClick={onClose}>
          Cerrar
        </Button>
        <Button
          colorScheme="pri"
          onClick={() => {
            append({ title: getValues("title"), hasWhatsapp: getValues("hasWhatsapp"), value: getValues("value") });
            setValue("title", null);
            setValue("value", null);
            setFocus("title");
          }}
        >
          Guardar contacto
        </Button>
      </Flex>
    </Box>
  );
};
