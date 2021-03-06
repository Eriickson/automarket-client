import React, { FC, useEffect } from "react";

import Link from "next/link";

// Packages
import { Button, GridItem, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
// My Components
import { Select } from "@/components";
import { useGetBrands, useGetModels } from "@/graphql";
import { useYear } from "@/hooks";

interface SeacherFormProps {
  onSubmit(values: any): void;
}

export const SeacherForm: FC<SeacherFormProps> = ({ onSubmit }) => {
  const methods = useForm();
  const { getBrandsFetch, brands, loading } = useGetBrands();
  const { getModelsFetch, models, loadingModels } = useGetModels();
  const { years, yearsBetween } = useYear(methods.watch("minYear")?.id);

  useEffect(() => {
    getBrandsFetch();
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={12} gap="3">
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select
              isLoading={loading}
              label="Marca"
              name="brand"
              options={brands}
              onChange={({ id }) => {
                getModelsFetch({ getModelsFilter: { brandId: String(id) } });
                methods.setValue("model", null);
              }}
            />
          </GridItem>
          <GridItem colSpan={[12, null, 6, 3]}>
            <Select isLoading={loadingModels} label="Model" name="model" options={models} />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select
              label="Año Mín."
              name="minYear"
              options={years}
              onChange={({ id }) => {
                id > methods.getValues("maxYear")?.id && methods.setValue("maxYear", { label: id.toString(), id });
              }}
            />
          </GridItem>
          <GridItem colSpan={[12, 6, 4, 2]}>
            <Select label="Año Máx." name="maxYear" options={yearsBetween} />
          </GridItem>
          <GridItem colSpan={[12, null, 4, 2]}>
            <Button colorScheme="pri" mt={[null, null, 5]} type="submit" w="full">
              Buscar...
            </Button>
          </GridItem>
        </SimpleGrid>
        <Link
          href={{
            pathname: "/post/vehicle/searcher",
            query: {
              advancedSearch: true,
            },
          }}
        >
          <a>
            <ChakraLink color="blue.600">Búsqueda avanzada</ChakraLink>
          </a>
        </Link>
      </form>
    </FormProvider>
  );
};
