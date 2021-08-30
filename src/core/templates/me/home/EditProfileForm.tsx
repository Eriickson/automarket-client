import React, { FC, useEffect } from "react";
import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import { useSelector } from "@/store";
import { EditProfileFormOnSubmit } from "@/validations";
import { InputControl, LabelInput, Select, RadioGroup } from "@/components";
import { useGetProvinces, useGetMunicipalities } from "@/graphql";

interface EditProfileFormProps {
  onSubmit(values: EditProfileFormOnSubmit): void;
}

export const EditProfileForm: FC<EditProfileFormProps> = ({ onSubmit }) => {
  const { isEditing, profileMe } = useSelector(({ profile }) => profile);

  const { provinces, getProvincesFetch } = useGetProvinces();
  const { municipalities, getMunicipalitiesFetch } = useGetMunicipalities();

  const methods = useForm<EditProfileFormOnSubmit>();

  useEffect(() => {
    methods.reset({
      province: profileMe.direction.province,
      municipality: profileMe.direction.municipality,
      sex: profileMe.sex,
    });
    getMunicipalitiesFetch({ filter: { provinceId: String(profileMe.direction.province.id) } });
  }, [isEditing]);

  useEffect(() => {
    getProvincesFetch();
    profileMe.direction.province &&
      getMunicipalitiesFetch({ filter: { provinceId: String(profileMe.direction.province.id) } });
  }, [profileMe.direction.province]);

  return (
    <FormProvider {...methods}>
      <form id="form-edit-profile" onSubmit={methods.handleSubmit(onSubmit)}>
        <Box bg="white" borderColor="gray.100" borderWidth="1px" p="5" shadow="sm">
          <SimpleGrid columns={[12]} gap={3}>
            <GridItem colSpan={[12, 6]}>
              <InputControl
                isRequired
                defaultValue={profileMe.name}
                inputProps={{ placeholder: "Nombre", isDisabled: !isEditing }}
                // isDisabled={!isEditing}
                label="Nombre"
                name="name"
              />
            </GridItem>
            <GridItem colSpan={[12, 6]}>
              <InputControl
                isRequired
                defaultValue={profileMe.lastname}
                inputProps={{ placeholder: "Apellido", isDisabled: !isEditing }}
                // isDisabled={!isEditing}
                label="Apellido"
                name="lastname"
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                isDisabled={!isEditing}
                label="Provincia"
                name="province"
                options={provinces}
                placeholder="Provincia"
                onChange={({ id }) => {
                  methods.setValue("municipality", null);
                  getMunicipalitiesFetch({ filter: { provinceId: String(id) } });
                }}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                defaultValue={profileMe.direction.municipality}
                isDisabled={!isEditing}
                label="Municipio"
                name="municipality"
                options={municipalities}
                placeholder="Municipio"
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <InputControl
                isRequired
                defaultValue={profileMe.birthday}
                inputProps={{ placeholder: "Fecha de Nacimiento", type: "date", isDisabled: !isEditing }}
                // isDisabled={!isEditing}
                label="Fecha de Nacimiento"
                name="birthday"
              />
            </GridItem>
            <GridItem colSpan={[4]}>
              <LabelInput isRequired label="Sexo" />
              <RadioGroup
                defaultValue={profileMe.sex}
                name="sex"
                radioItems={[
                  { label: "Masculino", value: "M", isDisable: !isEditing },
                  { label: "Femenino", value: "F", isDisable: !isEditing },
                ]}
              />
            </GridItem>
          </SimpleGrid>
        </Box>
      </form>
    </FormProvider>
  );
};
