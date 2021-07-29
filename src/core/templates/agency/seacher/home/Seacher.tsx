import { Select, InputControl, PrimaryCard } from "@/components";
import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const Seacher: FC = () => {
  const methods = useForm();
  return (
    <PrimaryCard>
      <FormProvider {...methods}>
        <SimpleGrid alignItems="flex-end" columns={12} gap={3}>
          <GridItem colSpan={7}>
            <InputControl
              noMarginBottom
              inputProps={{ placeholder: "Nombre de la agencía" }}
              label="Nombre de la agencia"
              name="Nombre de la Agencía"
            />
          </GridItem>
          <GridItem colSpan={5}>
            <Select label="Provincia" name="province" options={[]} />
          </GridItem>
        </SimpleGrid>
      </FormProvider>
    </PrimaryCard>
  );
};
