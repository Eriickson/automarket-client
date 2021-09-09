import React, { FC, useEffect, useState } from "react";

// Packages
import { FormProvider, useForm } from "react-hook-form";
import { Box, HStack, IconButton, VStack, Text, Divider, Button, Flex, StackDivider, Stack } from "@chakra-ui/react";
import { IconEdit, IconPhone, IconTrash } from "@tabler/icons";

// My Elements
import { useGetMunicipalities, useGetProvinces, useGetSectors } from "@/graphql";
import { Contact } from "@/shared";
import { capitalizeString } from "@/utils";

// My Components
import { InputControl, Select, AddContacts } from "@/components";
import { NewSucursalFormResolver, NewSucursalOnSubmitFormType } from "@/validations";

interface NewSucursalFormProps {
  onSubmit(values: NewSucursalOnSubmitFormType): void;
}

export const NewSucursalForm: FC<NewSucursalFormProps> = ({ onSubmit }) => {
  const methods = useForm({ resolver: NewSucursalFormResolver });
  const [emails, setEmails] = useState<Contact[]>([]);
  const [phoneNumbers, setPhoneNumbers] = useState<Contact[]>([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const { provinces, loading: provinceIsLoading, getProvincesFetch } = useGetProvinces();
  const { municipalities, loading: municipalitiesIsLoading, getMunicipalitiesFetch } = useGetMunicipalities();
  const { sectors, loading: sectorIsLoading, getSectors } = useGetSectors();

  useEffect(() => {
    getProvincesFetch();
  }, []);

  useEffect(() => {
    methods.setValue("contacts.emails", emails);
    methods.setValue("contacts.phoneNumbers", phoneNumbers);
  }, [emails, phoneNumbers]);

  return (
    <FormProvider {...methods}>
      <form id="form-new-sucursal" onSubmit={methods.handleSubmit(onSubmit)}>
        <Text fontSize="lg" fontWeight="medium" mb="3">
          Ubicación
        </Text>
        <VStack alignItems="stretch">
          <Select
            isRequired
            isLoading={provinceIsLoading}
            label="Provincia"
            name="province"
            options={provinces}
            onChange={({ id }) => {
              getMunicipalitiesFetch({ filter: { provinceId: String(id) } });
              methods.setValue("municipality", null);
              methods.setValue("sector", null);
            }}
          />
          <Select
            isRequired
            isLoading={municipalitiesIsLoading}
            label="Municipio"
            name="municipality"
            options={municipalities}
            onChange={({ id }) => {
              getSectors({ filter: { municipalityId: String(id) } });
              methods.setValue("sector", null);
            }}
          />
          <Select
            isRequired
            isLoading={sectorIsLoading}
            label="Sector"
            name="sector"
            options={sectors}
            onChange={({ label }) => {
              if (isEditingName) return;
              const newName = `${capitalizeString(label)}/${methods.getValues("province").label}`;
              methods.setValue("name", newName);
              methods.clearErrors("name");
            }}
          />
          <InputControl isRequired label="Referencia" name="reference" />
          <HStack alignItems="flex-end">
            <InputControl
              isRequired
              // inputProps={{ isDisabled: !isEditingName }}
              label="Nombre distintivo"
              name="name"
            />
            <IconButton
              aria-label="Editar nombre"
              icon={
                <Box color="gray.600">
                  <IconEdit />
                </Box>
              }
              onClick={() => {
                setIsEditingName(!isEditingName);
                setTimeout(() => {
                  methods.setFocus("name");
                }, 500);
              }}
            />
          </HStack>
        </VStack>
        <Divider my="5" />
        <Text fontSize="lg" fontWeight="medium" mb="3">
          Contactos
        </Text>
        <Stack divider={<StackDivider />}>
          {phoneNumbers.map((phoneNumber, i) => (
            <Flex alignItems="center" justifyContent="space-between" key={i}>
              <Flex>
                <Flex
                  alignItems="center"
                  bg="pri.50"
                  border="2px solid"
                  color="pri.400"
                  h="10"
                  justifyContent="center"
                  mr="3"
                  rounded="sm"
                  w="10"
                >
                  <IconPhone />
                </Flex>
                <Box>
                  <Text fontSize="lg" fontWeight="medium" letterSpacing="-0.5px" lineHeight="none">
                    {phoneNumber.value}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {phoneNumber.label}
                  </Text>
                </Box>
              </Flex>
              <IconButton
                _focus={{ shadow: "none" }}
                aria-label="Eliminar contacto"
                colorScheme="danger"
                icon={<IconTrash size="1.25rem" />}
                size="sm"
                variant="ghost"
                onClick={() => setPhoneNumbers(phoneNumbers.filter(item => item.value !== phoneNumber.value))}
              />
            </Flex>
          ))}
        </Stack>
        <HStack alignItems="stretch">
          <AddContacts
            getNewEmail={newEmail => {
              setEmails([...emails, newEmail]);
            }}
            getNewPhoneNumber={newPhoneNumber => {
              setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
            }}
          >
            <Button mt="2" w="full">
              Nuevo contacto
            </Button>
          </AddContacts>
        </HStack>
      </form>
    </FormProvider>
  );
};
