import React, { FC } from "react";
import {
  InputControl,
  PrimaryCard,
  Select,
  SelectProfileImage,
  SelectProfileImageProvider,
  LabelInput,
} from "@/components";
import { Box, Divider, Button } from "@chakra-ui/react";

import { useForm, FormProvider } from "react-hook-form";
import { FormSession } from "./FormSession";

export const RegisterForm: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <PrimaryCard>
        <Box maxW="lg" mx="auto">
          <FormSession
            subtitle="Completa los campos que se te muestran a continuación con tus datos."
            title="Datos Personales"
          >
            <Box>
              <LabelInput isRequired label="Imagen de perfil" />
              <SelectProfileImageProvider>
                <SelectProfileImage
                  showAvatar
                  onChange={() => {
                    // console.log(value);
                  }}
                />
              </SelectProfileImageProvider>
            </Box>
            <InputControl isRequired inputProps={{ placeholder: "Nombre" }} label="Nombre" name="name" />
            <InputControl isRequired inputProps={{ placeholder: "Apellido" }} label="Apellido" name="lastname" />
            <Box display="flex" flexDirection={["column", null, "row"]}>
              <Box flex="1" mb={[2, null, 0]} mr={[null, null, 3.5]}>
                <Select isRequired label="Provincia" name="province" options={[]} />
              </Box>
              <Box flex="1">
                <Select isRequired label="Municipio" name="municipality" options={[]} />
              </Box>
            </Box>
            <InputControl
              isRequired
              inputProps={{ type: "date", placeholder: "Fecha de nacimiento" }}
              label="Fecha de Nacimiento"
              name="brithday"
            />
          </FormSession>
          <Divider my="5" />
          <FormSession
            subtitle="Completa los campos que se te muestran a continuación con tus datos."
            title="Datos de cuenta"
          >
            <InputControl
              isRequired
              inputProps={{ placeholder: "Nombre de usuario" }}
              label="Nombre de usuario"
              name="username"
            />
            <InputControl
              isRequired
              inputProps={{ placeholder: "Correo electrónico" }}
              label="Correo electrónico"
              name="email"
            />
            <InputControl isRequired inputProps={{ placeholder: "Contraseña" }} label="Contraseña" name="password" />
            <InputControl
              isRequired
              inputProps={{ placeholder: "Confirma tu contraseña" }}
              label="Confirma tu contraseña"
              name="confirmPassword"
            />
          </FormSession>
          <Box display="flex" justifyContent="flex-end" mt="3">
            <Button colorScheme="success">Crear cuenta</Button>
          </Box>
        </Box>
      </PrimaryCard>
    </FormProvider>
  );
};
