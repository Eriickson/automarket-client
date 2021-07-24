import { InputControl, Select, RadioGroup, LabelInput } from "@/components";
import { Box, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useSelector } from "@/store";
import { useGetModelsByBrandId, useGetTypeModelByModelId } from "@/graphql";
import { useCylinders, useYear } from "@/hooks";

interface InformationStepFormProps {
  onSubmit(values: any): void;
}

export const InformationStepForm: FC<InformationStepFormProps> = ({ onSubmit }) => {
  const { brands, vehicleCategories, fuels, colors, conditions, tractions, transmissions } = useSelector(
    ({ newVehicle }) => newVehicle.steps.information,
  );
  const { getModelsByBrandIdFetch, models, loadingModels } = useGetModelsByBrandId();
  const { getTypeModelByModelId, typeModels, loadingTypeModels } = useGetTypeModelByModelId();
  const { cylinders } = useCylinders();
  const { years } = useYear();

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form id="form-information-step" onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxW="3xl" mx="auto">
          <SimpleGrid columns={12} gap={3}>
            <GridItem colSpan={[12, null, 6]}>
              <Select
                isRequired
                label="Marca"
                name="brand"
                options={brands}
                onChange={({ value }) => {
                  methods.setValue("model", null);
                  methods.setValue("typeModel", null);
                  getModelsByBrandIdFetch({ brandId: value.toString() });
                }}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select
                isRequired
                isLoading={loadingModels}
                label="Modelo"
                name="model"
                options={models}
                onChange={({ value }) => getTypeModelByModelId({ modelId: value.toString() })}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select
                isDisabled={!typeModels.length || !methods.getValues("model")}
                isLoading={loadingTypeModels}
                label="Tipo"
                name="typeModel"
                options={typeModels}
              />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Año" name="year" options={years} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Categoria" name="category" options={vehicleCategories} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Combustible" name="fuel" options={fuels} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Transmisión" name="transmission" options={transmissions} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Tracción" name="traction" options={tractions} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Cilindros" name="cylinders" options={cylinders} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <InputControl isRequired label="Pasajeros" name="passengers" />
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
              <LabelInput isRequired label="Recorrido" />
              <HStack alignItems="center">
                <RadioGroup
                  defaultValue="DOP"
                  name="currency"
                  radioItems={[
                    { label: "Mi", value: "MI" },
                    { label: "Km", value: "KM" },
                  ]}
                  size="md"
                />
                <InputControl isRequired name="amount" />
              </HStack>
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <InputControl isRequired label="Puertas" name="doors" />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Condición" name="condition" options={conditions} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Color de pintura" name="paintColor" options={colors} />
            </GridItem>
            <GridItem colSpan={[12, null, 6]}>
              <Select isRequired label="Color del interior" name="interiorColor" options={colors} />
            </GridItem>
          </SimpleGrid>
        </Box>
      </form>
    </FormProvider>
  );
};
