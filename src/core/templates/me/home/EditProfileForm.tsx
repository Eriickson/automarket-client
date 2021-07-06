import React, { FC, useEffect } from "react";
import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import { useSelector } from "@/store";
import { editProfileFormResolver, EditProfileFormOnSubmit } from "@/validations";
import { InputControl, LabelInput, Select, RadioGroup } from "@/components";
import { useGetProvinces, useGetMunicipalitiesByProvinceId } from "@/graphql";

interface EditProfileFormProps {
  onSubmit(values: EditProfileFormOnSubmit): void;
}

export const EditProfileForm: FC<EditProfileFormProps> = ({ onSubmit }) => {
  const { isEditing, profileMe } = useSelector(({ profile }) => profile);

  const { provinces, getProvincesFetch } = useGetProvinces();
  const { municipalities, getMunicipalitiesByProvinceIdFetch } = useGetMunicipalitiesByProvinceId();

  const methods = useForm<EditProfileFormOnSubmit>();

  useEffect(() => {
    methods.reset({
      province: profileMe.direction.province,
      municipality: profileMe.direction.municipality,
      sex: profileMe.sex,
    });
    getMunicipalitiesByProvinceIdFetch({ provinceId: String(profileMe.direction.province.value) });
  }, [isEditing]);

  useEffect(() => {
    getProvincesFetch();
    profileMe.direction.province &&
      getMunicipalitiesByProvinceIdFetch({ provinceId: String(profileMe.direction.province.value) });
  }, [profileMe.direction.province]);

  return (
    <FormProvider {...methods}>
      <form id="form-edit-profile" onSubmit={methods.handleSubmit(onSubmit)}>
        <Box bg="white" borderColor="gray.100" borderWidth="1px" p="5" shadow="sm">
          <SimpleGrid columns={[12]} gap={3}>
            <GridItem colSpan={[12, 6]}>
              <InputControl
                isRequired
                inputProps={{ placeholder: "Nombre", isDisabled: !isEditing }}
                label="Nombre"
                name="name"
                defaultValue={profileMe.name}
              />
            </GridItem>
            <GridItem colSpan={[12, 6]}>
              <InputControl
                isRequired
                inputProps={{ placeholder: "Apellido", isDisabled: !isEditing }}
                label="Apellido"
                name="lastname"
                defaultValue={profileMe.lastname}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                label="Provincia"
                name="province"
                options={provinces}
                placeholder="Provincia"
                isDisabled={!isEditing}
                onChange={({ value }) => {
                  methods.setValue("municipality", null);
                  getMunicipalitiesByProvinceIdFetch({ provinceId: String(value) });
                }}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                label="Municipio"
                name="municipality"
                options={municipalities}
                placeholder="Municipio"
                defaultValue={profileMe.direction.municipality}
                isDisabled={!isEditing}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <InputControl
                isRequired
                inputProps={{ placeholder: "Fecha de Nacimiento", type: "date", isDisabled: !isEditing }}
                label="Fecha de Nacimiento"
                name="birthday"
                defaultValue={profileMe.birthday}
              />
            </GridItem>
            <GridItem colSpan={[4]}>
              <LabelInput isRequired label="Sexo" />
              <RadioGroup
                name="sex"
                defaultValue={profileMe.sex}
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
