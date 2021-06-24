import React from "react";
import { Box, SimpleGrid, GridItem, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { InputControl, LabelInput, Select } from "@/components";

export const EditProfileForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Box bg="white" borderWidth="1px" borderColor="gray.100" shadow="sm" p="5">
        <SimpleGrid columns={[12]} gap={3}>
          <GridItem colSpan={[12, 6]}>
            <InputControl isRequired label="Nombre" name="name" inputProps={{ placeholder: "Nombre" }} />
          </GridItem>
          <GridItem colSpan={[12, 6]}>
            <InputControl isRequired label="Apellido" name="name" inputProps={{ placeholder: "Apellido" }} />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select isRequired label="Provincia" placeholder="Provincia" name="name" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <Select isRequired label="Municipio" placeholder="Municipio" name="name" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 4]}>
            <InputControl
              isRequired
              label="Fecha de Nacimiento"
              name="name"
              inputProps={{ placeholder: "Fecha de Nacimiento", type: "date" }}
            />
          </GridItem>
          <GridItem colSpan={[4]}>
            <LabelInput label="Sexo" isRequired />
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
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
