import React, { FC } from "react";
import {
  InputControl,
  PrimaryCard,
  Select,
  SelectProfileImage,
  SelectProfileImageProvider,
  LabelInput,
} from "@/components";
import { Box, Divider, Button, Tag, TagLabel, TagLeftIcon, VStack, Text } from "@chakra-ui/react";

import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "@/store";
import { FormSession } from "./FormSession";
import { IconInfoCircle } from "@tabler/icons";

export const RegisterForm: FC = () => {
  const { email } = useSelector(({ login }) => login.register);
  const methods = useForm({ defaultValues: { email } });

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
              <VStack align="flex-start" mt="3">
                <Tag colorScheme="info" >
                  <TagLeftIcon as={IconInfoCircle} boxSize="1rem" color="info.500" />
                  <TagLabel color="info.500" display="flex">
                    Resolución mín.:
                    <Text fontWeight="semibold" ml="1">500x500</Text>
                  </TagLabel>
                </Tag>
                <Tag colorScheme="info">
                  <TagLeftIcon as={IconInfoCircle} boxSize="1rem" color="info.500" />
                  <TagLabel color="info.500" display="flex">
                    Peso máx.: <Text fontWeight="semibold" ml="1">5mb</Text>
                  </TagLabel>
                </Tag>
              </VStack>
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
              inputProps={{ placeholder: "Correo electrónico", isDisabled: true }}
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
