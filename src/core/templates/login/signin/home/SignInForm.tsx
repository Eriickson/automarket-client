import React, { FC } from "react";

import { Button, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import { InputControl } from "@/components";

interface SignInFormProps {
  onSubmit(values: any): void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mb="5">
          <InputControl
            label="Correo electrónico"
            inputProps={{ placeholder: "Correo electrónico" }}
            name="email"
            isRequired
            // defaultValue="Erickson01d@gmail.com"
          />
          <InputControl
            label="Correo electrónico"
            inputProps={{ placeholder: "Correo electrónico" }}
            name="emailx"
            isRequired
            // defaultValue="Erickson01d@gmail.com"
          />
        </Box>
        <Button type="submit" colorScheme="pri" w="full">
          Iniciar Sesión
        </Button>
      </form>
    </FormProvider>
  );
};
