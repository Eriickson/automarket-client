import React, { FC } from "react";

// Packages
import { Button, GridItem, SimpleGrid, Heading } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

// My Components
import { PrimaryCard, Select } from "@/components";
import { useGetBrands } from "@/graphql";
import { useYear } from "@/hooks";

export const Searcher: FC = () => {
  const methods = useForm();
  // const {} = useGetBrands()
  const { years, yearsBetween } = useYear(methods.watch("minYear")?.value);

  console.log(methods.watch("minYear"));

  return (
    <PrimaryCard>
      <Heading color="sec.500" fontSize="xl" mb="3">
        Buscar Vehículo
      </Heading>
      <FormProvider {...methods}>
        <SimpleGrid columns={12} gap="3">
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select label="Marca" name="brand" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select label="Model" name="model" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select
              label="Año Mín."
              name="minYear"
              options={years}
              onChange={({ value }) => {
                value > methods.getValues("maxYear")?.value &&
                  methods.setValue("maxYear", { label: value.toString(), value });
              }}
            />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select label="Año Máx." name="maxYear" options={yearsBetween} />
          </GridItem>
          <GridItem colSpan={[12, null, 4, 2]}>
            <Button colorScheme="pri" mt={[null, null, 5]} w="full">
              Buscar...
            </Button>
          </GridItem>
        </SimpleGrid>
      </FormProvider>
    </PrimaryCard>
  );
};
