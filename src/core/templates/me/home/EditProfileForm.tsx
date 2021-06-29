import React, { FC, useEffect } from "react";
import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import { useSelector } from "@/store";
import { editProfileFormResolver, EditProfileFormOnSubmit } from "@/validations";
import { InputControl, LabelInput, Select, RadioGroup } from "@/components";

interface EditProfileFormProps {
  onSubmit(values: EditProfileFormOnSubmit): void;
}

export const EditProfileForm: FC<EditProfileFormProps> = ({ onSubmit }) => {
  const { isEditing } = useSelector(({ profile }) => profile);
  const methods = useForm<EditProfileFormOnSubmit>({ resolver: editProfileFormResolver });

  useEffect(() => {
    methods.reset({ sex: "F" });
  }, [isEditing]);

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
              />
            </GridItem>
            <GridItem colSpan={[12, 6]}>
              <InputControl
                isRequired
                inputProps={{ placeholder: "Apellido", isDisabled: !isEditing }}
                label="Apellido"
                name="lastname"
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                label="Provincia"
                name="province"
                options={[]}
                placeholder="Provincia"
                isDisabled={!isEditing}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <Select
                isRequired
                label="Municipio"
                name="municipality"
                options={[]}
                placeholder="Municipio"
                isDisabled={!isEditing}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 4]}>
              <InputControl
                isRequired
                inputProps={{ placeholder: "Fecha de Nacimiento", type: "date", isDisabled: !isEditing }}
                label="Fecha de Nacimiento"
                name="birthday"
              />
            </GridItem>
            <GridItem colSpan={[4]}>
              <LabelInput isRequired label="Sexo" />
              <RadioGroup
                name="sex"
                defaultValue="F"
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
