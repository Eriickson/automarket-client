import React, { FC } from "react";

import { LoginLayout } from "@/layouts";
import {
  InputControl,
  PrimaryCard,
  Select,
  SelectProfileImage,
  SelectProfileImageProvider,
  LabelInput,
} from "@/components";
import { VStack, Heading, Box, Text, Divider, Button } from "@chakra-ui/react";

import { useForm, FormProvider } from "react-hook-form";

export const RegisterTemplate: FC = () => {
  const methods = useForm();
  return (
    <LoginLayout>
      <FormProvider {...methods}>
        <PrimaryCard>
          <Box maxW="lg" mx="auto">
            <Box mb="4">
              <Heading size="md">Datos Personales</Heading>
              <Text color="gray.500" lineHeight="normal" size="md">
                Completa los campos que se te muestran a continuación con tus datos.
              </Text>
            </Box>
            <VStack align="inherit">
              <Box>
                <LabelInput isRequired label="Imagen de perfil" />
                <SelectProfileImageProvider>
                  <SelectProfileImage
                    onChange={value => {
                      console.log(value);
                    }}
                  />
                </SelectProfileImageProvider>
              </Box>
              <InputControl isRequired label="Nombre" name="name" />
              <InputControl isRequired label="Apellido" name="lastname" />
              <Box display="flex" flexDirection={["column", null, "row"]}>
                <Box flex="1" mb={[2, null, 0]} mr={[null, null, 3.5]}>
                  <Select isRequired label="Provincia" name="province" options={[]} />
                </Box>
                <Box flex="1">
                  <Select isRequired label="Municipio" name="municipality" options={[]} />
                </Box>
              </Box>
              <InputControl isRequired inputProps={{ type: "date" }} label="Fecha de Nacimiento" name="lastname" />
            </VStack>
            <Divider my="5" />
            <Box mb="4">
              <Heading size="md">Datos de cuenta</Heading>
              <Text color="gray.500" lineHeight="normal" size="md">
                Completa los campos que se te muestran a continuación con tus datos.
              </Text>
            </Box>
            <VStack align="inherit" mb="3">
              <InputControl isRequired label="Nombre de usuario" name="name" />
              <InputControl isRequired label="Correo electrónico" name="lastname" />
              <InputControl isRequired label="Contraseña" name="lastname" />
              <InputControl isRequired label="Confirma tu contraseña" name="lastname" />
            </VStack>
            <Box display="flex" justifyContent="flex-end">
              <Button colorScheme="success">Crear cuenta</Button>
            </Box>
          </Box>
        </PrimaryCard>
      </FormProvider>
    </LoginLayout>
  );
};
