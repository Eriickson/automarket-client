import React, { FC, useEffect } from "react";

import { InputControl, Select } from "@/components";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "@/store";
import { useGetProvinces, useGetMunicipalitiesByProvinceId, useGetSectorsByMunicipalityId } from "@/graphql";

interface UbicationPanelFormProps {
  onSubmit(values: any): void;
}

export const UbicationPanelForm: FC<UbicationPanelFormProps> = ({ onSubmit }) => {
  const { isEditing } = useSelector(({ meAgency }) => meAgency.tabs.ubication);
  const methods = useForm();
  const { getProvincesFetch, provinces, loading: loadingProvinces } = useGetProvinces();
  const {
    getMunicipalitiesByProvinceIdFetch,
    municipalities,
    loading: loadingMunicipalities,
  } = useGetMunicipalitiesByProvinceId();
  const { getSectorsByMunicipalityIdFetch, sectors, loading: loadingSectors } = useGetSectorsByMunicipalityId();

  useEffect(() => {
    getProvincesFetch();
  }, []);

  return (
    <FormProvider {...methods}>
      <form id="me-agency-ubication-edit-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={12} gap={3}>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              isDisabled={!isEditing}
              isLoading={loadingProvinces}
              label="Provincia"
              name="province"
              options={provinces}
              onChange={({ value }) => getMunicipalitiesByProvinceIdFetch({ provinceId: value.toString() })}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              isDisabled={!isEditing}
              isLoading={loadingMunicipalities}
              label="Municipio"
              name="municipality"
              options={municipalities}
              onChange={({ value }) => getSectorsByMunicipalityIdFetch({ municipalityId: value.toString() })}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              isDisabled={!isEditing}
              isLoading={loadingSectors}
              label="Sector"
              name="sector"
              options={sectors}
            />
          </GridItem>
          <GridItem colSpan={12}>
            <InputControl isRequired isDisabled={!isEditing} label="Referencia" name="reference" />
          </GridItem>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
