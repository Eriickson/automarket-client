import React from "react";

// Packages
import { Button, GridItem, SimpleGrid, Heading } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

// My Components
import { PrimaryCard, Select } from "@/components";

export const Searcher = () => {
  const methods = useForm();

  return (
    <PrimaryCard>
      <Heading color="sec.500" fontSize="xl" mb="3">
        Buscar Vehículo
      </Heading>
      <FormProvider {...methods}>
        <SimpleGrid gap="3" columns={12}>
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select label="Marca" name="brand" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select label="Model" name="model" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select label="Año Mín." name="minYear" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select label="Año Máx." name="maxYear" options={[]} />
          </GridItem>
          <GridItem colSpan={[12, null, 4, 2]}>
            <Button mt={[null, null, 5]} colorScheme="pri" w="full">
              Buscar...
            </Button>
          </GridItem>
        </SimpleGrid>
      </FormProvider>
    </PrimaryCard>
  );
};
