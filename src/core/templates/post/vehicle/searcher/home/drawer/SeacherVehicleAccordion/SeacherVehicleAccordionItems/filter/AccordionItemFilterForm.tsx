import React, { FC, useEffect, useState } from "react";
import { Range, Select } from "@/components";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useGetBrands, useGetModels, useGetProvinces } from "@/graphql";

type PriceLevelType = "$" | "$$" | "$$$";

export const AccordionItemFilterForm: FC = () => {
  const { getBrandsFetch, loading, brands } = useGetBrands();
  const { getModelsFetch, loadingModels, models } = useGetModels();
  const { getProvincesFetch, loading: loadingProvinces, provinces } = useGetProvinces();

  const [priceLevelSelected, setPriceLevelSelected] = useState<PriceLevelType>("$");
  const [priceLevel] = useState<Record<PriceLevelType, number[]>>({
    /* min, max, step */
    $: [30_000, 1_000_000, 5_000],
    $$: [1_000_000, 5_000_000, 100_000],
    $$$: [5_000_000, 15_000_000, 250_000],
  });

  useEffect(() => {
    getBrandsFetch();
    getProvincesFetch();
  }, []);

  return (
    <VStack alignItems="stretch">
      <Select
        isLoading={loading}
        label="Marca"
        name="brand"
        options={brands}
        onChange={({ id }) => getModelsFetch({ getModelsFilter: { brandId: String(id) } })}
      />
      <Select isLoading={loadingModels} label="Modelo" name="model" options={models} />
      <Select label="Tipo de modelo" name="typModel" options={[]} />
      <Select isLoading={loadingProvinces} label="Provincia" name="province" options={provinces} />
      <Range
        multiple
        defaultValue={[1960, new Date().getFullYear() + 1]}
        label="Año"
        max={new Date().getFullYear() + 1}
        min={1960}
        name="year"
        step={1}
      />
      <Range
        multiple
        defaultValue={[priceLevel[priceLevelSelected][0], priceLevel[priceLevelSelected][1]]}
        format="0,0"
        label="Precio"
        max={priceLevel[priceLevelSelected][1]}
        min={priceLevel[priceLevelSelected][0]}
        name="price"
        step={priceLevel[priceLevelSelected][2]}
      />
      <HStack>
        <Button size="sm" onClick={() => setPriceLevelSelected("$")}>
          $
        </Button>
        <Button size="sm" onClick={() => setPriceLevelSelected("$$")}>
          $$
        </Button>
        <Button size="sm" onClick={() => setPriceLevelSelected("$$$")}>
          $$$
        </Button>
      </HStack>
      <Select label="Categoría" name="typModel" options={[]} />
      <Select label="Condiciones" name="typModel" options={[]} />
    </VStack>
  );
};
