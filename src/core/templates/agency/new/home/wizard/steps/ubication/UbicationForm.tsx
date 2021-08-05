import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";

// My Elements
import { useSelector } from "@/store";

import { Select, FormWizardProvider, InputControl } from "@/components";
import { useGetProvinces, useGetMunicipalitiesByProvinceId, useGetSectorsByMunicipalityId } from "@/graphql";

import { NewAgencyUbicationResolver, IUbicationNewAgencyOnSubmit } from "@/validations";
interface UbicationFormProps {
  onSubmit(values: IUbicationNewAgencyOnSubmit): void;
}

export const UbicationForm: FC<UbicationFormProps> = ({ onSubmit }) => {
  const { ubication } = useSelector(({ agency }) => agency.new);
  const { provinces, getProvincesFetch } = useGetProvinces();
  const { municipalities, getMunicipalitiesByProvinceIdFetch } = useGetMunicipalitiesByProvinceId();
  const { sectors, getSectorsByMunicipalityIdFetch } = useGetSectorsByMunicipalityId();
  const methods = useForm({ resolver: NewAgencyUbicationResolver });

  useEffect(() => {
    getProvincesFetch();

    if (ubication?.province) {
      getMunicipalitiesByProvinceIdFetch({ provinceId: String(ubication.province.value) });
      getSectorsByMunicipalityIdFetch({ municipalityId: String(ubication.municipality.value) });
    }
  }, []);

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="container.md" mx="auto">
        <SimpleGrid columns={12} gap={4}>
          <GridItem colSpan={4}>
            <Select
              isRequired
              defaultValue={ubication?.province}
              label="Provincia"
              name="province"
              options={provinces}
              onChange={({ value }) => {
                methods.setValue("municipality", null);
                methods.setValue("sector", null);
                methods.setValue("reference", null);
                getMunicipalitiesByProvinceIdFetch({ provinceId: String(value) });
              }}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Select
              isRequired
              defaultValue={ubication?.municipality}
              label="Municipio"
              name="municipality"
              options={municipalities}
              onChange={({ value }) => {
                methods.setValue("sector", null);
                methods.setValue("reference", null);
                getSectorsByMunicipalityIdFetch({ municipalityId: String(value) });
              }}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Select
              isRequired
              defaultValue={ubication?.sector}
              label="Sector"
              name="sector"
              options={sectors}
              onChange={() => methods.setValue("reference", null)}
            />
          </GridItem>
          <GridItem colSpan={12}>
            <InputControl isRequired defaultValue={ubication?.reference} label="Referencia" name="reference" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormWizardProvider>
  );
};
