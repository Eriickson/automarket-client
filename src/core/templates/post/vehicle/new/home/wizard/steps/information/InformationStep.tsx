import React, { FC } from "react";
import { InformationStepForm } from "./InformationStepForm";
import { useWizard } from "@/components";

export const InformationStep: FC = () => {
  const { nextStep } = useWizard();

  function onSubmit(values: any) {

    return;
    nextStep();
  }

  return (
    <div>
      <InformationStepForm onSubmit={onSubmit} />
    </div>
  );
};
