import React, { FC } from "react";
import { InformationStepForm } from "./InformationStepForm";
import { useWizard } from "@/components";
import { NewVehicleInformationFormOnSubmit } from "@/validations";
import { useAction } from "@/store";

export const InformationStep: FC = () => {
  const { nextStep } = useWizard();
  const { setNewVehicleData } = useAction();

  function onSubmit(values: NewVehicleInformationFormOnSubmit) {
    setNewVehicleData(values);
    nextStep();
  }

  return (
    <div>
      <InformationStepForm onSubmit={onSubmit} />
    </div>
  );
};
