import React, { FC, useState } from "react";
import { Range, Select } from "@/components";
import { Button, HStack, VStack } from "@chakra-ui/react";

type PriceLevelType = "$" | "$$" | "$$$";

export const AccordionItemFilterForm: FC = () => {
  const [priceLevelSelected, setPriceLevelSelected] = useState<PriceLevelType>("$");
  const [priceLevel] = useState<Record<PriceLevelType, number[]>>({
    /* min, max, step */
    $: [30_000, 1_000_000, 5_000],
    $$: [1_000_000, 5_000_000, 100_000],
    $$$: [5_000_000, 15_000_000, 250_000],
  });

  return (
    <VStack alignItems="stretch">
      <Select label="Marca" name="brand" options={[]} />
      <Select label="Modelo" name="model" options={[]} />
      <Select label="Tipo de modelo" name="typModel" options={[]} />
      <Select label="Provincia" name="province" options={[]} />
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
