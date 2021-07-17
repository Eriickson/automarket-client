import React, { FC } from "react";
import { ListingStepForm } from "./ListingStepForm";
import { useWizard } from "@/components";

export const ListingStep: FC = () => {
  const { nextStep } = useWizard();
  function onSubmit(values: any) {
    console.log(values);
    nextStep();
  }

  return (
    <div>
      <ListingStepForm onSubmit={onSubmit} />
    </div>
  );
};
