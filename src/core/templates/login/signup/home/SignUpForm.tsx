import React, { FC } from "react";

import { Button, Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputControl } from "@/components";

export const SignUpForm: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Box>
        <Box mb="5">
          <InputControl
            isRequired
            inputProps={{ placeholder: "Correo electrónico" }}
            label="Correo electrónico"
            name="email"
          />
        </Box>
        <Button colorScheme="pri" w="full">
          Registrarse
        </Button>
      </Box>
    </FormProvider>
  );
};
