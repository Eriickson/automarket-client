import { InputControl, RadioGroup } from "@/components";
import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { Checkbox, Tag } from "@chakra-ui/react";

export const NewNumberPhoneForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <InputControl label="Título" name="title" />
        <InputControl label="Valor" name="value" />
        <Checkbox colorScheme="whatsapp" defaultIsChecked>
          <Tag colorScheme="whatsapp">Cuenta con Whatsapp</Tag>
        </Checkbox>
      </form>
    </FormProvider>
  );
};
