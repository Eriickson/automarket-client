import React, { FC } from "react";
import { InformationStepForm } from "./InformationStepForm";
import { useWizard } from "@/components";
import { NewVehicleInformationFormOnSubmit } from "@/validations";

export const InformationStep: FC = () => {
  const { nextStep } = useWizard();

  function onSubmit(values: NewVehicleInformationFormOnSubmit) {
    console.log(values);
    nextStep();
  }

  return (
    <div>
      <InformationStepForm onSubmit={onSubmit} />
    </div>
  );
};
