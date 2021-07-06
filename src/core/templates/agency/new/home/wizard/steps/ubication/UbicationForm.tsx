import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";

import { Select, FormWizardProvider, InputControl } from "@/components";
import { useGetProvinces, useGetMunicipalitiesByProvinceId, useGetSectorsByMunicipalityId } from "@/graphql";
import { useEffect } from "react";

interface UbicationFormProps {
  onSubmit(values: any): void;
}

export const UbicationForm: FC<UbicationFormProps> = ({ onSubmit }) => {
  const { provinces, getProvincesFetch } = useGetProvinces();
  const { municipalities, getMunicipalitiesByProvinceIdFetch } = useGetMunicipalitiesByProvinceId();
  const { sectors, getSectorsByMunicipalityIdFetch } = useGetSectorsByMunicipalityId();
  const methods = useForm();

  useEffect(() => {
    getProvincesFetch();
  }, []);

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="container.md" mx="auto">
        <SimpleGrid gap={4} columns={12}>
          <GridItem colSpan={4}>
            <Select
              isRequired
              label="Provincia"
              name="province"
              options={provinces}
              onChange={({ value }) => {
                methods.setValue("municipality", null);
                getMunicipalitiesByProvinceIdFetch({ provinceId: String(value) });
              }}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Select
              isRequired
              label="Municipio"
              name="municipality"
              options={municipalities}
              onChange={({ value }) => {
                methods.setValue("sector", null);
                getSectorsByMunicipalityIdFetch({ municipalityId: String(value) });
              }}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Select isRequired label="Sector" name="sector" options={sectors} />
          </GridItem>
          <GridItem colSpan={12}>
            <InputControl isRequired label="Referencia" name="reference" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormWizardProvider>
  );
};
