import { InputControl, Select, RadioGroup, LabelInput } from "@/components";
import { Box, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";

export const InformationStepForm: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Box maxW="3xl" mx="auto">
        <SimpleGrid columns={12} gap={3}>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Marca" name="brand" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Modelo" name="model" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Tipo" name="typeModel" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Año" name="year" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Categoria" name="category" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Combustible" name="fuel" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Transmisión" name="transmission" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Tracción" name="traction" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Cilindros" name="cylinders" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <LabelInput isRequired label="Precio" />
            <HStack alignItems="center">
              <RadioGroup
                defaultValue="DOP"
                name="currency"
                radioItems={[
                  { label: "RD$", value: "DOP" },
                  { label: "US$", value: "USD" },
                ]}
                size="md"
              />
              <InputControl isRequired name="amount" />
            </HStack>
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Condición" name="condition" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Color de pintura" name="paintColor" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Select isRequired label="Color del interior" name="interiorColor" options={[]} />
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormProvider>
  );
};
