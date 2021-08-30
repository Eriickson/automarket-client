import React, { FC, useEffect } from "react";

// Packages
import { Box, Divider, Button, Tag, TagLabel, TagLeftIcon, VStack, Text } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

// My Elements
import { IconInfoCircle } from "@tabler/icons";
import { useSelector } from "@/store";
import { RegisterUserFormResolver, RegisterUserOnSubmitFormType } from "@/validations";
import { useGetProvinces, useGetMunicipalitiesByProvinceId } from "@/graphql";

// My Components
import { InputControl, PrimaryCard, Select, LabelInput, RadioGroup } from "@/components";
import { SelectProfileImage } from "./SelectProfileImage";
import { FormSession } from "./FormSession";

interface RegisterFormProps {
  onSubmit(values: RegisterUserOnSubmitFormType): void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const { email } = useSelector(({ login }) => login.register);
  const { provinces, getProvincesFetch } = useGetProvinces();
  const { municipalities, getMunicipalitiesByProvinceIdFetch } = useGetMunicipalitiesByProvinceId();
  const methods = useForm<RegisterUserOnSubmitFormType>({
    resolver: RegisterUserFormResolver,
    defaultValues: {
      email,
      name: "Erickson Manuel",
      lastname: "Holguín",
      username: "test01d",
      password: "123456789t",
      confirmPassword: "123456789t",
      birthday: "1999-03-11",
      sex: "M",
    },
  });

  useEffect(() => {
    getProvincesFetch();
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PrimaryCard>
          <Box maxW="lg" mx="auto">
            <FormSession
              subtitle="Completa los campos que se te muestran a continuación con tus datos."
              title="Datos Personales"
            >
              <Box>
                <LabelInput label="Imagen de perfil" />
                <SelectProfileImage />
                <VStack align="flex-start" mt="3">
                  <Tag colorScheme="info">
                    <TagLeftIcon as={IconInfoCircle} boxSize="1rem" color="info.500" />
                    <TagLabel color="info.500" display="flex">
                      Resolución mín.:
                      <Text fontWeight="semibold" ml="1">
                        500x500
                      </Text>
                    </TagLabel>
                  </Tag>
                  <Tag colorScheme="info">
                    <TagLeftIcon as={IconInfoCircle} boxSize="1rem" color="info.500" />
                    <TagLabel color="info.500" display="flex">
                      Peso máx.:{" "}
                      <Text fontWeight="semibold" ml="1">
                        5mb
                      </Text>
                    </TagLabel>
                  </Tag>
                </VStack>
              </Box>
              <InputControl isRequired inputProps={{ placeholder: "Nombre" }} label="Nombre" name="name" />
              <InputControl isRequired inputProps={{ placeholder: "Apellido" }} label="Apellido" name="lastname" />
              <Box display="flex" flexDirection={["column", null, "row"]}>
                <Box flex="1" mb={[2, null, 0]} mr={[null, null, 3.5]}>
                  <Select
                    isRequired
                    label="Provincia"
                    name="province"
                    options={provinces}
                    onChange={({ id }) => {
                      methods.setValue("municipality", { label: "Seleccionar...", id });
                      getMunicipalitiesByProvinceIdFetch({ getMunicipalitiesByProvinceId: String(id) });
                    }}
                  />
                </Box>
                <Box flex="1">
                  <Select isRequired label="Municipio" name="municipality" options={municipalities} />
                </Box>
              </Box>
              <InputControl
                isRequired
                inputProps={{ type: "date", placeholder: "Fecha de nacimiento" }}
                label="Fecha de Nacimiento"
                name="birthday"
              />
              <Box>
                <LabelInput isRequired label="Sexo" />
                <RadioGroup
                  defaultValue="F"
                  name="sex"
                  radioItems={[
                    { label: "Másculino", value: "M" },
                    { label: "Femenino", value: "F" },
                  ]}
                  size="lg"
                />
              </Box>
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
              <Button colorScheme="success" type="submit">
                Crear cuenta
              </Button>
            </Box>
          </Box>
        </PrimaryCard>
      </form>
    </FormProvider>
  );
};
