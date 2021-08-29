import { InputControl } from "@/components";
import { Box, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const RequestProfessionalAgencyForm: FC = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <Box mb="2">
          <InputControl inputProps={{ size: "sm", placeholder: "Tu correo electrónico" }} name="email" />
        </Box>
        <Button colorScheme="pri" size="sm" w="full">
          Solicitar
        </Button>
      </form>
    </FormProvider>
  );
};
