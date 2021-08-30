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
      getMunicipalitiesByProvinceIdFetch({ getMunicipalitiesByProvinceId: String(ubication.province.id) });
      getSectorsByMunicipalityIdFetch({ getSectorsMunicipalityId: String(ubication.municipality.id) });
    }
  }, []);

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="container.md" mx="auto">
        <SimpleGrid columns={12} gap={4}>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              defaultValue={ubication?.province}
              label="Provincia"
              name="province"
              options={provinces}
              onChange={({ id }) => {
                methods.setValue("municipality", null);
                methods.setValue("sector", null);
                methods.setValue("reference", null);
                getMunicipalitiesByProvinceIdFetch({ getMunicipalitiesByProvinceId: String(id) });
              }}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              defaultValue={ubication?.municipality}
              label="Municipio"
              name="municipality"
              options={municipalities}
              onChange={({ id }) => {
                methods.setValue("sector", null);
                methods.setValue("reference", null);
                getSectorsByMunicipalityIdFetch({ getSectorsMunicipalityId: String(id) });
              }}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
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
