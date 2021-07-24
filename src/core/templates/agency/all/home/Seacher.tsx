import { InputControl, PrimaryCard } from "@/components";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const Seacher: FC = () => {
  const methods = useForm();
  return (
    <PrimaryCard>
      <FormProvider {...methods}>
        <InputControl noMarginBottom name="Nombre de la Agencía" inputProps={{ placeholder: "Nombre de la agencía" }} />
      </FormProvider>
    </PrimaryCard>
  );
};
