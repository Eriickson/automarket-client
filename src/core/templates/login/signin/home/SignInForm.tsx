import React, { FC } from "react";

import { Button, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { FormSignInResolver, IFormSignInOnSubmit } from "@/validations";

import { InputControl } from "@/components";

interface SignInFormProps {
  onSubmit(values: IFormSignInOnSubmit): void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const methods = useForm({ resolver: FormSignInResolver });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box mb="5">
          <InputControl
            label="Correo electrónico"
            inputProps={{ placeholder: "Correo electrónico" }}
            name="identifier"
            isRequired
            defaultValue="erickson01d@gmail.com"
          />
          <InputControl
            label="Contraseña"
            inputProps={{ placeholder: "Contraseña" }}
            name="password"
            isRequired
            defaultValue="123456789e"
          />
        </Box>
        <Button type="submit" colorScheme="pri" w="full">
          Iniciar Sesión
        </Button>
      </form>
    </FormProvider>
  );
};
