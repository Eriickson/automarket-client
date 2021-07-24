import React, { FC } from "react";
import { Range, Select } from "@/components";
import { VStack } from "@chakra-ui/react";

export const AccordionItemFilterForm: FC = () => {
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
        defaultValue={[50000, 3000000]}
        format="0,0"
        label="Precio"
        max={3000000}
        min={50000}
        name="price"
        step={25000}
      />
      <Select label="Categoría" name="typModel" options={[]} />
      <Select label="Condiciones" name="typModel" options={[]} />
    </VStack>
  );
};
