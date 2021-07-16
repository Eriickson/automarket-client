import React, { FC } from "react";

import { Button, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import { FormSignUpResolver, IFormSignUpOnSubmit } from "@/validations";

import { InputControl } from "@/components";

interface SignUpForm {
  onSubmit(values: IFormSignUpOnSubmit): void;
}

export const SignUpForm: FC<SignUpForm> = ({ onSubmit }) => {
  const methods = useForm({ resolver: FormSignUpResolver });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box>
          <Box mb="5">
            <InputControl
              isRequired
              inputProps={{ placeholder: "Correo electrónico" }}
              label="Correo electrónico"
              name="email"
              size="lg"
            />
          </Box>
          <Button colorScheme="pri" size="lg" type="submit" w="full">
            Registrarse
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};
