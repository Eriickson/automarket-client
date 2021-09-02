import React, { FC, useEffect } from "react";

import { InputControl, Select } from "@/components";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "@/store";
import { useGetProvinces, useGetMunicipalities, useGetSectors } from "@/graphql";

interface UbicationPanelFormProps {
  onSubmit(values: any): void;
}

export const UbicationPanelForm: FC<UbicationPanelFormProps> = ({ onSubmit }) => {
  const { isEditing } = useSelector(({ meAgency }) => meAgency.tabs.ubication);
  const methods = useForm();
  const { getProvincesFetch, provinces, loading: loadingProvinces } = useGetProvinces();
  const { getMunicipalitiesFetch, municipalities, loading: loadingMunicipalities } = useGetMunicipalities();
  const { getSectors, sectors, loading: loadingSectors } = useGetSectors();

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
              onChange={({ id }) => getMunicipalitiesFetch({ filter: { provinceId: String(id) } })}
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
              onChange={({ id }) => getSectors({ filter: { municipalityId: String(id) } })}
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
            <InputControl isRequired /* isDisabled={!isEditing} */ label="Referencia" name="reference" />
          </GridItem>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
