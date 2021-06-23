import React, { FC } from "react";

import { Button, Box, FormControl, FormLabel, FormHelperText, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { InputControl } from "@/components";

interface SignInFormProps {
  onSubmit(values: any): void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb="5">
        <InputControl
          label="Correo electrónico"
          inputProps={{ placeholder: "Correo electrónico" }}
          name="email"
          control={control}
        />
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input colorScheme="red" type="email" rounded="sm" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Box>
      <Button type="submit" colorScheme="pri" w="full">
        Iniciar Sesión
      </Button>
    </form>
  );
};
