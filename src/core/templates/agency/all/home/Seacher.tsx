import { InputControl, PrimaryCard } from "@/components";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const Seacher: FC = () => {
  const methods = useForm();
  return (
    <PrimaryCard>
      <FormProvider {...methods}>
        <InputControl noMarginBottom inputProps={{ placeholder: "Nombre de la agencía" }} name="Nombre de la Agencía" />
      </FormProvider>
    </PrimaryCard>
  );
};
