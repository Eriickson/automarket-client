import React, { FC } from "react";
import { Box, SimpleGrid, GridItem, Radio, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputControl, LabelInput, Select, RadioGroup } from "@/components";
import { useAction, useSelector } from "@/store";

export const EditProfileForm: FC = () => {
  const { isEditing } = useSelector(({ profile }) => profile);
  const methods = useForm();
  return (
    <FormProvider {...methods}>
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
              name="name"
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              label="Provincia"
              name="name"
              options={[]}
              placeholder="Provincia"
              isDisabled={!isEditing}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select
              isRequired
              label="Municipio"
              name="name"
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
              name="name"
            />
          </GridItem>
          <GridItem colSpan={[4]}>
            <LabelInput isRequired label="Sexo" />
            <RadioGroup
              name="sex"
              radioItems={[
                { label: "Masculino", value: "M", isDisable: !isEditing },
                { label: "Femenino", value: "F", isDisable: !isEditing },
              ]}
            />
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormProvider>
  );
};
