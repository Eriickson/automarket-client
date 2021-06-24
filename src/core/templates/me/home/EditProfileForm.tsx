import React, { FC } from "react";
import { Box, SimpleGrid, GridItem, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputControl, LabelInput, Select } from "@/components";

export const EditProfileForm: FC = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box bg="white" borderColor="gray.100" borderWidth="1px" p="5" shadow="sm">
        <SimpleGrid columns={[12]} gap={3}>
          <GridItem colSpan={[12, 6]}>
            <InputControl isRequired inputProps={{ placeholder: "Nombre" }} label="Nombre" name="name" />
          </GridItem>
          <GridItem colSpan={[12, 6]}>
            <InputControl isRequired inputProps={{ placeholder: "Apellido" }} label="Apellido" name="name" />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select isRequired label="Provincia" name="name" options={[]} placeholder="Provincia" />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select isRequired label="Municipio" name="name" options={[]} placeholder="Municipio" />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <InputControl
              isRequired
              inputProps={{ placeholder: "Fecha de Nacimiento", type: "date" }}
              label="Fecha de Nacimiento"
              name="name"
            />
          </GridItem>
          <GridItem colSpan={[4]}>
            <LabelInput isRequired label="Sexo" />
            <RadioGroup defaultValue="2">
              <Stack direction="row" spacing={5}>
                <Radio size="lg" value="1">
                  Másculino
                </Radio>
                <Radio size="lg" value="2">
                  Femenino
                </Radio>
              </Stack>
            </RadioGroup>
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormProvider>
  );
};
