import React, { FC } from "react";

// Packages
import { Button, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

// My Elements
import { FormSignInResolver, IFormSignInOnSubmit } from "@/validations";

// My Components
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
            isRequired
            defaultValue="erickson01d"
            inputProps={{ placeholder: "Correo electrónico", size: "lg" }}
            label="Correo electrónico"
            name="identifier"
          />
          <InputControl
            isRequired
            defaultValue="123456789t"
            inputProps={{ placeholder: "Contraseña", size: "lg" }}
            label="Contraseña"
            name="password"
          />
        </Box>
        <Button colorScheme="pri" size="lg" type="submit" w="full">
          Iniciar Sesión
        </Button>
      </form>
    </FormProvider>
  );
};
