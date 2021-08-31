import { InputControl, Select, Agency } from "@/components";
import { useGetMunicipalities, useGetProvinces, useGetSectorsByMunicipalityId } from "@/graphql";
import { capitalizeString } from "@/utils";
import { Box, HStack, IconButton, VStack, Text, Divider } from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons";
import React, { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface NewSucursalFormProps {
  onSubmit(values: any): void;
}

export const NewSucursalForm: FC<NewSucursalFormProps> = ({ onSubmit }) => {
  const methods = useForm();
  const [isEditingName, setIsEditingName] = useState(false);
  const { provinces, loading: provinceIsLoading, getProvincesFetch } = useGetProvinces();
  const { municipalities, loading: municipalitiesIsLoading, getMunicipalitiesFetch } = useGetMunicipalities();
  const { sectors, loading: sectorIsLoading, getSectorsByMunicipalityIdFetch } = useGetSectorsByMunicipalityId();

  useEffect(() => {
    getProvincesFetch();
  }, []);

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
              getSectorsByMunicipalityIdFetch({ getSectorsMunicipalityId: String(id) });
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
            }}
          />
          <InputControl isRequired label="Referencia" name="reference" />
          <HStack alignItems="flex-end">
            <InputControl isRequired /*  isDisabled={!isEditingName} */ label="Nombre distintivo" name="name" />
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
        <HStack alignItems="stretch">
          <Agency.AgencyNewContact />
        </HStack>
      </form>
    </FormProvider>
  );
};
